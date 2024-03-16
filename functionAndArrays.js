//Sample
function myFunc(){
    console.log("Hello World");
}
myFunc();

//Adding two nums
//Function without parameters
function addtwoNums(){
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addtwoNums();

//Adding two nums
//Function with parameters
function addTwoNums(a, b){
    var c = a + b;
    console.log(c);
}
addTwoNums(2, 4);
addTwoNums(9, 3);

//Arrays
var train1 = ['Wheat', "Barley", "Potato", "Salt", "Rocks"];
console.log(train1[0]);

//Arrays
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once

//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


//Practicing with functions
function letterFinder(word, match){
    for(var i=0; i<word.length; i++){
        if(word[i]==match){
            console.log("Found the", match, "at", i);
        }
        else{
            console.log("---No match found at", i);
        }
    }
}
letterFinder("test", "t");