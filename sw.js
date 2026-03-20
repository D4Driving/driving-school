const CACHE_NAME = 'd4driving-v3'; // Keep your versioning
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

// NEW SPEED-FIRST FETCH STRATEGY: Stale-While-Revalidate
// 1. Show the cached version IMMEDIATELY (Instant Load)
// 2. Fetch the new version in the background (Soro Sync)
// 3. Update the cache for the next time they visit
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        
        // Always try to fetch from the network in the background
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // If we got a real response, save it to the cache for next time
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // If network fails (completely offline), we just rely on the cache
        });

        // Return the cached version if we have it, otherwise wait for the network
        return cachedResponse || fetchPromise;
      });
    })
  );
});
