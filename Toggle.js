document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector("nav ul");
  const navLinks = navToggle.querySelectorAll("li a");
  const nashContainer = document.querySelector(".nash");
  const persContainer = document.querySelector(".perscontainer");
  const persButton = persContainer.querySelector("button");

  navToggle.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  });

  persButton.addEventListener("click", function() {
    nashContainer.style.display = "none";
    persContainer.style.display = "block";
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      navToggle.classList.add("sticky");
    } else {
      navToggle.classList.remove("sticky");
    }
  });
});