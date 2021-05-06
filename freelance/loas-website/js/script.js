//  Preloader
setTimeout(function() {
  var preloaderFadeOutTime =500;
  function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    setTimeout(function() {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 500);
  }
  hidePreloader();
}, 2000);

//  Scroll to top button
var btn = $('#top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Image full screen on click - c2s2
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  $(".slideshow-img-1").css("display", "block");
}
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  $(".slideshow-img-1").css("display", "none");
}


// video
var vid = document.getElementById("myVideo");
var vid1 = document.getElementById("myVideo1");
var vid2 = document.getElementById("myVideo2");
function playVid() {
  if(vid.paused) {
    vid.play();
  }
  else {
    vid.pause();
  }
}
function playVid1() {
  if(vid1.paused) {
    vid1.play();
  }
  else {
    vid1.pause();
  }
}
function playVid2() {
  if(vid2.paused) {
    vid2.play();
  }
  else {
    vid2.pause();
  }
}

// audio
var aud = document.getElementById("myAudio");
var aud1 = document.getElementById("myAudio1");
var aud2 = document.getElementById("myAudio2");
var aud3 = document.getElementById("myAudio3");
var aud4 = document.getElementById("myAudio4");
var aud5 = document.getElementById("myAudio5");
var aud6 = document.getElementById("myAudio6");
var aud7 = document.getElementById("myAudio7");
var aud8 = document.getElementById("myAudio8");
var aud9 = document.getElementById("myAudio9");
function playAud() {
  if(aud.paused) {
    aud.play();
  }
  else {
    aud.pause();
  }
}
function playAud1() {
  if(aud1.paused) {
    aud1.play();
  }
  else {
    aud1.pause();
  }
}
function playAud2() {
  if(aud2.paused) {
    aud2.play();
  }
  else {
    aud2.pause();
  }
}
function playAud3() {
  if(aud3.paused) {
    aud3.play();
  }
  else {
    aud3.pause();
  }
}
function playAud4() {
  if(aud4.paused) {
    aud4.play();
  }
  else {
    aud4.pause();
  }
}
function playAud5() {
  if(aud5.paused) {
    aud5.play();
  }
  else {
    aud5.pause();
  }
}
function playAud6() {
  if(aud6.paused) {
    aud6.play();
  }
  else {
    aud6.pause();
  }
}
function playAud7() {
  if(aud7.paused) {
    aud7.play();
  }
  else {
    aud7.pause();
  }
}
function playAud8() {
  if(aud8.paused) {
    aud8.play();
  }
  else {
    aud8.pause();
  }
}
function playAud9() {
  if(aud9.paused) {
    aud9.play();
  }
  else {
    aud9.pause();
  }
}
