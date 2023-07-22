// service-worker.js

// Cache all static assets
const staticCacheName = 'static-cache-v1';
const assetsToCache = [
    '/',
    '/css/style.css',
    '/js/main.js',
    // Add more static assets to cache as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});