/*
1. setInterval()
2. style.backgroundColor
3. addEventListener()
*/

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

const clickButtonStart = () => {
  intervalId = setInterval(() => {
    buttonStop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
};

buttonStart.addEventListener('click', clickButtonStart);

const clickButtonStop = () => {
  if (intervalId) {
    clearInterval(intervalId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
  }
};

buttonStop.addEventListener('click', clickButtonStop);
