const add = require("./StringCalc");

it("Should return 0 when given an empty string", () => {
	expect(add("")).toBe(0);
});

it("Should return the number it is given if it is given a single number", () => {
	expect(add("69")).toBe(69);
});

it("Should return the sum of 2 numbers it is given, if it is given 2 numbers", () => {
	expect(add("2,4")).toBe(6);
});

it("Should return the sum of all numbers it is given, if it is given 2 or more numbers", () => {
	expect(add("2,4,4,5")).toBe(15);
});

it("Should return the sum of all numbers, even with new delimiter \\n", () => {
	expect(add("2,4\n4\n5,5")).toBe(20);
});

it("Should throw an error if a negative number is given as an agrumnet", () => {
	function testCheckForNegatives() {
		add("2,-2\n-4,-6");
	}
	expect(testCheckForNegatives).toThrow(/^Negatives not allowed: -2,-4,-6$/);
});

it("Should return the sum of all numbers it is given, ignoring all numbers above 1000", () => {
	expect(add("1,4,1001,5\n1005")).toBe(10);
});

it("Should return the sum of all numbers it is given, ignoring all numbers above 1000 but including 1000", () => {
	expect(add("0,5,1001,1000,5\n905")).toBe(1915);
});

it("Should return the sum of all numbers, even with custom delimiters, in this case ;", () => {
	expect(add("//;\n5,5\n5;5")).toBe(20);
});

it("Should return the sum of all numbers, even with custom delimiters, in this case +", () => {
	expect(add("//+\n5,6\n6+5")).toBe(22);
});

it("Should return the sum of all numbers, even if only a custom delimiter is used, in this case +", () => {
	expect(add("//++5+7+7+5")).toBe(24);
});