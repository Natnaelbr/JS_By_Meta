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