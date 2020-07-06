// const CACHE_NAME = "pwa-v11";
// var urlsToCache = [
//   "/",
//   'https://code.jquery.com/jquery-3.5.1.min.js',
//   'https://fonts.googleapis.com/icon?family=Material+Icons',
//   'https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
//   "https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Sacramento&display=swap",
//   "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
//   "/index.html",
//   "/league.html",
//   "/pages/home.html",
//   "/pages/saved.html",
//   "/pages/landing.html",
//   "/css/materialize.min.css",
//   "/css/materialize.css",
//   "/css/style.css",
//   "/css/aos.css",
//   "/push.js",
//   "/app.js",
//   "/webpack.common.js",
//   "/webpack.dev.js",
//   "/webpack.prod.js",
//   "/js/materialize.min.js",
//   "/js/materialize.js",
//   "/js/nav.js",
//   "/js/api.js",
//   "/js/aos.js",
//   "/js/idb.js",
//   "/js/db.js",
//   "/images/icons/icon-72x72.png",
//   "/images/icons/icon-96x96.png",
//   "/images/icons/icon-128x128.png",
//   "/images/icons/icon-144x144.png",
//   "/images/icons/icon-152x152.png",
//   "/images/icons/icon-192x192.png",
//   "/images/icons/icon-384x384.png",
//   "/images/icons/icon-512x512.png",
//   "/images/arrow.png",
//   "/images/landing-page-1.png",
//   "/manifest.json",
//   "/bundle.js",
//   "/dist/index.html",
//   "/dist/league.html",
//   "/dist/pages/home.html",
//   "/dist/pages/saved.html",
//   "/dist/7f33d0c3c951e3c08a6c5d9864c58e7f.png",
//   "/dist/48b42753cbac11bc42809545fe9b3936.png"
// ];

// self.addEventListener("install", event => {
//     event.waitUntil(
//       caches.open(CACHE_NAME).then(cache => {
//         return cache.addAll(urlsToCache);
//       })
//     );
// });
  
// self.addEventListener("fetch", event => {
//     let baseUrl = 'https://api.football-data.org/v2';

//     if (event.request.url.indexOf(baseUrl) > -1) {
//         event.respondWith(
//             caches.open(CACHE_NAME)
//                 .then(cache => {
//                     return fetch(event.request)
//                         .then(response => {
//                             cache.put(event.request.url, response.clone());
//                             return response;
//                         })
//             })
//         );
//     } else {
//         event.respondWith (
//           caches.match(event.request, { ignoreSearch: true }).then(function(response) {
//               return response || fetch (event.request);
//           })
//         )
//     }
// });
  
// self.addEventListener("activate", event => {
//     event.waitUntil(
//         caches.keys().then(cacheNames => {
//         return Promise.all(
//             cacheNames.map(cacheName => {
//             if (cacheName != CACHE_NAME) {
//                 console.log("ServiceWorker: cache " + cacheName + " dihapus");
//                 return caches.delete(cacheName);
//             }
//             })
//         );
//         })
//     );
//     event.waitUntil(self.clients.claim());
// });

// self.addEventListener('push', event => {
//     var body;
//     if (event.data) {
//       body = event.data.text();
//     } else {
//       body = 'Push message no payload';
//     }
//     var options = {
//       body: body,
//       icon: 'images/icons/icon-72x72.png',
//       vibrate: [100, 50, 100],
//       data: {
//         dateOfArrival: Date.now(),
//         primaryKey: 1
//       }
//     };
//     event.waitUntil(
//       self.registration.showNotification('Push Notification', options)
//     );
// });

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing/registerRoute.mjs';
import {StaleWhileRevalidate} from 'workbox-strategies';
  
    precacheAndRoute([
    { url: 'https://code.jquery.com/jquery-3.5.1.min.js', revision: '1'},
    { url: 'https://fonts.googleapis.com/icon?family=Material+Icons', revision: '1'},
    { url: 'https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2', revision: '1'},
    { url: 'https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Sacramento&display=swap', revision: '1'},
    { url: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', revision: '1'},
    { url: '/index.html', revision: '1' },
    { url: '/league.html', revision: '1' },
    { url: '/pages/home.html', revision: '1' },
    { url: '/pages/saved.html', revision: '1' },
    { url: '/pages/landing.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/css/materialize.css', revision: '1' },
    { url: '/css/style.css', revision: '1' },
    { url: '/css/aos.css', revision: '1' },
    { url: '/push.js', revision: '1' },
    { url: '/app.js', revision: '1' },
    { url: '/webpack.common.js', revision: '1' },
    { url: '/webpack.dev.js', revision: '1' },
    { url: '/webpack.prod.js', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/materialize.js', revision: '1' },
    { url: '/js/nav.js', revision: '1' },
    { url: '/js/api.js', revision: '1' },
    { url: '/js/aos.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
    { url: '/js/db.js', revision: '1' },
    { url: '/images/icons/icon-72x72.png', revision: '1' },
    { url: '/images/icons/icon-96x96.png', revision: '1' },
    { url: '/images/icons/icon-128x128.png', revision: '1' },
    { url: '/images/icons/icon-144x144.png', revision: '1' },
    { url: '/images/icons/icon-152x152.png', revision: '1' },
    { url: '/images/icons/icon-192x192.png', revision: '1' },
    { url: '/images/icons/icon-384x384.png', revision: '1' },
    { url: '/images/icons/icon-512x512.png', revision: '1' },
    { url: '/images/arrow.png', revision: '1' },
    { url: '/images/landing-page-1.png', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/dist/bundle.js', revision: '1' },
    { url: '/dist/index.html', revision: '1' },
    { url: '/dist/league.html', revision: '1' },
    { url: '/dist/pages/home.html', revision: '1' },
    { url: '/dist/pages/saved.html', revision: '1' },
    { url: '/dist/7f33d0c3c951e3c08a6c5d9864c58e7f.png', revision: '1' },
    { url: '/dist/48b42753cbac11bc42809545fe9b3936.png', revision: '1' },
  ]);

  registerRoute(
    new RegExp('/pages/'),
    new StaleWhileRevalidate({
      cacheName: 'pages',
    })
  );
  // registerRoute(
  //   // ({request}) => request.destination === 'pages',
  //   new RegExp('https://api.football-data.org/v2'),
  //   new StaleWhileRevalidate({
  //     cacheName: 'api',
  //   })
  // );