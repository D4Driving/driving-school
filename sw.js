const CACHE_NAME = 'd4driving-v5'; // Bumped version
const PRE_CACHE_ASSETS = [
  './',
  './index.html',
  '/success.html',
  './400dpiLogoCropped.png',
  './FaviconLogo.jpg',
  './manifest.json'
];

// Install Event: Cache what we can, but don't die if a file is missing
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use 'allSettled' logic manually or just log errors so it doesn't hang
      return Promise.all(
        PRE_CACHE_ASSETS.map(url => {
          return cache.add(url).catch(err => console.warn(`Could not cache: ${url}`, err));
        })
      );
    })
  );
  self.skipWaiting();
});

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

self.addEventListener('fetch', (event) => {
  // 1. SKIP non-GET requests
  if (event.request.method !== 'GET') return;

  // 2. SKIP Chrome Extensions and other non-web schemes (The Fix)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Only cache successful, valid web responses
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, cacheCopy);
          });
        }
        return networkResponse;
      }).catch(() => {
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
