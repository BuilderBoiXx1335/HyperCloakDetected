(function () {
  if (localStorage.getItem("relayDetected") === "true") {
    const log = {
      detected: true,
      timestamp: new Date().toISOString(),
      footprints: JSON.parse(localStorage.getItem("relayFootprints") || "[]")
    };

    const blob = new Blob([JSON.stringify(log, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "detection-log.json";
    document.body.appendChild(link);
    link.click();
  }
})();

