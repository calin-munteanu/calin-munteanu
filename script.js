'use strict';
let myNumber = Math.ceil(Math.random() * 20);
let score = 20;

const inputNumber = document.querySelector('.guess');
const btn = document.querySelector('.check');
const message = document.querySelector('.message');
const myNumberHtml = document.querySelector('.number');
const again = document.querySelector('.again');
const highScoreHtml = document.querySelector('.highscore');
const scoreHtml = document.querySelector('.score');

let highScore = 0;
highScoreHtml.textContent = highScore;

btn.addEventListener('click', () => {
  let insertedNumber = +inputNumber.value;
  if (!insertedNumber) {
    message.textContent = '⛔No number!';
  } else {
    if (insertedNumber !== myNumber) {
      if (score > 1) {
        message.textContent =
          insertedNumber < myNumber ? '📉Too low...' : '📈Too high...';
        score--;
        scoreHtml.innerHTML = `${score}`;
      } else {
        message.textContent = '🔚 You lost the game!';
        scoreHtml.textContent = '0';
      }
    } else if (insertedNumber === myNumber) {
      message.innerHTML = '🥳Correct number!';
      myNumberHtml.innerHTML = myNumber;
      if (score >= highScore) highScore = score;
      document.body.style.backgroundColor = 'green';
      myNumberHtml.style.width = '40rem';
      highScoreHtml.textContent = highScore;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  scoreHtml.textContent = score;
  myNumber = Math.ceil(Math.random() * 20);
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  myNumberHtml.style.width = '15rem';
  inputNumber.value = '';
  myNumberHtml.textContent = '?';
});
