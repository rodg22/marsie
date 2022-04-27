// --------------------- MENU HAMBURGUESA ----------------------
const $hamburger = document.getElementById("hamburger");
const $main = document.querySelector("main");
const $hamburgerClass = document.querySelector(".hamburger");
const $menuClass = document.querySelector(".menu");
const $linkMenu = document.querySelectorAll(".menu ul li a");
const $circleMenu = document.getElementById("menu-bg");
const $blurMenu = document.getElementById("menu-blur");

$hamburger.addEventListener("click", () => {
  $hamburgerClass.classList.toggle("open");
  $menuClass.classList.toggle("change");
  $circleMenu.classList.toggle("change-bg");
  $blurMenu.classList.toggle("change-to-blured");
});

$linkMenu.forEach((e) =>
  e.addEventListener("click", () => {
    $hamburgerClass.classList.toggle("open");
    $menuClass.classList.toggle("change");
    $circleMenu.classList.toggle("change-bg");
    $blurMenu.classList.toggle("change-to-blured");
  })
);

// --------------------- SWIPER FOUNDERS ----------------------

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".valuesSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
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
