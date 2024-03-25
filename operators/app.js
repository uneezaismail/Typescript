// Unary operators  (++) (--)
// (++)  (increment)
// post-increment   (The value of a variable is first used in an expression, and then incremented afterward.)
var marks = 32;
console.log(marks++); // 1st time  32 will print(original value)
console.log(marks++); // 2nd time 33 will print(incremented value)
// pre-increment   (The value of a variable is incremented first and then used in an expression. )
var num1 = 49;
console.log(++num1); //  50 will print (incremented value)
// (--)    (Decrement)
// post-decrement    (The value of a variable is first used in an expression, and then decremented afterward.)
var money = 81;
console.log(money--); // 81 will print (original value)
console.log(money--); // 80 wil print (decremented value)
// pre-decrement   (The value of a variable is decremented first and then used in an expression. )
var amount = 76;
console.log(--amount); //  will print 75(decremented value)
// Combining Operators
var equation1 = 7 + 3 * 2;
console.log(equation1); // 13 will print according to BODMAS rule
