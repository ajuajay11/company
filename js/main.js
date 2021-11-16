var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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

// when scroll nav color change

var nav = document.getElementById('navi');
window.onscroll = function (){ 
    if (window.pageYOffset >500 ) {
     
       nav.style.background = "#fff";
       nav.style.boxShadow = "0px 0px 8px #83c4fe";
       
    } 
    else {
       
       nav.style.background = "transparent";
       nav.style.boxShadow = "none";
    }
};


var firstElement = document.querySelector('.countOne');
var secondElement = document.querySelector('.countTwo');
var ThirdElement = document.querySelector('.countThree');
var fourElement = document.querySelector('.countFour');


var count = 1000;
var count1 = 1;
var count2 = 1;
var count3 = 1;

setInterval(() =>{
if (count<2021) {
    count++;
    firstElement.innerText = count;
}
},0.01)


setInterval(() =>{
  if (count1<800) {
      count1++;
      secondElement.innerText = count1;
  }
},1)
setInterval(() =>{
    if (count2<12) {
        count2++;
        ThirdElement.innerText = count2;
    }
},500)
setInterval(() =>{
      if (count3<95) {
        count3++;
        fourElement.innerText = count3;
      }
},100)

function myFunction() {
  var x= document.getElementById("menu");
  if(x.style.display == "block"){
      x.style.display = "none";
  }else{
      x.style.display = "block";
  }
}
