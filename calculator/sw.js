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

self.addEventListener('fetch', function(event) {
  let online = navigator.onLine
  if (!online) {
    event.respondWith(
      caches.match(event.request).then(function(res) {
        if (res) {
          return res;
        }
        requestBackend(event);
      })
    )
  }
});

function requestBackend(event) {
  var url = event.request.clone();
  return fetch(url).then(function(res) {
    //if not a valid response send the error
    if (!res || res.status !== 200 || res.type !== 'basic') {
      return res;
    }

    var response = res.clone();

    caches.open(CACHE_VERSION).then(function(cache) {
      cache.put(event.request, response);
    });

    return res;
  })
}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key, i) {
        if (key !== CACHE_VERSION) {
          return caches.delete(keys[i]);
        }
      }))
    })
  )
});
