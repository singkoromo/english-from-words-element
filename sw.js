/**
 * sw.js — Service Worker（オフライン対応）
 */
const CACHE_NAME = "etymology-v101";
const ASSETS = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/data-prefix-1.js",
  "/js/data-prefix-2.js",
  "/js/data-suffix-1.js",
  "/js/data-suffix-2.js",
  "/js/examples.js",
  "/js/origins.js",
  "/js/data.js",
  "/js/storage.js",
  "/js/quiz.js",
  "/js/app.js",
  "/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
