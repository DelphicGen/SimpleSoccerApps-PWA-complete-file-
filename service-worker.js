import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing/registerRoute.mjs';
import {StaleWhileRevalidate} from 'workbox-strategies';

import {Router} from 'workbox-routing';
  
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


  const router = new Router();
  self.addEventListener('fetch', (event) => {
    let baseUrl = 'https://api.football-data.org/v2';

    if (event.request.url.indexOf(baseUrl) > -1) {
      const responsePromise = router.handleRequest(event);
      console.log(responsePromise);
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    }
  });

  // registerRoute(
  //   new RegExp('/api/.*\\'),
  //   handlerCb
  // );

  // registerRoute(
  //   new RegExp('/pages/'),
  //   new StaleWhileRevalidate({
  //     cacheName: 'pages',
  //   })
  // );
  
  // registerRoute(
  //   ({url}) => url.pathname.startsWith('https://api.football-data.org/v2'),
  //   new StaleWhileRevalidate()
  // );
  // self.addEventListener('fetch', (event) => {
  //   const {request} = event;
  //   event.respondWith(new StaleWhileRevalidate().handle({event, request}));
  // });