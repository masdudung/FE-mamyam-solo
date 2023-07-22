// service-worker.js

// Cache all static assets
const staticCacheName = 'static-cache-v1';
const assetsToCache = [
    '/assets/css/*',
    '/assets/fonts/*',
    '/assets/img/*',
    '/assets/js/*',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(assetsToCache)
                .catch(error => {
                    console.error('Failed to cache assets:', error);
                });
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        })
    );
});