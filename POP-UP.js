const asidenavTag = document.querySelectorAll("header ul>li");

// aside navbar 나타나게 하기
 for(i=0; i<asidenavTag.length; i++) {
  asidenavTag[i].addEventListener("mouseover", function(){
    this.classList.add("open");
 });
}

for(i=0; i<asidenavTag.length; i++) {
  asidenavTag[i].addEventListener("mouseout", function(){
    this.classList.remove("open");
 });
}

// 슬라이드 만들기

var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[n].style.display = "block";
}