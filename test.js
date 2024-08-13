// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

// console.log(getRndInteger(10, 1));

const checkNum = document.querySelector('#checkNum');
const result = document.querySelector('#result');
const timerDisplay = document.querySelector('#timerDisplay');
const userNum = document.querySelector('#userNum');

let player = 0;
let computer = 0;

// Restrict userNum input to numbers between 1 and 10
userNum.addEventListener('input', function (e) {
    // Replace any non-digit character
    this.value = this.value.replace(/\D/g, '');

    // Convert the value to an integer
    let value = parseInt(this.value);

    // If the value is not a number or it's outside the range, clear the input
    if (isNaN(value) || value < 1 || value > 10) {
        this.value = '';
    }
});

const check = () => {
  const userNumValue = parseInt(userNum.value);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomNum = getRndInteger(1, 10);
  checkNum.value = randomNum;

  let results;

  if (userNumValue === randomNum) {
    results = 'correct';
    result.innerHTML = 'Correct, you earn +1 point!';
    result.style.color = 'green';
  } else {
    results = 'incorrect';
    result.innerHTML = 'Incorrect, computer earns +1 point!';
    result.style.color = 'red';
  }

  scoring(results);
};

function scoring(results) {
  const playerScore = document.querySelector('#playeScore');
  const computerScore = document.querySelector('#computerScore');

  if (results === 'correct') {
    player++;
  } else if (results === 'incorrect') {
    computer++;
  }

  playerScore.innerHTML = player;
  computerScore.innerHTML = computer;

  startCountdown(5); 
}

function startCountdown(seconds) {
  const generate = document.querySelector('#generate');

  let timeLeft = seconds;
  timerDisplay.innerHTML = timeLeft;
  userNum.disabled = true;
  generate.disabled = true;

  const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      userNum.value = '';
      checkNum.value = '';
      result.innerHTML = '';
      userNum.disabled  = false;
      generate.disabled = false;
    }
  }, 1000); 
}
