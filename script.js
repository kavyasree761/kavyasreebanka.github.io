document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  });

  elements.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

  // Toggle Menu
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
  });

  // Sticky Navbar on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});
