"use strict";

//console.log(document.querySelector(".start").textContent);

/*document.querySelector(".random").textContent = 13;
document.querySelector(".prescore").textContent = 10;
document.querySelector(".inputnum").value = 15;
*/

let hideNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;

let score = 20;

document.querySelector(".btn_check").addEventListener("click", function () {
  const guessnum = Number(document.querySelector(".inputnum").value);

  if (!guessnum) {
    alert("Please Enter a number");
    //document.querySelector(".start").textContent = "No Number";
  } else if (hideNumber === guessnum) {
    document.querySelector(".start").textContent = "🎉🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "rgb(162, 255, 70)";
    document.querySelector("body").style.color = "black";
    document.querySelector(".random").textContent = hideNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector(".prehighscore").textContent = 21 - score;
    }
  } else if (guessnum !== hideNumber) {
    if (score <= 1) {
      alert("You lost the game. Refresh the game");
      document.querySelector(".prescore").textContent = 0;
    }
    document.querySelector(".start").textContent =
      guessnum > hideNumber ? "Too High" : "Too Low";
    score--;
    document.querySelector(".prescore").textContent = score;
  }
});

document.querySelector(".btn_agin").addEventListener("click", function () {
  hideNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(".prescore").textContent = 20;
  document.querySelector(".start").textContent = "Start guessing....";
  document.querySelector(".random").textContent = "?";
  document.querySelector(".inputnum").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.color = "white";
});
