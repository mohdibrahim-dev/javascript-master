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

// Defination:    Comparison Operators are used to compare two values. They always return a Boolean value (true or false).

// use to compare two values. 

// | Operator | Meaning            | Example       |
// | -------- | ------------------ | ------------- |
// |  ==      | Loose Equal        |  10 == "10"   |
// |  ===     | Strict Equal       |  10 === "10"  |
// |  !=      | Loose Not Equal    |  10 != "10"   |
// |  !==     | Strict Not Equal   |  10 !== "10"  |
// |  >       | Greater Than       |  20 > 10      |
// |  <       | Less Than          |  20 < 10      |
// |  >=      | Greater Than Equal |  20 >= 20     |
// |  <=      | Less Than Equal    |  20 <= 20     |


// 1. Loose Equal (==)

// Definition:       The == operator compares two values after performing type conversion if necessary.
//  Checks if the values are equal (allows type conversion).


// eg:
console.log(10 == 10);                         // it return true, both are number here.

console.log("10" == 10);             // it return true, because here "10" is string and 10 is number but JavaScript automatically converts "10" in to 10.


// 2. Strict Equal (===)

// Definition:   The === operator compares both the value and the data type.

// Checks if both the value and data type are equal

// eg:

console.log(10 === 10);                        // it return True because here both are same data tpe and value.

console.log("10" === 10);                     // it return False because here "10" is string and 10 is number so it dose't match the data type here.


// 3. Loose Not Equal (!=)

// Definition:    The != operator checks whether two values are not equal after performing type conversion.

// Checks if the values are not equal (allows type conversion)

// eg: 
console.log(10 != 20);                       // it return true . both are number here.
console.log("10" != 10);                     // it return False because , javascript change the data type string to number and both number are same so it return false.


// 4. Strict Not Equal (!==)

// Definition:   The !== operator checks both value and data type.

// Checks if the value or data type is different

// eg:

console.log("10" !== 10);                      // it return True because it also check data type and value . so data type is not same here.


// 5. Greater Than (>)

// Checks if the left value is greater than the right value

console.log(20 > 10);                           // it return True because 20 is grater than 10.


// 6. Less than (<)

// Checks if the left value is less than the right value

console.log(5 < 2);                             // it return False because 5 is not less than 2.


// 7. Greater Than or Equal (>=)

// Checks if the left value is greater than or equal to the right value

console.log(18 >= 18);                         // it return True because 18 is Greater Than or Equal to 18.


// 8. Less Than or Equal (<=)

// Checks if the left value is less than or equal to the right value

console.log(10 <= 15);                          // it return true because 10 is Less Than or Equal to 15.




// =================== Logical Operators  ===================

// Logical Operators are used to combine or reverse Boolean expressions. They always return a Boolean value (true or false) when used with comparison expressions.

// Use  with Boolean values.

// | Operator | Name | Example           |
// | -------- | ---- | ----------------- |
// |  &&      | AND  |  true && false    |
// |  ||      | OR   |  true || false    |
// |  !       | NOT  |  !true            |

// 1. Logical AND (&&)

// Definition:    The Logical AND (&&) operator returns true only if all conditions are true. Otherwise, it returns false.

// Logical AND (&&) TRUTH TABLE

// | Condition 1 | Condition 2 | Result |
// | ----------- | ----------- | ------ |
// | true        | true        | true   |
// | true        | false       | false  |
// | false       | true        | false  |
// | false       | false       | false  |

// eg: 
console.log(true && true);                   // it return True , because both are True.
console.log(true && false);                 // it return False , because one condition is true.

// Real project Example 
let emailCorrect= true;
let passwordCorrect = true;
console.log(emailCorrect && passwordCorrect);              // it return True , because both email and password is true.


// 2. Logical OR (||)

// Definition:   The Logical OR (||) operator returns true if at least one condition is true. It returns false only when all conditions are false.

// Logical OR Truth Table 

// | Condition 1 | Condition 2 | Result |
// | ----------- | ----------- | ------ |
// | true        | true        | true   |
// | true        | false       | true   |
// | false       | true        | true   |
// | false       | false       | false  |

// Real project Example 
let emailVerified = false; 
let phoneVerified = true;
console .log(emailVerified || phoneVerified);                          //  Checks whether the user has verified either their email or phone number.


// 3. Logical NOT (!)

// Definition:     The Logical NOT (!) operator reverses a Boolean value.

// Logical NOT Truth table 

// | Original | Result |
// | -------- | ------ |
// | true     | false  |
// | false    | true   |

// eg:
console.log(!true);                          // it print False becaue Logical NOt reverse the result.
console.log(!false);                         // it print True.


// Real project Example

let isLogfedIn = false;
console.log(!isLogfedIn);                   // it print True . we use to check is user is login in or not, if user is login then show logout button or if user is logout then show login button/page/




// =================== Unary Operators ===================

// work on only one operand

// | Operator | Name      | Example      |
// | -------- | --------- | ------------ |
// |  ++      | Increment |  x++ ,  ++x  |
// |  --      | Decrement |  x-- ,  --x  |




// ===================  Ternary Operator ===================

// | Operator | Syntax                               |
// | -------- | ------------------------------------ |
// |  ? :     |  condition ? trueValue : falseValue  |
 
// eg: /
let age11 = 18;
let result = age11 >= 18 ? "Adult" : "Minor";
console.log("Result = ", result);

// can you learn read it fast and aproprite and meke it.

