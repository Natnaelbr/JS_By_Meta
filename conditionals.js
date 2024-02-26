//Conditional statement "IF"
var result = 41;
if (result > 40) {
    console.log("Cogradulation you passed.");
} else {
    console.log("Unfortunately you did not pass.")
}

//Coditional statement "IF ELSE"
var food = "cold";
if (food == "hot") {
    console.log('Too hot')
}
else if (food == "cold") {
    console.log('Too cold')
}
else {
    console.log('Just right')
}

//Conditional statement Switch statement
var place = 'first';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No Medal');
}

//conditional statements ***If else
var light = 'green';
if (light == 'green'){
    console.log("Go");
}
else if(light== 'yellow'){
    console.log("Ready");
}
else if(light== 'red'){
    console.log("stop");
}
else{
    console.log("The light doesn't match")
}

//conditional statements ***Switch
var light = 'yellow';
switch(light){
    case 'green':
        console.log("Go");
        break;
    case 'yellow':
        console.log("Ready");
        break;
    case 'red':
        console.log("Stop");
        break;
    default :
        console.log("The light doesn't match");
        break;
}

//Practice conditional if else statement
var age = 10;
if (age >= 65){
    console.log("You get your income from your pension");    
}
else if(age >= 18 && age < 65){
    console.log("Each month you get salary");
}
else if(age < 18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}

//Practice Conditional Switch statements
var day = 'Sunday';
switch(day){
    case 'Monday':
        console.log("Learn HTML");
        break;
    case 'Tuesday':
        console.log("Learn CSS");
        break;
    case 'Wednesday':
        console.log("Learn JS");
        break;
    case 'Thursday':
        console.log("Learn Python");
        break;
    case 'Friday':
        console.log("Revise each one of programming languages")
        break;
    case 'Saturday':
        console.log("Meet Friends");
        break;
    case 'Sunday':
        console.log("Plan for the next week");
        break;
    defaut:
    console.log("There is no such day");
}