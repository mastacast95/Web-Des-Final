// This is some basic javascript that I had Ai create to display a slideshow.

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    // Function to show the current slide and hide others
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    // Function to move to the next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    // Event listeners for navigation buttons
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
  
    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }
  
    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }
  
    // Initial setup: show the first slide
    showSlide(currentSlide);
  });
  