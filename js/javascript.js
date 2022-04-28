const d = document;
const $hamburger = d.getElementById("hamburger");
const $main = d.querySelector("main");
const $hamburgerClass = d.querySelector(".hamburger");
const $menuClass = d.querySelector(".menu");
const $linkMenu = d.querySelectorAll(".menu ul li a");
const $circleMenu = d.getElementById("menu-bg");
const $blurMenu = d.getElementById("menu-blur");
const $teamMembers = d.querySelectorAll(".team-member");
const $modalMember = d.querySelectorAll(".team-modal-child");
const $modalArrows = d.querySelectorAll(".arrow-out-modal");

d.addEventListener("DOMContentLoaded", () => {
  $hamburger.addEventListener("click", () => {
    $hamburgerClass.classList.toggle("open");
    $menuClass.classList.toggle("change");
    $circleMenu.classList.toggle("change-bg");
    $blurMenu.classList.toggle("change-to-blured");
  });

  $linkMenu.forEach((link) =>
    link.addEventListener("click", () => {
      $hamburgerClass.classList.toggle("open");
      $menuClass.classList.toggle("change");
      $circleMenu.classList.toggle("change-bg");
      $blurMenu.classList.toggle("change-to-blured");
    })
  );

  $teamMembers.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $modalMember.forEach((member) => {
        const miembroSlider = link.querySelector("span").innerText;
        const miembroModal = member.querySelector("h4").innerText;
        if (miembroModal === miembroSlider) {
          // alert(`El miembro seleccionado es ${miembroModal}`);
          member.classList.add("visible-member");
        }
      });
    })
  );

  $modalArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      $modalMember.forEach((member) => {
        member.classList.remove("visible-member");
      });
    });
  });
});

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

// ---------------------- SWIPER VALUES -----------------------

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
