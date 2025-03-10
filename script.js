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

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more-link');
    const readLessLinks = document.querySelectorAll('.read-less-link');
  
    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.dataset.target;
        const targetElement = document.getElementById(targetId);
        targetElement.style.display = 'block';
        this.style.display = 'none'; // Hide "Read More"
        this.parentElement.querySelector('.short-bio').style.display = 'none'; //hide the short bio
      });
    });
  
    readLessLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.dataset.target;
        const targetElement = document.getElementById(targetId);
        targetElement.style.display = 'none';
        this.parentElement.parentElement.querySelector('.read-more-link').style.display = 'inline'; //show read more
        this.parentElement.parentElement.querySelector('.short-bio').style.display = 'block'; //show the short bio
      });
    });
  });

  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  
  function showTestimonial(index) {
      testimonials.forEach((t, i) => {
          t.classList.remove("active");
          dots[i].classList.remove("active");
      });
      testimonials[index].classList.add("active");
      dots[index].classList.add("active");
      currentTestimonial = index;
  }
  
  setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
  }, 5000);
  