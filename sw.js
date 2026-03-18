const CACHE_NAME = 'd4driving-v3'; // Increment this whenever you make a big layout change
const OFFLINE_URL = 'index.html';

// Initial assets to cache for the "App" to work
const PRE_CACHE_ASSETS = [
  './',
  './index.html',
  './blog.html',
  './tips.html',
  './400dpiLogoCropped.png',
  './robert2.png',
  './manifest.json'
];

// Install Event: Cache the core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event: Clean up old versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event: The "Soro-Friendly" Strategy
// It looks for the file online first (so users see new blog posts), 
// but saves a copy for offline use immediately.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If it's a valid response, clone it and put it in the cache
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request).then((res) => res))
  );
});
