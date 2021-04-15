importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const DAY  = 60 * 60 * 24;
const WEEK = 60 * 60 * 24 * 7;
const YEAR = 60 * 60 * 24 * 365;

// Verbose logging even for the production
workbox.setConfig({
  debug: false
});

// migrate v3 to v4
workbox.precaching.cleanupOutdatedCaches();

// Modify SW update cycle
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.googleAnalytics.initialize();

// contenfull
workbox.routing.registerRoute(
  /^https?:\/\/images\.ctfassets\.net\/.*([a-zA-Z0-9\s_\\.\-\(\):])+(.png|.jpg|.jpeg|.ico|.svg).*$/,
  new workbox.strategies.NetworkFirst({
    cacheName: `cdn-images`,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: DAY
      })
    ]
  })
);


// alfred cache
workbox.routing.registerRoute(
  new RegExp('^https:\/\/io\.cognitivesa\.com.*\.js'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `alfred`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: WEEK * 2
      })
    ]
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
// https://github.com/google/WebFundamentals/pull/6322/files
workbox.routing.registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic).com\/(.*)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: YEAR,
        maxEntries: 30,
      }),
    ],
  })
);

// naranja cdn
workbox.routing.registerRoute(
  /^https:\/\/static.naranja.com\/assets\/fonts\/(.*)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'naranja-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      })
    ],
  })
);

// Caching Images
// https://developers.google.com/web/tools/workbox/guides/common-recipes#caching_images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: DAY,
      }),
    ]
  })
);

// Cache CSS and JavaScript Files
// https://developers.google.com/web/tools/workbox/guides/common-recipes#cache_css_and_javascript_files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([])
