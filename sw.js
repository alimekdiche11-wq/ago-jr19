/*
 * AgroScope service worker.
 *
 * Purpose: after the hosted copy has been visited once, it keeps working with
 * no network — the field case. Only app-shell files are cached; nothing is
 * sent anywhere and there is no server logic.
 *
 * Strategy:
 *   - navigations (index.html) : network first, fall back to the cached shell
 *   - other same-origin GETs    : cache first, revalidate in the background
 *
 * Bump CACHE when shipping new files so clients pick them up.
 */
"use strict";

const CACHE = "agroscope-v64";

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-maskable-512.png",
  "./assets/css/app.css?v=64",
  "./assets/js/data-core.js?v=64",
  "./assets/js/data-pests.js?v=64",
  "./assets/js/data-pests-2.js?v=64",
  "./assets/js/data-diseases.js?v=64",
  "./assets/js/data-disorders.js?v=64",
  "./assets/js/data-guides.js?v=64",
  "./assets/js/data-ipm.js?v=64",
  "./assets/js/app.js?v=64",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Document requests: freshness matters, so try the network first.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        /* A hosting 5xx is not a page. Fall back to the shell the way a lost
           connection does, so the field copy still opens, and never let an
           error response overwrite the cached shell. */
        if (res && res.status >= 500) {
          return caches.match("./index.html").then(function (hit) { return hit || res; });
        }
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("./index.html");
        });
      })
    );
    return;
  }

  // Static assets: serve from cache, refresh in the background.
  event.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) {
        fetch(req).then(function (res) {
          if (res && res.ok) caches.open(CACHE).then(function (c) { c.put(req, res.clone()); });
        }).catch(function () {});
        return hit;
      }
      return fetch(req).then(function (res) {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
