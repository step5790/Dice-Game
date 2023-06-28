"use strict";

rollDice();

function rollDice() {
  var play1 = Math.floor(Math.random() * 6) + 1;
  var play2 = Math.floor(Math.random() * 6) + 1;

  if (play1 === 0 && play2 === 0) {
    play1 = Math.floor(Math.random() * 6) + 1;
    play2 = Math.floor(Math.random() * 6) + 1;
  } else if (play1 !== 0 && play2 === 0) {
    play2 = Math.floor(Math.random() * 6) + 1;
  } else if (play1 === 0 && play2 !== 0) {
    play1 = Math.floor(Math.random() * 6) + 1;
  }

  document.querySelector(".img1").src = `/images/dice${play1}.png`;
  document.querySelector(".img2").src = `/images/dice${play2}.png`;

  console.log("test3 " + (Math.round(0.4363325178006588 * 6) + 1));
}
