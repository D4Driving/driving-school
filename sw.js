const CACHE_NAME = 'd4driving-v3'; // Changed to v3
const assets = [
  './',
  './index.html',
  './tips.html',
  './400dpiLogoCropped.png',
  './robert2.png', // Added the new image here
  './pass1.jpg',
  './pass8.jpg',
  './pass10.jpg'
];
// ... rest of the code stays the same

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
