// Smooth scroll to section when clicking on a nav link
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute('href');
      document.querySelector(targetSectionId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
  });

// carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let slideIndex = 0;

  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;

  function showSlide(index) {
    if (index < 0) {
      slideIndex = totalItems - 1;
    } else if (index >= totalItems) {
      slideIndex = 0;
    }

    carouselItems.forEach(item => {
      item.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);

  showSlide(slideIndex);
});
