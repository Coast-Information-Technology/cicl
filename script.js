var acc = document.getElementById("service");

  acc.addEventListener("click", function() {
    var panel = document.querySelector(".mega-menu");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    });