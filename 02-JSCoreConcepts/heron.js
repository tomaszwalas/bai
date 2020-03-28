// boki trójkąta
var a = 3;
var b = 4;
var c = 5;
var h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function poleHerona(a,b,c) {
	const p = (a + b + c) / 2;
	var pole=p * Math.sqrt((p - a) * (p - b) * (p - c));
	console.log(`Pole trojkata o bokach ${a}, ${b} oraz ${c} wynosi ${pole.toFixed(2)}`);
}

poleHerona(a,b,c);