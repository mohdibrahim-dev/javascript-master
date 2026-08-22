// if Statement 

// Defination:  The if statement is used to execute a block of code only when a specified condition is true.

// syntax of if Statement 

// if (condition){
//     // code to execute
// }


// if 
// javascript Researved keyword that check the condion .
// condition 
// this is an expression that retrun True or false.
// {}
// in this curly braces the code if run when condition is true.

// eg: 

let age = 20;
if(age >= 18){
    console.log("You are eligible to vote.");
}

// Code explane:
//  let age = 20;                  we assign an variable with name age and store it's value 20.
// if  is an javascript Reserved keyword that check condition.
// (age >= 18) this is an condion, if condion is true then run the code , if condition is false it code done not run.



// some example:

// 1. if statement with Number
let marks = 80;
if (marks >= 40) {
    console.log("You passed.")
}
// 2. if statement with String
let userName = "Ali";
if (userName === "Ali"){
    console.log("Welcome Ali!");
}

// 3. if statement with Boolean

let isLoggedIn = true;
if (isLoggedIn){
    console.log("Welcome to the Website.");
}

// 4. Multiple statements inside if

let drivingAge = 20;
if (drivingAge >= 18) {
    console.log("You are an adult.");
    console.log("You can vote.");
    console.log("You can apply for a driving license.")
}



// Real world Examples 

// 1. Login 

let isLogged_In = true;
if(isLogged_In){
    console.log("Welcome Back");
}

// ATM 

let balance = 5000;
if (balance >= 1000){
    console.log("Withdrawal Allowed")
}




