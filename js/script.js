// 🔄 Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Background slideshow  
    const header = document.querySelector("header");
    if (header) {
      const images = [
      "images/image14.webp","images/image4.jpg", "images/image10.jpg",
      "images/image12.jpg", "images/image13.jpg", "images/image15.jpg"
    ];
    let current = 0;

    function changeBackground() {
      current = (current + 1) % images.length;
      header.style.backgroundImage = "url('" + images[current] + "')";
    }
    header.style.backgroundImage = "url('" + images[0] + "')";
    setInterval(changeBackground, 2000); }  

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