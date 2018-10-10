//String Calculator:

function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",") || numbers.includes("\n")) {
		var numberArr = numbers.split(/[\n,]/); //Regexp expression
		checkForNegatives(numberArr);
		return sum(numberArr);
	}
	else {
		return parseInt(numbers);
	}
}

function sum(numberArr) {
	var sum = 0;
	for(var i in numberArr) {
		sum += parseInt(numberArr[i]);
	}
	return sum;
}

function checkForNegatives(numberArr) {
	var foundNegative = false;
	var negativeNumbers = "";
	for(var i = 0; i < numberArr.length; i++) {
		if(parseInt(numberArr[i]) < 0) {
			foundNegative = true;
			negativeNumbers += numberArr[i] + ",";
		}
	}

	if(foundNegative) {
		var negativeString = negativeNumbers.substring(0, negativeNumbers.length-1);
		throw "Negatives not allowed: " + negativeString;
	}
}

module.exports = add;