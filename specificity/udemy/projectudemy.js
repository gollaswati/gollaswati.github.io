"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// // console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// handling click events

// const x = function () {
//   console.log(23);
// };

let secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretnumber;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  // console.log(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "Correct Number!";
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "no number !";
    displayMessage("no number!");
  }
  // when guess equal
  else if (guess === secretnumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("correct number");
    document.querySelector("body").style.backgroundColor = "#32a852";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretnumber ? "Too high!" : "Too low!";

      displayMessage(guess > secretnumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "you loss the game";
      displayMessage("you loss the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // // when guess is high
  // else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you loss the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // document.querySelector(".message").textContent = "Too high!";
  //   // score--;
  //   // document.querySelector(".score").textContent = score;
  // }
  // // when guess low
  // else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you loss the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// challenge
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "start guessing";
  displayMessage("start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#32a";
  document.querySelector(".number").style.width = "15rem";
});
