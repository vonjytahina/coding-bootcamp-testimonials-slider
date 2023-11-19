document.addEventListener("DOMContentLoaded", function () {
  // Initial state: show slide-1, hide slide-2
  let currentSlide = 1;

  const slide1 = document.querySelector(".slide-1");
  const slide2 = document.querySelector(".slide-2");
  const nextButton = document.querySelector(".next-button");
  const previousButton = document.querySelector(".previous-button");

  nextButton.addEventListener("click", function () {
    if (currentSlide === 1) {
      // Slide from left to right
      slide1.style.display = "none";
      slide2.style.display = "block";
      currentSlide = 2;
    }
  });

  previousButton.addEventListener("click", function () {
    if (currentSlide === 2) {
      // Slide from right to left
      slide1.style.display = "block";
      slide2.style.display = "none";
      currentSlide = 1;
    }
  });
});
