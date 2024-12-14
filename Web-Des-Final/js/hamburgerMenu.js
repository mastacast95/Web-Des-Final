// JavaScript for toggling the hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the active class to show/hide menu
});