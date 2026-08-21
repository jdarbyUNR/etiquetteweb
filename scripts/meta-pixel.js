(function initializeMetaPixel(windowObject, documentObject) {
  if (windowObject.__etiquetteMetaPixelInitialized) {
    return;
  }

  windowObject.__etiquetteMetaPixelInitialized = true;

  !function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(windowObject, documentObject, "script", "https://connect.facebook.net/en_US/fbevents.js");

  windowObject.fbq("init", "1581956890316283");
  windowObject.fbq("track", "PageView");
}(window, document));
