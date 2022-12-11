let slideIndex = 1;
document.addEventListener('DOMContentLoaded', function () {
  //showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(galleryId, n) {
  showSlides(galleryId, slideIndex += n);
}

// Thumbnail image controls
function currentSlide(galleryId, n) {
  showSlides(galleryId, slideIndex = n);
}

function showSlides(galleryId, n) {
  let i;
  let galleryContainer = document.querySelector(galleryId);
  let slidesContainer = document.querySelector(galleryId + " .slideshow-images");
  let slides = slidesContainer.getElementsByClassName("mySlides");
  if(!slides || slides.length == 0) {
    return;
  }
  let dots = galleryContainer.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}