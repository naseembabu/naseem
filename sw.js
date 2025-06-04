// Simple service worker for caching
const CACHE_NAME = 'asres-temam-site-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/courses.html',
  '/css/style.css',
  '/css/responsive.css',
  '/css/courses.css',
  '/css/dark-mode.css',
  '/js/main.js',
  '/js/dark-mode.js',
  '/images/profile.png'
  // Add more resources to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});