(function () {
  if (localStorage.getItem("relayDetected") === "true") {
    document.title = "Math Homework - Google Docs";
    document.body.innerHTML = "<h1>Loading Google Docs...</h1>";
  }
})();

