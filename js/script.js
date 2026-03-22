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

if (fader1 && fader2) {
  const images = [
    "images/image14.webp", "images/image4.webp", "images/image10.webp",
    "images/image12.webp", "images/image13.webp", "images/image15.webp"
  ];

  let current = 0;
  let showingFader1 = true;

  fader1.style.backgroundImage = `url('${images[0]}')`;
  fader1.style.opacity = 1;

  setInterval(() => {
    current = (current + 1) % images.length;

    const nextImage = `url('${images[current]}')`;

    if (showingFader1) {
      fader2.style.backgroundImage = nextImage;
      fader2.style.opacity = 1;
      fader1.style.opacity = 0;
    } else {
      fader1.style.backgroundImage = nextImage;
      fader1.style.opacity = 1;
      fader2.style.opacity = 0;
    }

    showingFader1 = !showingFader1;
  }, 5000);
}
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
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
 
}
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
      });
});
// Popup pentru cardurile din Servicii
const serviciuCards = document.querySelectorAll(".serviciu-card");
const serviciuModal = document.getElementById("serviciu-modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

if (serviciuCards.length && serviciuModal && modalContent && closeModal) {
  serviciuCards.forEach(card => {
    card.addEventListener("click", () => {
      const type = card.getAttribute("data-type");
      const src = card.getAttribute("data-src");

      if (!type || !src) return;

      if (type === "image") {
        modalContent.innerHTML = `<img src="${src}" alt="Imagine serviciu">`;
      }

      if (type === "video") {
        modalContent.innerHTML = `
          <video controls autoplay>
            <source src="${src}" type="video/mp4">
            Browserul tău nu suportă redarea video.
          </video>
        `;
      }

      serviciuModal.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    serviciuModal.classList.remove("active");
    modalContent.innerHTML = "";
  });

  serviciuModal.addEventListener("click", (e) => {
    if (e.target === serviciuModal) {
      serviciuModal.classList.remove("active");
      modalContent.innerHTML = "";
    }
  });

}
