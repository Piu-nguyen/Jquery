const track = document.querySelector('.slide-track');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const visibleSlides = 5;

function updateSlider() {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function autoSlide() {
  currentIndex++;
  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0;
  }
  updateSlider();
}

let slideInterval = setInterval(autoSlide, 3000);

leftArrow.addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - visibleSlides;
  }
  updateSlider();
  slideInterval = setInterval(autoSlide, 3000);
});

rightArrow.addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex++;
  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0;
  }
  updateSlider();
  slideInterval = setInterval(autoSlide, 3000);
});