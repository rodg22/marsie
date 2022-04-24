// --------------------- MENU HAMBURGUESA ----------------------
const $hamburger = document.getElementById("hamburger");
const $hamburgerClass = document.querySelector(".hamburger");
const $menuClass = document.querySelector(".menu");

$hamburger.addEventListener("click", () => {
  $hamburgerClass.classList.toggle("open");
  //     $menuClass.fadeToggle(300); FALTA HACER EL MENU MOBILE Y DESPLEGARLO, ACOMODAR ESTE CODIGO QUE NO ES ASI
});

// --------------------- SWIPER FOUNDERS ----------------------

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
