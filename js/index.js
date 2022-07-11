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


let requiredRange4 = [0, Infinity];

document.getElementById('p1').textContent = 'до ' + requiredRange1[1];
document.getElementById('p2').textContent = 'от ' + requiredRange2[0] + ' до ' + requiredRange2[1];
document.getElementById('p3').textContent = 'от ' + requiredRange3[0];

for (i = 0; i < courses.length; i++) {
	let f = courses[i];

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


function getSelect() {
	let select = document.getElementById('select');
	let value = select.value;
	let selected = [0,0];
	if(value == 0){
		selected = requiredRange4;
	}else if(value == 1){
		selected = requiredRange1;
	}else if(value == 2){
		selected = requiredRange2;
	}else if (value == 3) {
		selected = [requiredRange3[0] = requiredRange3[0], requiredRange3[1] ?? Infinity]; 
	}else{
		return 0;
	}
	return selected;
}

function filter() {
	document.getElementById('item').innerHTML = "";

	let fil = courses.filter((item) => {
		const min = item.prices[0] ?? 0;
		const max = item.prices[1] ?? Infinity;
		return min >= getSelect()[0] && max <= getSelect()[1];
	});
	console.log(fil);
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
