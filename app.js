let operationA;
let operationB;
let operation;

function init(){
	let result = document.getElementById("result");
	let reset = document.getElementById("reset");
	let sum = document.getElementById("sum");
	let resta = document.getElementById("subtraction");
	let multiply = document.getElementById("multiply");
	let division = document.getElementById("division");
	let equals = document.getElementById("equals");
	let one = document.getElementById("one");
	let two = document.getElementById("two");
	let three = document.getElementById("three");
	let four = document.getElementById("four");
	let five = document.getElementById("five");
	let six = document.getElementById("six");
	let seven = document.getElementById("seven");
	let eight = document.getElementById("eight");
	let nine = document.getElementById("nine");
	let zero = document.getElementById("zero");

	one.onclick = function(e) {
		result.textContent = result.textContent + "1";
	}
	two.onclick = function(e) {
		result.textContent = result.textContent + "2";
	}
	three.onclick = function(e) {
		result.textContent = result.textContent + "3";
	}
	four.onclick = function(e) {
		result.textContent = result.textContent + "4";
	}
	five.onclick = function(e) {
		result.textContent = result.textContent + "5";
	}
	six.onclick = function(e) {
		result.textContent = result.textContent + "6";
	}
	seven.onclick = function(e) {
		result.textContent = result.textContent + "7";
	}
	eight.onclick = function(e) {
		result.textContent = result.textContent + "8";
	}
	nine.onclick = function(e) {
		result.textContent = result.textContent + "9";
	}
	zero.onclick = function(e) {
		result.textContent = result.textContent + "0";
	}

	reset.onclick = function(e) {
		restart();
	}

	sum.onclick = function(e) {
		operationA = result.textContent;
		operation = "+";
		clean();
	}
	subtraction.onclick = function(e) {
		operationA = result.textContent;
		operation = "-";
		clean();
	}
	multiply.onclick = function(e) {
		operationA = result.textContent;
		operation = "*";
		clean();
	}
	division.onclick = function(e) {
		operationA = result.textContent;
		operation = "/";
		clean();
	}
	equals.onclick = function(e) {
		operationB = result.textContent;
		solve();
	}

	function clean(){
		result.textContent = "";
	}

	function restart(){
		result.textContent = "";
		operationA = 0;
		operationB = 0;
		operation = "";
	}

	function solve(){
		let res = 0;
		switch(operation){
			case "+":
				res = parseFloat(operationA) + parseFloat(operationB);
				break;
			case "-":
				res = parseFloat(operationA) - parseFloat(operationB);
				break;
			case "/":
				res = parseFloat(operationA) / parseFloat(operationB);
				break;
			case "*":
				res = parseFloat(operationA) * parseFloat(operationB);
				break;
		}
		restart();
		result.textContent = res;
	}
}