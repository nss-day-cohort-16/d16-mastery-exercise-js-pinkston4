var submit = document.getElementById("submitInput");
var lineOnePartOne = [];
var lineOnePartTwo = [];
var lineOne = [];

function checkInput (height, Length, symbol) {
	var symbolUsed = document.getElementById("characterInput").value ;
	var height = document.getElementById("heightOfTree").value ;
	for (var i = 0; i < height; i++) {
		lineOnePartOne.push(" ");
	} 
	lineOnePartTwo.push(symbolUsed);
	lineOne = lineOnePartOne.concat(lineOnePartTwo);
	console.log(lineOne.toString());
	for (var i = 0; i < height; i++) {
		lineOne.shift();
		lineOne.push(symbolUsed);
		lineOne.push(symbolUsed);
		console.log(lineOne.toString());
	}
}
// 	console.log(lineOnePartOne);
// 	console.log(lineOnePartTwo);
// 	console.log(lineOne);





submit.addEventListener("click", checkInput);