// Список курсов
let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];
// Копируем родительский массив 
let arrCopy = JSON.parse(JSON.stringify(courses));

// Передаем копию массива в функцию вывода массива и сортировки массива 
getArray(arrCopy);
sortDown(arrCopy);

// Функция вывода массива
function getArray(n) {
	let arr = n.forEach((item) => {
		document.getElementById('item').innerHTML +=
			'<div class = "item_elemet">' +
			'<div class = "name_element">' +
			item.name +
			'</div>' +
			'<div class = "price_element">' +
			'до ' + Math.max.apply(null, item.prices) +
			'</div>' +
			'</div>';
	})
	return arr;
}

// Функция фильтра массива
function filter() {
	let minValue = document.getElementById('min').value;
	let maxValue = document.getElementById('max').value;
	// Проверка входных данных
	if (minValue == '' && maxValue == '') {
		alert('error');
		return false;
	} else {
		document.getElementById('item').innerHTML = "";
		let fil = courses.filter((item) => {
			const min = item.prices[0] ?? 0;
			const max = item.prices[1] ?? Infinity;
			return min >= minValue && max <= maxValue;
		});

		//Передаём в получившийся массив в функцию сортировки и функцию вывода массива
		sortDown(fil);
		getArray(fil);
	}
}

//Функция сортировки массива
function sortDown(n) {
	// Сортировка по возрастанию
	document.getElementById('radioButton1').addEventListener('click', () => {
		document.getElementById('radioButton2').checked = false; 
		document.getElementById('item').innerHTML = "";
		let arr = n.sort(function (a, b) {
			const firts = Math.max.apply(null, a.prices);
			const two = Math.max.apply(null, b.prices);
			return firts > two ? 1 : -1;
		})
		getArray(arr);
	})

	// Сортировка по убыванию
	document.getElementById('radioButton2').addEventListener('click', () => {
		document.getElementById('radioButton1').checked = false; 
		document.getElementById('item').innerHTML = "";
		let arr = n.sort(function (a, b) {
			const firts = Math.max.apply(null, a.prices);
			const two = Math.max.apply(null, b.prices);
			return two - firts;
		})
		getArray(arr);
	})
}

// Очистки страницы
document.getElementById('clear').addEventListener('click', () => {
	let arrCopy = JSON.parse(JSON.stringify(courses));
	document.getElementById('radioButton1').checked = false; 
	document.getElementById('radioButton2').checked = false;
	document.getElementById('min').value = ''; 
	document.getElementById('max').value = '';
	document.getElementById('item').innerHTML = "";
	getArray(arrCopy);
	sortDown(arrCopy);
})


