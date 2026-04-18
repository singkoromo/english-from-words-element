/**
 * sw.js — Service Worker（オフライン対応）
 */
const CACHE_NAME = "etymology-v312";
const ASSETS = [
  "/",
  "/index.html",
  "/css/style.css",
  "/manifest.json",
  "/js/data.js",
  "/js/storage.js",
  "/js/quiz.js",
  "/js/app.js",
  "/js/examples.js",
  "/js/origins.js",
  // 接頭語データ (18ファイル)
  "/js/data-prefix-1.js",
  "/js/data-prefix-2.js",
  "/js/data-prefix-3.js",
  "/js/data-prefix-4.js",
  "/js/data-prefix-5.js",
  "/js/data-prefix-6.js",
  "/js/data-prefix-7.js",
  "/js/data-prefix-8.js",
  "/js/data-prefix-9.js",
  "/js/data-prefix-10.js",
  "/js/data-prefix-11.js",
  "/js/data-prefix-12.js",
  "/js/data-prefix-13.js",
  "/js/data-prefix-14.js",
  "/js/data-prefix-15.js",
  "/js/data-prefix-16.js",
  "/js/data-prefix-17.js",
  "/js/data-prefix-18.js",
  // 接尾語データ (16ファイル)
  "/js/data-suffix-1.js",
  "/js/data-suffix-2.js",
  "/js/data-suffix-3.js",
  "/js/data-suffix-4.js",
  "/js/data-suffix-5.js",
  "/js/data-suffix-6.js",
  "/js/data-suffix-7.js",
  "/js/data-suffix-8.js",
  "/js/data-suffix-9.js",
  "/js/data-suffix-10.js",
  "/js/data-suffix-11.js",
  "/js/data-suffix-12.js",
  "/js/data-suffix-13.js",
  "/js/data-suffix-14.js",
  "/js/data-suffix-15.js",
  "/js/data-suffix-16.js",
  // 語根データ (33ファイル)
  "/js/data-root-1.js",
  "/js/data-root-2.js",
  "/js/data-root-3.js",
  "/js/data-root-4.js",
  "/js/data-root-5.js",
  "/js/data-root-6.js",
  "/js/data-root-7.js",
  "/js/data-root-8.js",
  "/js/data-root-9.js",
  "/js/data-root-10.js",
  "/js/data-root-11.js",
  "/js/data-root-12.js",
  "/js/data-root-13.js",
  "/js/data-root-14.js",
  "/js/data-root-15.js",
  "/js/data-root-16.js",
  "/js/data-root-17.js",
  "/js/data-root-18.js",
  "/js/data-root-19.js",
  "/js/data-root-20.js",
  "/js/data-root-21.js",
  "/js/data-root-22.js",
  "/js/data-root-23.js",
  "/js/data-root-24.js",
  "/js/data-root-25.js",
  "/js/data-root-26.js",
  "/js/data-root-27.js",
  "/js/data-root-28.js",
  "/js/data-root-29.js",
  "/js/data-root-30.js",
  "/js/data-root-31.js",
  "/js/data-root-32.js",
  "/js/data-root-33.js",
  // 複合データ (38ファイル)
  "/js/data-mixed-1.js",
  "/js/data-mixed-2.js",
  "/js/data-mixed-3.js",
  "/js/data-mixed-4.js",
  "/js/data-mixed-5.js",
  "/js/data-mixed-6.js",
  "/js/data-mixed-7.js",
  "/js/data-mixed-8.js",
  "/js/data-mixed-9.js",
  "/js/data-mixed-10.js",
  "/js/data-mixed-11.js",
  "/js/data-mixed-12.js",
  "/js/data-mixed-13.js",
  "/js/data-mixed-14.js",
  "/js/data-mixed-15.js",
  "/js/data-mixed-16.js",
  "/js/data-mixed-17.js",
  "/js/data-mixed-18.js",
  "/js/data-mixed-19.js",
  "/js/data-mixed-20.js",
  "/js/data-mixed-21.js",
  "/js/data-mixed-22.js",
  "/js/data-mixed-23.js",
  "/js/data-mixed-24.js",
  "/js/data-mixed-25.js",
  "/js/data-mixed-26.js",
  "/js/data-mixed-27.js",
  "/js/data-mixed-28.js",
  "/js/data-mixed-29.js",
  "/js/data-mixed-30.js",
  "/js/data-mixed-31.js",
  "/js/data-mixed-32.js",
  "/js/data-mixed-33.js",
  "/js/data-mixed-34.js",
  "/js/data-mixed-35.js",
  "/js/data-mixed-36.js",
  "/js/data-mixed-37.js",
  "/js/data-mixed-38.js",
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
