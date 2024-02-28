//For loop
for (var i=10; i>0; i--){
    console.log(i);
}
console.log("Happy New Year!");

//While loop
var i=1;
while(i<4){
    console.log(i);
    i=i+1;
}
console.log("Go!");

//For loop
for(var i=1; i<=5; i++){
    console.log(i);
}
console.log("Counting Completed!");

//While loop
var i=5;
while(i>0){
    console.log(i);
    i=i-1;
}
console.log("Counting Completed!");

//Nested for loop
for(var i=1; i<=2; i++){
    for(var j=1; j<=5; j++){
        console.log("Week " + i + " day " + j);
    }
}

//Nested loop for summer months in two years 2023 and 2024
for (var year = 2023; year < 2025; year++){
    console.log(year);
    for (var month = 6; month < 9; month++){
    console.log("---------", month);
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}