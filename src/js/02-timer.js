import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'true');
let userDate = 0;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		console.log(selectedDates[0]);
	},
};

flatpickr(input, options);

function checkedCorrectDate(date) {
	const targetTime = deadlineTime(date);

	if (targetTime <= 0) {
		return Notiflix.Notify.failure('Please choose a date in the future');
	}

	startBtn.removeAttribute('disabled');
}

function deadlineTime(date) {
	const currentDate = new Date().getTime();
	const countDownTime = date - currentDate;
	return countDownTime;
}

function addLeadingZero(value) {
	return value.toString().padStart(2, '0');
}

function onClick() {
	const intervalTimer = setInterval(() => {
		let timeLeft = deadlineTime(userDate);

		if (timeLeft <= 1000) {
			clearInterval(intervalTimer);
		}
		function convertMs(ms) {
			const second = 1000;
			const minute = second * 60;
			const hour = minute * 60;
			const day = hour * 24;

			const days = Math.floor(ms / day);
			const hours = Math.floor((ms % day) / hour);
			const minutes = Math.floor(((ms % day) % hour) / minute);
			const seconds = Math.floor((((ms % day) % hour) % minute) / second);

			timerDays.textContent = addLeadingZero(days);
			timerHours.textContent = addLeadingZero(hours);
			timerMinutes.textContent = addLeadingZero(minutes);
			timerSeconds.textContent = addLeadingZero(seconds);
		}
		convertMs(timeLeft);
	}, 1000);
}

startBtn.addEventListener('click', onClick);
