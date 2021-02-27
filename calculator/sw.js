
var CACHE_VERSION = 'app-v1';
var CACHE_FILES = [
    '/',
    'app.html',
    'content/style.css',
    'content/main.js',
    'images/logo.png',
    'images/ellipsis-v-solid.svg',
    'images/github-brands.svg',
    'images/times-circle-regular.svg',
    'manifest.json',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    );
});

self.addEventListener('fetch', function (event) {
    let online = navigator.onLine
    if(!online){
        event.respondWith(
            caches.match(event.request).then(function(res){
                if(res){
                    return res;
                }
                requestBackend(event);
            })
        )
    }
});

