const d = document;
const $body = d.querySelector("body");
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
const $members = d.querySelectorAll(".member");
const $member1Circle = d.querySelector(".member1-circle");
const $member2Circle = d.querySelector(".member2-circle");
const $member3Circle = d.querySelector(".member3-circle");

function disable_scroll() {
  d.ontouchmove = function (e) {
    e.preventDefault();
  };
}

function enable_scroll() {
  d.ontouchmove = function (e) {
    return true;
  };
}

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

  //--------------------------------------------------------------THE TEAM-----------------------------------------------------------------
  $members.forEach((member) => {
    member.addEventListener("mouseenter", () => {
      function contieneClase(nombreClase) {
        if (member.classList.contains(nombreClase)) {
          return true;
        }
      }
      if (contieneClase("member1")) {
        $member1Circle.style.setProperty("background-color", "#fab91c");
      } else if (contieneClase("member2")) {
        $member2Circle.style.setProperty("background-color", "#85bb25");
      } else if (contieneClase("member3")) {
        $member3Circle.style.setProperty("background-color", "#0082ca");
      }
    });
    member.addEventListener("mouseleave", () => {
      function contieneClase(nombreClase) {
        if (member.classList.contains(nombreClase)) {
          return true;
        }
      }
      if (contieneClase("member1")) {
        $member1Circle.style.setProperty("background-color", "");
      } else if (contieneClase("member2")) {
        $member2Circle.style.setProperty("background-color", "");
      } else if (contieneClase("member3")) {
        $member3Circle.style.setProperty("background-color", "");
      }
    });
  });

  $teamMembers.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $modalMember.forEach((member) => {
        const miembroSlider = link.querySelector("span").innerText;
        const miembroModal = member.querySelector("h4").innerText;
        if (miembroModal === miembroSlider) {
          member.classList.add("visible-member");
          $blurMenu.classList.add("change-to-blured");
          $body.classList.add("stop-scrolling");
          disable_scroll();
        }
      });
    })
  );

  $modalArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      $modalMember.forEach((member) => {
        member.classList.remove("visible-member");
        $blurMenu.classList.remove("change-to-blured");
        $body.classList.remove("stop-scrolling");
        enable_scroll();
      });
    });
  });
});

// -------------------------------------------------------------- SWIPER FOUNDERS --------------------------------------------------------------

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

// ------------------- SWIPER FOUNDERS TEXT --------------------

var swiper = new Swiper(".textSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ---------------------- SWIPER VALUES -----------------------

setTimeout(() => {
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
}, 0);

// ---------------------------------------------------------------- OUR VALUES ----------------------------------------------------------------

let minWidth = 915;
let mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

const $idCaja = d.getElementById("red-swiper");

const responsiveContent = (mediaquery) => {
  if (mediaquery.matches) {
    $idCaja.classList.remove("swiper");
    $idCaja.classList.remove("valuesSwiper");
  } else {
    $idCaja.classList.add("swiper");
    $idCaja.classList.add("valuesSwiper");
  }
};
mediaQuery.addListener(responsiveContent);
responsiveContent(mediaQuery);
