self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("dreamcore").then((cache) => {
      return cache.addAll(["./", "./index.html"]);
    })
  );
});
