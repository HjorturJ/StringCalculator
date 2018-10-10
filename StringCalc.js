//String Calculator:

function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",")) {
		numbers = numbers.split(",")
		return parseInt(numbers[0]) + parseInt(numbers[1]);
	}
	else {
		return parseInt(numbers);
	}
}

module.exports = add;