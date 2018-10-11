//String Calculator:

function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",") || numbers.includes("\n")) {
		var delimiterRegex = getDelimeters(numbers);
		var numberArr = numbers.split(delimiterRegex); //Regexp expression
		checkForNegatives(numberArr);
		return sum(numberArr);
	}
	else {
		return parseInt(numbers);
	}
}

function getDelimeters(numbers) {
	if(numbers[0] == "/" && numbers[1] == "/") {
		var userDelimeter = numbers[2];
		var allDelimiters = "[\n," + userDelimeter + "]";
		var delimiterRegex = new RegExp(allDelimiters);
	} 
	else {
		var delimiterRegex = new RegExp("[\n,]");
	}
	return delimiterRegex;
}


function sum(numberArr) {
	var sum = 0;
	for(var i in numberArr) {
		if(parseInt(numberArr[i]) <= 1000) {
			sum += parseInt(numberArr[i]);
		}
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