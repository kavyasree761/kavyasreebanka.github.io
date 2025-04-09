document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your message!");
      form.reset();
    });
  }
});
