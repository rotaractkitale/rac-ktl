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

const galleryImages = document.querySelectorAll(".gallery-card img");

if (galleryImages.length) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML = `
        <button class="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <img class="lightbox-image" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeLightbox = () => {
        lightbox.hidden = true;
        document.body.style.overflow = "";
    };

    galleryImages.forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.hidden = false;
            document.body.style.overflow = "hidden";
        });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
}
