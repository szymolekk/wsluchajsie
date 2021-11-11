var audio = document.getElementById("audio");
        var isPlaying = false;

function toggleAudio() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("play-button");

          if (isPlaying) {
            audio.pause();
            btn.innerHTML = "Start";
          } else {
            audio.play();
            btn.innerHTML = "Zatrzymaj";
          }
          isPlaying = !isPlaying;
}
function forwardAudio() {
    var audio = document.getElementById("audio");
    audio.currentTime += 30.0;
}
function backwardAudio() {
    var audio = document.getElementById("audio");
    audio.currentTime -= 30.0;
}
function timer() {
    var audio = document.getElementById("audio");
    var currentTime = parseFloat(audio.currentTime.toFixed(0));
    document.getElementById("demo").innerHTML = currentTime;
}
  
function init() {
    document.getElementById("audio").ontimeupdate = timer;
}
  
window.onload = init;

var audio = document.querySelector('audio');

if (audio) {

  window.addEventListener('keydown', function (event) {

    var key = event.which || event.keyCode;

    if (key === 32) { 

      
      event.preventDefault();

      audio.paused ? audio.play() : audio.pause();
      
    }

  });
}


function getDataTime() {
  var now = new Date();
  var hour = now.getHours();
  console.log(hour);
  if(hour == 0) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 1) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 2) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 3) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 4) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 5) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 6) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 7) {
    document.getElementById("humor").innerHTML = "Dzień Dobry ♡"
    humor.style.left = "50%";
  }
  if(hour == 8) {
    document.getElementById("humor").innerHTML = "Dzień Dobry ♡"
    humor.style.left = "50%";
  }
  if(hour == 9) {
    document.getElementById("humor").innerHTML = "Dzień Dobry ♡"
    humor.style.left = "50%";
  }
  if(hour == 10) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 11) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 12) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 13) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 14) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 15) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 16) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  if(hour == 17) {
    document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
    humor.style.left = "50%";
  }
  if(hour == 18) {
    document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
    humor.style.left = "50%";
  }
  if(hour == 19) {
    document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
    humor.style.left = "50%";
  }
  if(hour == 20) {
    document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
    humor.style.left = "50%";
  }
  if(hour == 21) {
    document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
    humor.style.left = "50%";
  }
  if(hour == 22) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 23) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
  if(hour == 24) {
    document.getElementById("humor").innerHTML = "Dobranoc ♡"
    humor.style.left = "50%";
  }
}

function all() {
  getDataTime();
  init();
}

window.onload = all;