// Mobile nav toggle & small UX polish
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Active link underline based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

function setActiveLink() {
  let current = '';
  const scrollY = window.pageYOffset + 140; // header offset

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) current = '#' + sec.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();
// Fade Gallery
const slides = document.querySelectorAll(".fade-slide");
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto fade every 5s
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// Modal Zoom
const modal = document.getElementById("zoomModal");
const modalImg = document.getElementById("zoomedImage");
const closeBtn = document.querySelector(".close");

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = slide.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
