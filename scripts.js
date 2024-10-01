let slideIndex = 0;
let autoSlideInterval;

showSlides();

function plusSlides(n) {
  clearInterval(autoSlideInterval); // Stop automatic sliding when user navigates manually
  showSlides(slideIndex += n, true); // Move to next or previous slide
}

function currentSlide(n) {
  clearInterval(autoSlideInterval); // Stop automatic sliding when user navigates manually
  showSlides(slideIndex = n - 1, true);
}

function showSlides(n, manual = false) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Auto-slide functionality
  if (!manual) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => plusSlides(1), 4000); 
  }
}


