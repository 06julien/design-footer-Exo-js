const slides = document.querySelectorAll(".slides");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

// Initial call to display the first slide
showSlide(currentSlide);
