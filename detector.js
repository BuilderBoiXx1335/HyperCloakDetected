(function () {
  let relayDetected = false;
  const suspiciousElements = [];

  // DOM scan
  const scanDOM = () => {
    const elements = document.querySelectorAll("iframe, script, div");
    elements.forEach(el => {
      const content = el.innerHTML || el.src || "";
      if (content.includes("relay") || content.includes("lightspeedsystems")) {
        suspiciousElements.push(content);
        relayDetected = true;
      }
    });
  };

  // Fetch interception
  const originalFetch = window.fetch;
  window.fetch = function (...args) {
    if (args[0].includes("lightspeedsystems") || args[0].includes("relay.school")) {
      relayDetected = true;
      suspiciousElements.push(args[0]);
    }
    return originalFetch.apply(this, args);
  };

  // Visibility change
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      suspiciousElements.push("Tab hidden");
    }
  });

  // Run scan
  setInterval(() => {
    scanDOM();
    if (relayDetected) {
      localStorage.setItem("relayDetected", "true");
      localStorage.setItem("relayFootprints", JSON.stringify(suspiciousElements));
    }
  }, 3000);
})();

