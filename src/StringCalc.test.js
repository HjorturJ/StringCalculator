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