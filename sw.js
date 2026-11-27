// BZK Harita – çevrimdışı çalışma: uygulama dosyaları önbellekte, harita karoları ağdan (varsa önbellekten)
var C = 'bzk-harita-4.18.17', T = 'bzk-karolar';
var APP = ["app.js", "apple-touch-icon.png", "geo.js", "icon-192.png", "icon-512-maskable.png", "icon-512.png", "index.html", "lib/dxf-parser.js", "lib/kaushan.woff2", "lib/leaflet-rotate.js", "lib/leaflet.css", "lib/leaflet.js", "lib/pako_inflate.min.js", "lib/proj4.js", "lib/rbush.min.js", "license.js", "logo.png", "manifest.webmanifest", "parsers.js", "style.css"];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(C).then(function (c) { return c.addAll(APP.map(function (f) { return './' + f; }).concat(['./'])); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== C && k !== T; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  var r = e.request; if (r.method !== 'GET') return;
  var u = new URL(r.url);
  if (u.origin === location.origin) { e.respondWith(caches.match(r, { ignoreSearch: true }).then(function (m) { return m || fetch(r); })); return; }
  if (/\/(vt|kh)\?|tile|arcgisonline|openstreetmap|opentopomap/.test(r.url)) {   // altlık karoları: ağ önce, yoksa önbellek
    e.respondWith(fetch(r).then(function (res) { if (res && (res.ok || res.type === 'opaque')) { var cp = res.clone(); caches.open(T).then(function (c) { c.put(r, cp); }); } return res; })
      .catch(function () { return caches.match(r); }));
  }
});
