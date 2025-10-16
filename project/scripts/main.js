const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('testimonial-next').addEventListener('click', () => {
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
});

document.getElementById('testimonial-prev').addEventListener('click', () => {
  testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
});

// Optional auto-slide
setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
}, 7000);

showTestimonial(testimonialIndex);