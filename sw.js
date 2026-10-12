const CACHE='schulden-manager-v4-20261013-release',FILES=['./','index.html','translations.js','core.js','app.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('sm-v')||k.startsWith('schulden-manager-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  // Cache HTML and its scripts as one complete version, including offline.
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(event.request);
    return cached||fetch(event.request);
  }));
});

