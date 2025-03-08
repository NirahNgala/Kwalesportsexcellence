// Hamburger Menu
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", () => toggleNav());

// Gallery (Plain JavaScript)
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector('[unique-script-id="w-w-dm-id"]');

  galleryContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn")) {
          event.target.parentElement.parentElement.querySelector(".overlay").style.display = "block";
      } else if (event.target.classList.contains("close") || event.target.classList.contains("overlay")) {
          event.target.closest(".overlay").style.display = "none";
      }
  });

  const overlays = galleryContainer.querySelectorAll('.overlay');
  overlays.forEach(overlay => {
      overlay.addEventListener('click', function(event) {
          if (event.target === overlay) {
              overlay.style.display = 'none';
          }
      });
  });
});

