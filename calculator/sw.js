var CACHE_VERSION = 'app-v1';
var CACHE_FILES = [
    '/',
    'index.html',
    'content/style.css',
    'content/main.js',
    'images/logo.png',
    'images/ellipsis-v-solid.svg',
    'images/github-brands.svg',
    'images/times-circle-regular.svg',
    'logo/icon48.png',
    'logo/icon96.png',
    'logo/icon144.png',
    'logo/icon196.png',
    'logo/icon512.png',
    'manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(CACHE_FILES);
    })
  );
});
self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
