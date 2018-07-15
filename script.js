//console.log("hello world");

// first challenge 

var markHeight = 70;
var markWeight = 100;

var johnHeight = 90;
var johnWeight = 100;

var highestBMI = false;

//math

var markBMI = markWeight / (markHeight * 2);
var johnBMI = johnWeight / (johnHeight * 2);

highestBMI = markBMI >= johnBMI;
console.log("Is Mark's BMI higher than John's?" + ' ' + highestBMI);

if(markBMI >= johnBMI) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}