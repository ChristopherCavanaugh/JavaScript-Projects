function countdown() { //Countdown Function
    var seconds = document.getElementById("seconds").value;

    function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000);
if(seconds ==-1){
    alert("Time is up!");
}
}
tick();
}

var slideIndex = 1; //creating variable slide index
showSlides(slideIndex);

function plusSlides(n) { // move slide controls
  showSlides(slideIndex += n);
}


function currentSlide(n) { //slide index dots
  showSlides(slideIndex = n);
}

function showSlides(n) { // Creating slideshow to show the slides using element id
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
