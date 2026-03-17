const CACHE_NAME = 'd4driving-v1';
const assets = [
  './',
  './index.html',
  './tips.html',
  './400dpiLogoCropped.png',
  './pass1.jpg',
  './pass8.jpg',
  './pass10.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
