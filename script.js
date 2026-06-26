const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}

const nextButton = document.querySelector("[data-next]");
const prevButton = document.querySelector("[data-prev]");

if (nextButton) {
    nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
}

if (prevButton) {
    prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

if (slides.length) {
    setInterval(() => showSlide(currentSlide + 1), 5000);
}
