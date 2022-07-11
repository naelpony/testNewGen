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

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


document.getElementById('p1').textContent = 'до ' + requiredRange1[1];
document.getElementById('p2').textContent = 'от ' + requiredRange2[0] + ' до ' + requiredRange1[1];
document.getElementById('p3').textContent = 'от ' + requiredRange3[0];



function filter() {
	let select = document.querySelector('select');
		let fil = courses.filter(cours => cours.prices <= requiredRange3);
		for (i = 0; i < fil.length; i++){
			let f = fil[i];

			document.getElementById('item').innerHTML +=
				'<div class = "item_elemet">' +
				'<div class = "name_element">' +
				f.name +
				'</div>' +
				'<div class = "price_element">' +
				'до ' + Math.max.apply(null, f.prices) +
				'</div>' +
				'</div>';

		}
		
	}
