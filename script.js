document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".sidebar .nav-link").forEach(link => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".sidebar .nav-link").forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  new Swiper(".amenities-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

  AOS.init({
    duration: 2000, 
    once: true, 
  });