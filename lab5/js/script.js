document.addEventListener('DOMContentLoaded', () => {
	const img = document.querySelector('.js-img');
	const increaseBtn = document.querySelector('.js-increase');
	const decreaseBtn = document.querySelector('.js-decrease');
	const removeBtn = document.querySelector('.js-remove');
	const addBtn = document.querySelector('.js-add');


	const setWidth = (btn, action) => {
		btn.addEventListener('click', () => {
			const width = img.getAttribute('width');

			if (action === 'increase') {
				img.setAttribute('width', `${ parseInt(width) + 20 }px`)
			} else {
				img.setAttribute('width', `${ parseInt(width) - 20 }px`)
			}
			
		});
	}

	setWidth(increaseBtn, 'increase');
	setWidth(decreaseBtn, 'decrease');

	removeBtn.addEventListener('click', () => {
		img.style.visibility = 'hidden';
	});

	addBtn.addEventListener('click', () => {
		img.style.visibility = 'visible';
	});

	const item1 = document.getElementById('item1');
	const item2 = document.querySelector('#item2');

	const invertHex = (hex) => {
		return (Number(`0x1${ hex }`) ^ 0xFFFFFF).toString(16).substr(1);
	}


	const changeStyle = (item) => {
		item.addEventListener('click', () => {
			const randomColor = Math.floor(Math.random() * 16777215).toString(16);

			item.style.color = `#${ randomColor }`;
			item.style.backgroundColor = `#${ invertHex(randomColor) }`;
		});
	}

	changeStyle(item1);
	changeStyle(item2);
});
