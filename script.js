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
  const galleryItems = document.querySelectorAll(
    '[unique-script-id="w-w-dm-id"] .btn-box'
  );

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.parentElement.querySelector(".overlay").style.display = "block";
    });
  });

  const closeButtons = document.querySelectorAll(
    '[unique-script-id="w-w-dm-id"] .close'
  );

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".overlay").style.display = "none";
    });
  });
});


