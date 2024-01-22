//Some examples of Operators
var score = 8;
console.log("Mid-level skills: ", score > 0 && score < 10);
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0)

//Odd Numbers by using modulus operator
num1 = 2;
num2 = 5;
test1 = num1 % 2;
test2 = num2 % 2;
result1 = test1 == 0;
result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// Add and Concatenate
console.log(5 + 10);
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

// += operator
var counter = 10;
counter += 5;
counter +=3;
console.log(counter);