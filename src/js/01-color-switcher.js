const refs = {
   startBtn: document.querySelector('[data-start]'),
   stopBtn: document.querySelector('[data-stop]'),
};
const body = document.querySelector('body');

refs.startBtn.addEventListener('click', handleClickStartBtn);
refs.stopBtn.addEventListener('click', handleClickStopBtn);

refs.stopBtn.setAttribute('disabled', true)

function handleClickStartBtn() {
   refs.startBtn.setAttribute('disabled', true);
   id = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
   }, 1000);
   refs.stopBtn.removeAttribute('disabled');
}

function handleClickStopBtn() {
   clearInterval(id);
   refs.stopBtn.setAttribute('disabled', true)
   refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}
