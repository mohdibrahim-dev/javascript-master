// if...else Statement
// Definition :       The if...else statement is a conditional statement in JavaScript that executes one block of code if a condition is true, and another block of code if the condition is false.

// NOTE:if...else executes only one block of code. If the condition is true, the `if` block is executed; if the condition is false, the `else` block is executed.


// syntax : if...else Statement

// if(condition){
//     // code to execute if condition is true
// }else{
//     // code to execute if condion is false.
// }

// simple structure: 

// 1. if -> check the condition. 
// 2.  condition -> The condition that needs to be checked.
// 3. {} -> it run when condition is true.
// 4. else {} -> it run when condition is false.


        //       Condition
        //           |
        //    +------+------+
        //    |             |
        //  true          false
        //    |             |
        // if block      else block


// Q: Why Do We Need if...else?
// Ans:  We use the if...else statement when we want our program to make a decision between two possibilities based on a condition.

// 1. example : True
let age = 20;
if (age>= 18){
    console.log("You can vote")
}else{
    console.log("You cannot vote")
}
// result : You can vote

// In this example : 
// if age >=18 is ture -> You can vote . 
// if age >=18 is false -> You cannot vote.

// 2. example : False

let age2 = 15;

if(age2 >= 18){
    console.log("Adult");
}else {
    console.log("Minor")
}

// result: Minor

// Real-World Example — Login

// 1. Login form 

let isLoggedIn = false;
if (isLoggedIn){
    console.log("Welcome Back");
}else {
    console.log("Please Login")
}

// result : Please Login           because isLoggedIn is false, so the else block is executed .

// 2. Shopping

let stock = 5;
if (stock > 0){
    console.log("Product Available");
}else {
    console.log("Out of Stock")
}

// result : product Available



// 3. Payment 

let paymentSuccessful = true;
if (paymentSuccessful){
    console.log("Payment Successful");
}else {
    console.log("Payment Failed");
}




// if...else With Comparison Operators

let password = "12345";
if (password === "12345"){
    console.log("Login Successful");
}else{
    console.log("wrong Password");
}


// if...else with Logical Operators 

let ages = 25;
let hasID = true;

if(ages >= 18 && hasID){
    console.log("Entry Allowed");
}else{
    console.log("Entry Denied");
}


// Multiple Statements

let applyAge = 22;
if (age >=18){
    console.log("You are an adult.");
    console.log("You can apply.");
} else {
    console.log("You are a minor.");
    console.log("You cannot apply.")
}



// if...else vs Ternary Operator 

let isLogin = true
let result = isLogin ? "You are Login" : "You are Not Login";
console.log(result)