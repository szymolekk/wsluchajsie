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

window.onload = ( function () {
  getDataTime();
  timer();
})();

function getDataTime() {
  var now = new Date();
  var hour = now.getHours();
  if(hour >= 8) {
    document.getElementById("humor").innerHTML = "Miłego Dnia ♡"
    humor.style.left = "50%";
  }
  else {
    if(hour <= 18) {
      document.getElementById("humor").innerHTML = "Miłego Wieczoru ♡"
      humor.style.left = "50%";
    }
  }
}