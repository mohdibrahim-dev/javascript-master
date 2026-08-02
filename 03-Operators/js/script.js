console.log("JavaScript Operators");

// what is Operator ?
// answer: An operator is a symbol that performs an operation on one or more Values(operands).


// Difference between Operand and Operator.
// eg: 1
// 10 + 20
// 10 and 20 is Operand  but + is Operator.

// eg:2
// age = 21;
// age and 21 is Operand but = is Operator.


// =====================   Arithmetic Operators  =====================    

// | Operator | Meaning             | Example  | Result |
// | -------- | ------------------- | -------- | -----: |
// |  +       | Addition            |  10 + 5  |     15 |
// |  -       | Subtraction         |  10 - 5  |      5 |
// |  *       | Multiplication      |  10 * 5  |     50 |
// |  /       | Division            |  10 / 5  |      2 |
// |  %       | Modulus (Remainder) |  10 % 3  |      1 |
// |  **      | Exponent (Power)    |  2 ** 3  |      8 |



//Arithmetic Operators   eg: 

// 1. Addition

let a = 10;
let b = 20;
console.log(a + b);             // it print 30, because it add the value of a and b.

// 2. Subtraction

let c = 20;
let d = 8;
console.log(c - d);             // it print 12 , because it subtract the c and d.

// 3. Multiplication

let price = 500;
let quantity = 3
console.log(price * quantity);      //it print 1500, because price valuse and quantity value is multiply.

// 4. Division 

let total = 100;
let students = 5;
console.log(total / students);     // it print 20, here we divide total value and students value.


// 5. Modulus (Remainder) 

// It gives the remainder after division, It can not give percentage of two number.


console.log(10 % 3);             //it print 1, because it give remainder and remainder is 1 .
// 10 ÷ 3 = 3  remainder 1

console.log(15 % 4);             //it print 3 .
// 15 ÷ 4 = 3    remainder 3  so we see remainder not Quotient .


// 6. Exponent (Power) 

// exponent is used to raise a number to a power.

console.log(2 ** 3)           // it print 8 because 2 × 2 × 2




// =================== Assignment Operator ===================

// Defination : Assignment Operators are used to assign values to variables. They can also update the value of a variable by combining an arithmetic operation with assignment.

//  Assigns the right value to the left variable. 
// eg: (x = y)


// | Operator | Meaning           | Example   |
// | -------- | ----------------- | --------- |
// |  =       | Assign            |  x = 10   |
// |  +=      | Add & Assign      |  x += 5   |
// |  -=      | Subtract & Assign |  x -= 5   |
// |  *=      | Multiply & Assign |  x *= 5   |
// |  /=      | Divide & Assign   |  x /= 5   |
// |  %=      | Modulus & Assign  |  x %= 5   |
// |  **=     | Exponent & Assign |  x **= 2  |

// 1. Assign (=) Operator

// variable = value 

let age = 21                // here we create an variable with name age and store it's value 21.

let city = "Delhi";
console.log(city);

// 2. Add & Assign (+=) Operator

// Defination:   The += operator adds a value to the current value of a variable and stores the updated result back into the same variable.

// variable += value 
// this is  equivalent to :
// variable = variable + value;

// eg: 
let marks = 80;
marks += 10
console.log("marks = ", marks)

// 3. Subtract & Assign (-=) Operator

// Defination:  The -= operator subtracts a value from the current value of a variable and stores the updated result back into the same variable.

// variable -= value;
// Equivalent to 
// variable = variable - value;

// eg:
let balance = 5000;
balance -= 1200;
console.log(balance);


// 4.  Multiply & Assign (*=) Operator

// Defination :     The *= operator multiplies the current value by another value and stores the result back into the same variable.

// eg: 
let salary = 30000;
salary *= 2;
console.log(salary);

// 5. Divide & Assign (/=)

// Defination:     The /= operator divides the current value by another value and stores the result back into the same variable.

// eg: 
let pizza = 8;
pizza /= 4;
console.log(pizza);


// 6. Modulus & Assign (%=)

// Definition:        The %= operator finds the remainder after division and stores it back into the variable.

// eg: 

let number = 17;
number %= 5;
console.log(number);

// 7. Exponent & Assign (**=)

// Definition:       The **= operator raises the current value to the specified power and stores the result back into the variable.

let value = 3;
value **= 2;
console.log(value);




// =================== Comparison Operators ===================

// use to compare two values. 

// | Operator | Meaning            | Example       |
// | -------- | ------------------ | ------------- |
// | `==`     | Loose Equal        | `10 == "10"`  |
// | `===`    | Strict Equal       | `10 === "10"` |
// | `!=`     | Loose Not Equal    | `10 != "10"`  |
// | `!==`    | Strict Not Equal   | `10 !== "10"` |
// | `>`      | Greater Than       | `20 > 10`     |
// | `<`      | Less Than          | `20 < 10`     |
// | `>=`     | Greater Than Equal | `20 >= 20`    |
// | `<=`     | Less Than Equal    | `20 <= 20`    |




// =================== Logical Operators  ===================

// Use  with Boolean values.

// | Operator | Name | Example           |
// | -------- | ---- | ----------------- |
// | `&&`     | AND  | `true && false`   |
// | `\|\|`   | OR   | `true \|\| false` |
// | `!`      | NOT  | `!true`           |


// =================== Unary Operators ===================

// work on only one operand

// | Operator | Name      | Example      |
// | -------- | --------- | ------------ |
// | `++`     | Increment | `x++`, `++x` |
// | `--`     | Decrement | `x--`, `--x` |




// ===================  Ternary Operator ===================

// | Operator | Syntax                               |
// | -------- | ------------------------------------ |
// | `? :`    | `condition ? trueValue : falseValue` |
 
// eg: /
let age11 = 20;
let result = age11 >= 18 ? "Adult" : "Minor";
console.log("Result = ", result)