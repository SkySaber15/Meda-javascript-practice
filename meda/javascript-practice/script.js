var firstpart = "Hello ";

var name = prompt("type in your name.")

var secondpart = ", how are you today?"

var sentance = firstpart + name + secondpart;

var isitraining = prompt("is it raining?")

console.log(sentance);

console.log(typeof isitraining);

if (isitraining == "Yes") {
  console.log("careful, its raining!");
}else if (isitraining == "yes") {
  console.log("careful, its raining. Learn english");
} else {
  console.log("go outside, its not raining.");
}

/*
var responce = prompt("type anything.");

var number1 = 10000;

var number2 = 6789;

var product = number1 * number2;

console. log(product);
console. log(responce);

var food1 = "Burritos";
var food2 = "pizza";
var food3 = "steak";

var delimiter = ", "

var firstSentance = "My favorite foods are: ";

var lastPartOfTheSentance = ".";

var sentance = firstSentance + food1 + delimiter + food2 + delimiter + food3 + lastPartOfTheSentance;

console.log(sentance);


var cheese = Math.round(1001.2938923);
console.log(cheese);

var one = Math.random();
console.log(one);

var pizza = cheese;

var firstDay = [true, "hello", 300, cheese];

console.log(firstDay[2]);

firstDay.pop();
firstDay.push();

firstDay.shift();
firstDay.unshift();

var days = ["sunday", "monday", "tuesday", "wensday", "thursday", "friday", "saterday" ]

console.log(days[4]);

var favoriteday = days[6];

days[2] = "Tuesday";
days[6] = "superday";

days.splice(3, 0, "happyday");

console.log(days);

var userinput = prompt('type in the first number');
var userinput2 = prompt("type in the second number");

var usernumber = parseInt(userinput);
var usernumber2 = parseInt(userinput2);

function calculate(num1, num2) {
console.log("you entered " + num1 + " and " + num2 + " .");
console.log("addition: " + (num1 + num2));
console.log("subtraction: " + (num1 - num2));
console.log("multiplication: " + (num1 * num2));
console.log("division: " + (num1 / num2));
}

calculate(usernumber, usernumber2);
/*
