let body = document.querySelector("body");
let score = document.querySelector("#score");
let display = document.querySelector("#display");
let box = document.querySelectorAll(".box");
let startGame = document.querySelector("#startGame");
let tapSound = document.querySelector("#tapSound");
let gameOverAduio = document.querySelector("#gameOverAduio");

let array = [
  "Red",
  "Green",
  "Blue",
  "Pink",
  "Yellow",
  "Black",
  "Orange",
  "Purple",
  "White",
];

let randColor = function random() {
  return Math.floor(Math.random() * 9);
};

let idx = randColor();
let idx2 = randColor();

if (idx === idx2) {
  idx = randColor();
  idx2 = randColor();
}
let Points = 0;
startGame.addEventListener("click", () => {
  score.innerText = 0;
  Points = 0;
  score.style.display = "inline";
  let disTextColor = array[idx];

  let disColorText = array[idx2];

  display.style.color = disTextColor;
  display.innerText = disColorText;
});

for (let i = 0; i < box.length; i++) {
  //  console.log(clickedBoxColor);
  box[i].addEventListener("click", () => {
    let clickedBoxColor = box[i].innerText;

    if (clickedBoxColor != display.innerText) {
      display.innerText = "Game Over";
      play(gameOverAduio);
      alert("Game over!! 🎮❌");
    } else {
      idx = randColor();
      idx2 = randColor();
      disColor = array[idx];

      disColor2 = array[idx2];

      display.style.color = disColor2;
      display.innerText = disColor;
      console.log("okk");

      Points = Points + 1;

      score.innerText = Points;
    }
  });

  //add sound play to all btn 
  box[i].addEventListener("click", () => {
    console.log("Sound working");
    play(tapSound);
    vibrate(130);
  });





}

//Function to play sound
function play(audio) {
  audio.currentTime = 0;
  audio.play();
}

//add vibration function
function vibrate(ms) {
  if (navigator.vibrate) {
    navigator.vibrate(ms);
  }
}
