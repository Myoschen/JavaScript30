const buttons = document.querySelectorAll('.timer__button');
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const form = document.querySelector('form');

let timer;

function setTime() {
  clearInterval(timer);
  let remainTime = parseInt(this.dataset.time);
  let currentTime = new Date();
  displayRemainTime(remainTime);
  displayEndTime(currentTime, remainTime);
  countdown(remainTime);
}

function displayRemainTime(remainTime) {
  let hours = parseInt(remainTime / 3600);
  let minutes = parseInt((remainTime - hours * 3600) / 60);
  let seconds = remainTime % 60;
  let remainTimeText = `${patch(hours)}:${patch(minutes)}:${patch(seconds)}`;

  timeLeft.innerHTML = remainTimeText;
  document.title = remainTimeText;
}

function countdown(remainTime) {
  timer = setInterval(() => {
    if (remainTime > 0) {
      remainTime--;
      displayRemainTime(remainTime);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
function displayEndTime(currentTime, remainTime) {
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let predictTime =
    remainTime + currentHours * 3600 + currentMinutes * 60 + currentSeconds;
  let predictHours = parseInt(predictTime / 3600);
  let predictMinutes = parseInt((predictTime - predictHours * 3600) / 60);
  let predictSeconds = predictTime % 60;
  endTime.innerHTML = `${patch(predictHours)}:${patch(predictMinutes)}:${patch(
    predictSeconds
  )}`;
}

// 當小於 10 時在左側補上 0
function patch(num) {
  return num < 10 ? `0${num}` : num;
}

function setInputTime(e) {
  e.preventDefault();
  let value = this.querySelector('input').value;
  if (isNaN(value)) {
    window.alert('Please enter number!');
  } else {
    clearInterval(timer);
    let remainTime = value * 60;
    let currentTime = new Date();
    displayRemainTime(remainTime);
    displayEndTime(currentTime, remainTime);
    countdown(remainTime);
    this.reset();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', setTime);
});
form.addEventListener('submit', setInputTime);
