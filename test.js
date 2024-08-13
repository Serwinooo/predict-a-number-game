// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

// console.log(getRndInteger(10, 1));

const checkNum = document.querySelector('#checkNum');
const result = document.querySelector('#result');
const timerDisplay = document.querySelector('#timerDisplay');

let player = 0;
let computer = 0;

const check = () => {
  const userNum = parseInt(document.querySelector('#userNum').value);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomNum = getRndInteger(1, 10);
  checkNum.value = randomNum;

  let results;

  if (userNum === randomNum) {
    results = 'correct';
    result.innerHTML = 'correct, you earn +1 point!';
    result.style.color = 'green';
  } else {
    results = 'incorrect';
    result.innerHTML = 'incorrect, computer earn +1 point!';
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
        document.querySelector('#userNum').value = '';
        document.querySelector('#checkNum').value = '';
        result.innerHTML = '';
        userNum.disabled  = false;
        generate.disabled = false;
      }
    }, 1000); 
  }

