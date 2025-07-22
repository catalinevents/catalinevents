// 🔄 Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Background slideshow  
const fader1 = document.querySelector(".fader1");
const fader2 = document.querySelector(".fader2");

const images = [
  "images/image14.webp", "images/image4.jpg", "images/image10.jpg",
  "images/image12.jpg", "images/image13.jpg", "images/image15.jpg"
];

let current = 0;
let showingFader1 = true;

function changeBackground() {
  current = (current + 1) % images.length;

  if (showingFader1) {
    fader2.style.backgroundImage = `url('${images[current]}')`;
    fader2.style.opacity = 1;
    fader1.style.opacity = 0;
  } else {
    fader1.style.backgroundImage = `url('${images[current]}')`;
    fader1.style.opacity = 1;
    fader2.style.opacity = 0;
  }

  showingFader1 = !showingFader1;
}

// Setează prima imagine
fader1.style.backgroundImage = `url('${images[0]}')`;
fader1.style.opacity = 1;

// Pornește slideshow-ul
setInterval(changeBackground, 5000);
// 🌀 Swiper – Doar dacă există clasa .mySwiper
if (document.querySelector('.mySwiper')) {
  new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
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
      delay: 5000,
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
      delay: 5000,
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
      delay: 5000,
      disableOnInteraction: false
    },
    fadeEffect: { crossFade: true }
  });
}
// Animare fade-in când intră în viewport
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

fadeIns.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});
// 🍔 Hamburger Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}