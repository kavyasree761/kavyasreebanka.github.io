// Hamburger toggle for mobile nav
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Contact form submission
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    messageBox.classList.remove("hidden");
    form.reset();
  });
});

// Toggle details in project section
function toggleDetails(button) {
  const details = button.nextElementSibling;
  details.classList.toggle("hidden");
}
