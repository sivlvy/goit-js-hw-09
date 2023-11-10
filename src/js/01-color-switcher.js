const refs = {
   startBtn: document.querySelector('[data-start]'),
   stopBtn: document.querySelector('[data-stop]'),
};
const body = document.querySelector('body');

refs.startBtn.addEventListener('click', handleClickStartBtn);
refs.stopBtn.addEventListener('click', handleClickStopBtn);

let id;

function handleClickStartBtn() {
   refs.startBtn.setAttribute('disabled', true);
   id = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
   }, 1000);
}

function handleClickStopBtn() {
   clearInterval(id);
   refs.startBtn.removeAttribute('disabled')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}
