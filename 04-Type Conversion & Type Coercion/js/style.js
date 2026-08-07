// 1. ======================== Type Conversion ========================

// Definition : Type Conversion is the process of intentionally converting a value from one data type to another data type.

// eg: 

let age = "25";                       // this is an String. 
let numberAge = Number(age);         // `Number` is use to convert the string into number.
console.log(numberAge);              // it print the 20 as Number because we change string into NUmber.
console.log(typeof numberAge);       // it check the type of numberAge that is NUmber.


// `Type Conversion :- we can change data type by self 


//  We Have 3 types of Built-in Function that help to Convert Datatype by manually (Type Conversion).

// 1. Number();                        convert any data type into Number.
// 2. String();                         Convert any data type into Sting .
// 3. Boolean();                        Convert any data type into Boolean.


// 1. Number();

// eg: 

let birthAge = "20";                    // First This "20" is an String.
birthAge = Number(birthAge);            // convert this string into Number with help of `Number()`.
console.log(birthAge);                 // print the result here that is 20.
console.log(typeof birthAge);           // check the data type of this converted Result.


// 2. String();

// eg: 

let Age = 30;                      // first this is an Number.
Age = String(Age);                 // Convert this Number into String with help of String();.
console.log(Age);                  // Print the converted Result .
console.log(typeof Age);             // check the data type of converted result.



// 3. Boolean();

// eg: 

let value = 1;                       // first this is a Number. 
value = Boolean(value);               // change the value Number as Boolean.  
console.log(value);                    // it print the change value .
console.log(typeof value);              // check the data type of converted result.



// Note:- 
// |                                                                     Number Value | Boolean Result |
// | -------------------------------------------------------------------------------: | :------------- |
// | 0                                                                                | `false`       |
// | Any other number (`1`, `5`, `100`, `-1`, `-50`, `3.14`, `Infinity`, `-Infinity`) | `true`        |

// Only these Condition are False.

// Boolean(0);      // false
// Boolean(-0);     // false
// Boolean(NaN);    // false



// ======================== Type Coercion ========================


// Definition:   Type Coercion is the automatic conversion of a value from one data type to another by JavaScript.

// Note :-  In Type Coercion we can not Change Data type Manually , JavaScript performs conversion(Change data type) based on the operation.

// Ex:

// 1. String + Number


let ag_e = "55";                     // we assing 55 as string.
let result = ag_e + 5;               // we add String with 5 .
console.log(result);                  // it print 555, because we add strint with Number.
console.log(typeof result);             // check the data type of generated Result.


// 2. Sting - Number

let number = "15";                     // we assing an string 15.
let Result = number - 5;                // we minus string with 5.
console.log(Result);                  //print the Result.
console.log(typeof Result);            // Check the type of generated result.


// Note :-

// 1. JavaScript performs concatenation when a string is used with the  +` operator.  

// eg: 


// 2. With operators like `-`, `*`, and `/`, JavaScript generally converts the string into a number.





// Summary Table

// | Expression      | Output   | Why?                |
// | --------------- | -------- | ------------------- |
// | `"10" + 20`     | `"1020"` | `+` concatenates    |
// | `"10" - 20`     | `-10`    | String → Number     |
// | `"5" * "2"`     | `10`     | String → Number     |
// | `"20" / "5"`    | `4`      | String → Number     |
// | `"10" % 3`      | `1`      | String → Number     |
// | `true + 1`      | `2`      | `true` → `1`        |
// | `false + 1`     | `1`      | `false` → `0`       |
// | `null + 1`      | `1`      | `null` → `0`        |
// | `undefined + 1` | `NaN`    | `undefined` → `NaN` |
