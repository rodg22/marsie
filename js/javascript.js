const d = document;
const $body = d.querySelector("body");
const $hamburger = d.getElementById("hamburger");
const $main = d.querySelector("main");
const $hamburgerClass = d.querySelector(".hamburger");
const $menuClass = d.querySelector(".menu");
const $linkMenu = d.querySelectorAll(".menu ul li a");
const $circleMenu = d.getElementById("menu-bg");
const $blurMenu = d.getElementById("menu-blur");
const $blurModal = d.getElementById("modal-backdrop");
const $visible1 = d.querySelectorAll(".visible-1");
const $visibleLast = d.querySelectorAll(".visible-last");
const $visible2 = d.querySelectorAll(".visible-2");
const $visible3 = d.querySelectorAll(".visible-3");
const $visible4 = d.querySelectorAll(".visible-4");
const $visible5 = d.querySelectorAll(".visible-5");
const $visible6 = d.querySelectorAll(".visible-6");
const $teamMembers = d.querySelectorAll(".team-member");
const $modalMember = d.querySelectorAll(".team-modal-child");
const $modalArrows = d.querySelectorAll(".arrow-out-modal");
const $members = d.querySelectorAll(".member");
const $member1Circle = d.querySelector(".member1-circle");
const $member2Circle = d.querySelector(".member2-circle");
const $member3Circle = d.querySelector(".member3-circle");
const $changeMember = d.querySelectorAll(".go-to-bios");
const $mobileTexts = d.querySelectorAll(".mobile-values-text");
const $desktopTexts = d.querySelectorAll(".desktop-values-text");
const $scrollTop = d.querySelector(".scrollTop");

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

//--------------------------------------------------------------HAMBURGER-----------------------------------------------------------------

d.addEventListener("DOMContentLoaded", () => {
  $hamburger.addEventListener("click", () => {
    $hamburgerClass.classList.toggle("open");
    $menuClass.classList.toggle("change");
    $circleMenu.classList.toggle("change-bg");
    $blurMenu.classList.toggle("change-to-blured");
  });

  $blurMenu.addEventListener("click", () => {
    $hamburgerClass.classList.toggle("open");
    $menuClass.classList.toggle("change");
    $circleMenu.classList.toggle("change-bg");
    $blurMenu.classList.toggle("change-to-blured");
  });

  $linkMenu.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $hamburgerClass.classList.toggle("open");
      $menuClass.classList.toggle("change");
      $circleMenu.classList.toggle("change-bg");
      $blurMenu.classList.toggle("change-to-blured");
      const $linkTo = document.getElementById(link.getAttribute("data-link"));
      if (link.getAttribute("href") === "#contact") {
        $linkTo.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        $linkTo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  //--------------------------------------------------------------ABOUT US-----------------------------------------------------------------

  d.addEventListener("scroll", () => {
    if (scrollY > 300) {
      $visible1.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
    if (scrollY > 500) {
      $visible2.forEach((element) => {
        element.classList.add("now-visible");
      });
      $visibleLast.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
    if (scrollY > 600) {
      $visible3.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
    if (scrollY > 650) {
      $visible4.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
    if (scrollY > 700) {
      $visibleLast.forEach((element) => {
        element.classList.add("circling-div-p-border");
      });
    }
    if (scrollY > 800) {
      $visible5.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
    if (scrollY > 850) {
      $visible6.forEach((element) => {
        element.classList.add("now-visible");
      });
    }
  });

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
          $blurModal.classList.add("change-to-blured-modal");
          $body.classList.add("stop-scrolling");
          // disable_scroll();
        }
      });
    })
  );

  $changeMember.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $modalMember.forEach((member) => {
        member.classList.remove("visible-member");
        $body.classList.remove("stop-scrolling");
        // enable_scroll();
        const miembroSlider = link.querySelector("span").innerText;
        const miembroModal = member.querySelector("h4").innerText;
        if (miembroModal === miembroSlider) {
          member.classList.add("visible-member");
          $body.classList.add("stop-scrolling");
          // disable_scroll();
        }
      });
    })
  );

  $modalArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      $modalMember.forEach((member) => {
        member.classList.remove("visible-member");
        $blurModal.classList.remove("change-to-blured-modal");
        $body.classList.remove("stop-scrolling");
        // enable_scroll();
      });
    });
  });

  $blurModal.addEventListener("click", () => {
    $modalMember.forEach((member) => {
      member.classList.remove("visible-member");
      $blurModal.classList.remove("change-to-blured-modal");
      $body.classList.remove("stop-scrolling");
      // enable_scroll();
    });
  });

  // ----------------------- TOP BUTTON -------------------------

  $scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    scroll(0, 0);
  });
  d.addEventListener("scroll", () => {
    if (scrollY > 1000) {
      $scrollTop.classList.add("aparece-scroll-top");
    } else {
      $scrollTop.classList.remove("aparece-scroll-top");
    }
  });
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

const responsiveValueText = (mediaquery) => {
  if (mediaquery.matches) {
    $mobileTexts.forEach((text) => {
      text.style.setProperty("display", "none");
    });
    $desktopTexts.forEach((text) => {
      text.style.removeProperty("display", "none");
    });
  } else {
    $mobileTexts.forEach((text) => {
      text.style.removeProperty("display", "none");
    });
    $desktopTexts.forEach((text) => {
      text.style.setProperty("display", "none");
    });
  }
};

responsiveValueText(mediaQuery);
