document.addEventListener("DOMContentLoaded", function trackStreamingLinks() {
  document.querySelectorAll(".stream-link").forEach(function addTracking(link) {
    link.addEventListener("click", function sendStreamingClick() {
      if (typeof window.fbq !== "function") {
        return;
      }

      window.fbq("trackCustom", "StreamingClick", {
        platform: link.dataset.platform,
        song: link.dataset.song
      });
    });
  });
});
