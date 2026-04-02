const CACHE_NAME = 'dahans-ice-cream-v1';
const URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/hero-cover.png',
  './assets/fit-section.png',
  './assets/lite-section.png',
  './assets/regular-section.png',
  './assets/vanilla.png',
  './assets/strawberry.png',
  './assets/lemon.png',
  './assets/pistachio.png',
  './assets/coffee.png',
  './assets/berries.png',
  './assets/peanut-bamba.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => caches.match('./index.html'))));
});