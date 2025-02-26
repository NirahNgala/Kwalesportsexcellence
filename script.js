const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

//gallery

$(document).ready(function() {

  $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
    $(this).parent().children(".overlay").show();

  });


  $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
    $(".overlay").hide();
  });
});
