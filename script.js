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

//challenge two 

var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;
console.log(johnAverage);
console.log(mikeAverage);
console.log(maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage){
    console.log("John wins with an average of " + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
    console.log("Mike wins with an average of " + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage){
    console.log("Mary wins with an average of " + maryAverage);
} else {
    console.log("there was a draw, no winners");
}

//third challenge arrays

var billsTip = [];
var tip = [];

function calcTip(bill){
    if (bill < 50){
        var billTip = bill + (bill * 0.2);
        var tipOnly = bill * 0.2;
        billsTip.push(billTip);
        tip.push(tipOnly);
    } else if (bill >= 50 && bill <= 200){
        var billTip = bill + (bill * 0.15);
        var tipOnly = bill * 0.15;
        billsTip.push(billTip);
        tip.push(tipOnly);
    } else if (bill > 200){
        var billTip = bill + (bill * 0.10);
        var tipOnly = bill * 0.10;
        billsTip.push(billTip);
        tip.push(tipOnly);
    }
}
calcTip(124);
calcTip(48);
calcTip(268);

console.log(tip);
console.log(billsTip);

//fourth challenge objects methods and properties

var john = {
    fullName: 'John Tester',
    height: 100,
    weight: 90,
    bmi: function () {
        this.bmi = this.weight / (this.height * 2);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Fisher',
    height: 173,
    weight: 96,
    bmi: function () {
        this.bmi = this.weight / (this.height * 2);
        return this.bmi;
    }
}

if (john.bmi() > mark.bmi ()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log("They have identical BMI");
}