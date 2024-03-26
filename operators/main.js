// OPPERATORS 
// ADDITION  
var number1 = 7;
var number2 = 8;
var sum = number1 + number2;
console.log("The sum of ".concat(number1, " + ").concat(number2, " = ").concat(sum)); // 15
// NOTE :    (In addition operator string remains a string in the final result and can also change the number into string)
// while adding string and number: 
// num + num = num                  result will be a number
// num + Str = str                  result will be a string
// str + num = str                  result will be a string
// str + str = str                  result will be a string
// num + num + str = str            result will be a string    but the first two numbers will add and then they will change into a string.
// str + num + num = str            result will be a string
// num + str + num = str            result will be a string
var code1 = 4;
var code2 = "2";
console.log(code1 + code2); // this will print 42   , 4 is the number and 2 is the string.
// NOTE  (In all other operators except addition string can not do operations with a number. It will throw ERROR)
// SUBTRACTION
var number3 = 9;
var number4 = 5;
var Difference = number3 - number4;
console.log("The Difference of ".concat(number3, " - ").concat(number4, " = ").concat(Difference)); // 4
// let a = 4
// let c = "2";
// console.log(code2 - code1);   // This will throw error cuz str can not subtract from a num.
// MULTIPLICATION
var number5 = 3;
var number6 = 7;
var product = number5 * number6;
console.log(" The Product of ".concat(number5, " * ").concat(number6, " =  ").concat(product)); // 21
// DIVISION
var number7 = 80;
var number8 = 10;
var Result = number7 / number8;
console.log("The Quotient of ".concat(number7, " / ").concat(number8, " = ").concat(Result)); // 8
// Exponentiation
var square = 4;
var side = 4;
var totalSides = Math.pow(square, side);
console.log("The result of ".concat(square, " ** ").concat(side, " =  ").concat(totalSides)); // 256
// Modules
var apples = 31;
var person = 5;
var appleleft = apples % person;
console.log("The reminder of ".concat(apples, " % ").concat(person, " =  ").concat(appleleft, ".")); // 1
