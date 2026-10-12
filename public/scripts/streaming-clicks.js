document.addEventListener("DOMContentLoaded", function trackStreamingLinks() {
  document.querySelectorAll(".stream-link").forEach(function addTracking(link) {
    link.addEventListener("click", function sendStreamingClick(event) {
      if (typeof window.fbq !== "function") {
        return;
      }

      window.fbq("trackCustom", "StreamingClick", {
        platform: link.dataset.platform,
        song: link.dataset.song
      });

      // Give the loaded pixel time to send before a same-tab page unload.
      // Keep normal navigation if tracking is blocked, or for modified clicks.
      if (
        link.dataset.trackNavigation === "same-tab" &&
        typeof window.fbq.callMethod === "function" &&
        !event.defaultPrevented && event.button === 0 &&
        !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey &&
        (!link.target || link.target === "_self")
      ) {
        event.preventDefault();
        window.setTimeout(function navigateToService() {
          window.location.assign(link.href);
        }, 200);
      }
    });
  });
});
