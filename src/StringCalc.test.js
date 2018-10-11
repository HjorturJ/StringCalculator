const add = require("./StringCalc");

it("should return 0 when given an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the number it is given if it is given a single number", () => {
	expect(add("69")).toBe(69);
});

it("should return the sum of 2 numbers it is given, if it is given 2 numbers", () => {
	expect(add("2,4")).toBe(6);
});

it("should return the sum of all numbers it is given, if it is given 2 or more numbers", () => {
	expect(add("2,4,4,5")).toBe(15);
});

it("should return the sum of all numbers, even with new delimiter", () => {
	expect(add("2,4\n4\n5,5")).toBe(20);
});

it("should throw an error if a negative number is given as an agrumnet", () => {
	function testCheckForNegatives() {
		add("2,-2\n-4,-6");
	}
	expect(testCheckForNegatives).toThrow(/^Negatives not allowed: -2,-4,-6$/);
});

it("should return the sum of all numbers it is given, ignoring all numbers above 1000, resulting in 10", () => {
	expect(add("1,4,1001,5\n1005")).toBe(10);
});

it("should return the sum of all numbers it is given, ignoring all numbers above 1000, resulting in 915", () => {
	expect(add("1,4,1001,5\n905")).toBe(915);
});