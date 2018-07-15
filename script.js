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

//boolean logic

var firstName = 'Leslie';
var age = 26;

if (age < 13) {
    console.log(firstName + ' ' + 'is a boy');
} else if (age >= 13 && age <20) {
    console.log(firstName + ' ' + 'is a teenager');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' ' + 'is a young man');
} else {
    console.log(firstName + ' ' + 'is a man');
}

age >= 18 ? console.log(firstName + ' ' + 'drinks beer') : console.log(firstName + ' ' + 'drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log("You must drink " + drink);

//switch statement

var job = 'sensei';
switch (job) {
    case 'teacher':
    case 'instructor':
    case 'sensei':
        console.log(firstName + ' teaches people');
        break;
    case 'driver':
        console.log(firstName + ' drives people');
        break;
    case 'gamer':
        console.log(firstName + ' plays with people');   
        break;
    default: 
        console.log(firstName + ' has no idea what they\'re doing'); 
}

switch (true) {
    case age < 13:
        console.log(firstName + ' ' + 'is a boy');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' ' + 'is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' ' + 'is a young man');
        break;
    default:
        console.log(firstName + ' ' + 'is a man');
}