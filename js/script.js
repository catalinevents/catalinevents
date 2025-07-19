// 🔄 Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// 🖼 Background Slideshow – Doar pe index
if (document.querySelector("header")) {
  const header = document.querySelector("header");
  const images = [
    "images/image4.jpg",
    "images/image6.jpg",
    "images/image10.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg"
  ];
  let current = 0;

  function changeBackground() {
    current = (current + 1) % images.length;
    header.style.backgroundImage = "url('" + images[current] + "')";
  }

  header.style.backgroundImage = "url('" + images[0] + "')";
  setInterval(changeBackground, 5000);
}

// 🌀 Swiper – Doar dacă există clasa .mySwiper
if (document.querySelector('.mySwiper')) {
  new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    fadeEffect: {
      crossFade: true
    }
  });
}
if (document.querySelector('.nuntaSwiper')) {
  new Swiper(".nuntaSwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    fadeEffect: { crossFade: true }
  });
}

if (document.querySelector('.botezSwiper')) {
  new Swiper(".botezSwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    fadeEffect: { crossFade: true }
  });
}

if (document.querySelector('.specialSwiper')) {
  new Swiper(".specialSwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    fadeEffect: { crossFade: true }
  });
}

// 🍔 Hamburger Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}