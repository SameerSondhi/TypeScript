"use strict";
// TYPE ANNOTATION ---> When we tell TS the type of our variable
let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
// Built in objects
let now = new Date();
// Arrays
let colors = ['red', 'green', 'blue'];
let numbers = [1, 2, 3, 4];
let truths = [true, true, false];
//Classes
class Car {
}
let automobile = new Car();
// Object Literal
let point = {
    x: 10,
    y: 20
};
// Function
const logNumber // ANNOTATION
 = (i) => {
    console.log(i);
};
// When to use annotations
// When a function returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
// When we declare a variable on one line, and then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
//When a variable's type cannot be inferred correctly
let nums = [-10, -1, 12];
let numAboveZero = false;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        numAboveZero = numbers[i];
    }
}
//# sourceMappingURL=variables.js.map