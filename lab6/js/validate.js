document.addEventListener('DOMContentLoaded', () => {
	const schema = {
		name: {
			isRequired: {
				message: `Введіть ім'я`,
			},
			pattern: {
				exp: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
				message: `Ім'я не коректне`,
			},
		},
		group: {
			isRequired: {
				message: 'Введіть групу',
			},
			pattern: {
				exp: /^[A-ZА-ЯІЇa-zа-яії]{2}[-]\d{2}$/,
				message: 'Назва групи не коректна',
			},
		},
		phone: {
			isRequired: {
				message: 'Введіть телефон',
			},
			pattern: {
				exp: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
				message: 'Телефон не коректний',
			},
		},
		faculty: {
			isRequired: {
				message: 'Введіть факультет',
			},
			pattern: {
				exp: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
				message: 'Факультет не коректний',
			},
		},
		address: {
			isRequired: {
				message: 'Введіть адресу',
			},
			pattern: {
				exp: /^[мг]\.\s[A-ЯЇ][а-яї]{1,80}/,
				message: 'Адреса не коректна',
			},
		},
	};

	const isRequired = (element, message) => {
		const errorContainer = element.parentNode.querySelector('.error-message');
		const { value } = element;

		if (value.length === 0) {
			errorContainer.innerHTML = message;
			element.parentNode.classList.add('error');
		}
	}

	const pattern = (element, exp, message) => {
		const errorContainer = element.parentNode.querySelector('.error-message');
		const { value } = element;

		if (!exp.test(value) && !element.parentNode.classList.contains('error')) {
			errorContainer.innerHTML = message;
			element.parentNode.classList.add('error');
		}
	}

	const validate = (form) => {
		for (const [inputName, props] of Object.entries(schema)) {
			if (props.isRequired) {
				isRequired(form[inputName], props.isRequired.message);
			}

			if (props.pattern) {
				pattern(form[inputName], props.pattern.exp, props.pattern.message);
			}
		}
	}

	const printResult = (form) => {
		const errors = document.querySelectorAll('.error');
		const resultContainer = document.querySelector('.result');

		if (errors.length === 0) {
			const html = [...form.elements].map((element) => {
				return element.tagName.toLowerCase() === 'input'
					? `<div>${ element.getAttribute('placeholder') }: ${ element.value }</div>`
					: '';
			}).join('');

			resultContainer.innerHTML = `<h3>Результат</h3>${ html }`;
		}
	}

	const submitBtn = document.querySelector('.js-submit');
	const inputs = document.querySelectorAll('input[type="text"]');
	
	submitBtn.addEventListener('click', (e) => {
		e.preventDefault();

		const form = document.querySelector('.js-form');

		validate(form);
		printResult(form);
		
	});

	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			input.parentNode.querySelector('.error-message').innerHTML = '';
			input.parentNode.classList.remove('error');
		});
	});
});
