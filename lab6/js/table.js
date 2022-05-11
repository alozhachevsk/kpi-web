const arr = [
	[1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10, 11, 12],
	[13, 14, 15, 16, 17, 18],
	[19, 20, 21, 22, 23, 24],
	[25, 26, 27, 28, 29, 30],
	[31, 32, 33, 34, 35, 36],

];

const makeTableHTML = (arr) => {
    let result = `<table border="1" cellpadding="20" cellspacing="0">`;

    for(let i = 0; i < arr.length; i++) {
        result += '<tr>';

        for(let j = 0; j < arr[i].length; j++){
        	if (i === 0 && j === 2) {
        		result += `<td class="cell">${ arr[i][j] }</td>`;
        	} else if (i === j ) {
        		result += `<td class="main">${ arr[i][j] }</td>`;
        	} else {
        		result += `<td>${ arr[i][j] }</td>`;
        	}
            
        }
        result += '</tr>';
    }
    result += '</table>';

    return result;
}

const tableContainer = document.querySelector('.table');

tableContainer.innerHTML = makeTableHTML(arr);

const colorInput = document.createElement('input');

colorInput.setAttribute('type', 'color');
tableContainer.append(colorInput);

const cell = document.querySelector('.cell');

cell.addEventListener('mouseenter', () => {
	const color = Math.floor(Math.random() * 16777215).toString(16);

	cell.style.backgroundColor = `#${ color }`;
	colorInput.setAttribute('value', `#${ color }`);
});

cell.addEventListener('click', () => {
	colorInput.click();

	colorInput.addEventListener('input', () => {
		color = colorInput.value;
		cell.style.backgroundColor = colorInput.value;
	});
});

cell.addEventListener('dblclick', () => {
	const mainCells = document.querySelectorAll('.main');
	const color = Math.floor(Math.random() * 16777215).toString(16);

	mainCells.forEach((cell) => {
		cell.style.backgroundColor = `#${ color }`;
	});

});
