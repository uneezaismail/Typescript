// OPPERATORS 

// ADDITION  
let number1 : number = 7;
let number2 : number = 8;
let sum : number = number1 + number2;
console.log(`The sum of ${number1} + ${number2} = ${sum}`);    // 15



// NOTE :    (In addition operator string remains a string in the final result and can also change the number into string)

// while adding string and number: 
// num + num = num                  result will be a number
// num + Str = str                  result will be a string
// str + num = str                  result will be a string
// str + str = str                  result will be a string
// num + num + str = str            result will be a string    but the first two numbers will add and then they will change into a string.
// str + num + num = str            result will be a string
// num + str + num = str            result will be a string

let code1 = 4
let code2 = "2";
console.log(code1 + code2);       // this will print 42   , 4 is the number and 2 is the string.



// NOTE  (In all other operators except addition string can not do operations with a number. It will throw ERROR)

// SUBTRACTION
let number3: number = 9;
let number4: number = 5;
let Difference: number = number3 - number4;
console.log(`The Difference of ${number3} - ${number4} = ${Difference}`);   // 14


// let a = 4
// let c = "2";
// console.log(code2 - code1);     // This will throw error cuz str can not subtract from a num.



// MULTIPLICATION
let number5: number = 3;
let number6: number = 7;
let product: number = number5 * number6;
console.log(` The Product of ${number5} * ${number6} =  ${product}`);   // 21



// DIVISION
let number7: number = 80;
let number8: number = 10;
let Result: number = number7 / number8;
console.log(`The Quotient of ${number7} / ${number8} = ${Result}`);    // 8


// Exponentiation
let square: number = 4;
let side: number = 4;
let totalSides:number = square ** side
console.log(`The result of ${square} ** ${side} =  ${totalSides}`);    // 256


// Modules
let apples: number = 31;
let person: number = 5;
let appleleft: number = apples % person;
console.log(`The reminder of ${apples} % ${person} =  ${appleleft}.`);    // 1









