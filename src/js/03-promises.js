import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const createPromiseForm = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');

createPromiseForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	createPromiseBtn.setAttribute('disabled', true);

	let delay = Number(inputDelay.value);
	let step = Number(inputStep.value);
	let amount = Number(inputAmount.value);

	for (let position = 1; position <= amount; position += 1) {
		createPromise(position, delay)
			.then(({ position, delay }) => {
				Notiflix.Notify.success(
					`✅ Fulfilled promise ${position} in ${delay}ms`
				);
			})
			.catch(({ position, delay }) => {
				Notiflix.Notify.failure(
					`❌ Rejected promise ${position} in ${delay}ms`
				);
			});

		delay += step;
	}
	createPromiseForm.reset();
	setTimeout(() => {
		createPromiseBtn.removeAttribute('disabled');
	}, 1000);
}

function createPromise(position, delay) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				res({ position, delay });
			} else {
				rej({ position, delay });
			}
		}, delay);
	});
}
