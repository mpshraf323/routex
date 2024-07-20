function toggleMenu() {
    var x = document.getElementById("navbar");
    var menuIcon = document.getElementById("menuIcon");
    var closeIcon = document.getElementById("closeIcon");
  
    if (x.className === "navbar") {
      x.className += " responsive";
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      x.className = "navbar";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }
  
  document.getElementById("menuIcon").addEventListener("click", function() {
    toggleMenu();
  });
  
  document.getElementById("closeIcon").addEventListener("click", function() {
    toggleMenu();
  });