//String Calculator:

function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",")) {
		var numberArr = numbers.split(",");
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

module.exports = add;