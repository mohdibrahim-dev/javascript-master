// else if Statements

// Defination:   The else if statement is used to check another condition when the previous if condition is false.

// Syntax :

// if(condition1){
//     // code to execute
// } else if (condition2){
//     // code to execute
// }else if (condition3){
//     // code to execute
// }else{
//     // code to execute
// }

// example:

let marks = 75;

if (marks >= 90) {
  //The first condition check the marks is >= 90 if yes then print Grade A, it this condition is false then it goes to 2nd conditon.
  console.log("Grade A");
} else if (marks >= 70) {
  // when 1st condition is false it come to second condition it it is true then it print Grade B. it it is fasle then it goes to else block.
  console.log("Grade B");
} else {
  // when all condition is fasle it run else block of code.
  console.log("Fail");
}

// ========================= Conditionl Statement Rules =========================
// ** Note **

// 1.  Top-to-Bottom Checking
// JavaScript checks the conditions from top to bottom, starting with if.

// 2.  Only One Block Executes
// Only the block of the first true condition is executed.

// 3.  Condition Order Matters
// The order of conditions matters because JavaScript stops checking after finding the first true condition.

// 4.  Multiple else if Allowed
// You can use multiple else if statements between if and else.

// 5.  First True Condition Stops Further Checking
// Once a condition is true, JavaScript executes its block and skips all remaining conditions.

// Multiple else if

let marks_percentage = 82;

if (marks_percentage >= 90) {
  conlole.log("Grade A");
} else if (marks_percentage >= 80) {
  console.log("Grade  B");
} else if (marks_percentage >= 70) {
  console.log("Grade C");
} else if (marks_percentage >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}



// ======================= Real World Examples =======================

// 1.  Delivery Charge

let amount = 2500;

if (amount >= 3000){
    console.log("Free Delivery");
}else if (amount >= 2000) {
    console.log("Delivery Charge: ₹50");
} else if (amount >= 1000) {
    console.log("Delivery Charge: ₹100");
} else {
    console.log("Delivery Charge: ₹150");
}


// 2.  Age Category

let age = 16;

if (age < 13){
    conlole.log("Child")
} else if (age < 18){
    console.log("Teenager")
}else {
    console.log("Adult")
}


// 3.   Temperature

let temperature = 35;

if (temperature >= 40) {
    console.log("Extremely Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Normal");
} else {
    console.log("Cold");
}



// else if With Logical Operators 

let UserName = "abcd@123";
let hasID = true;
UserName
if (UserName === "abcd@123" && hasID) {
    console.log("Entry Allowed");
} else if (UserName === "abcd@123" && !hasID) {
    console.log("ID Required");
} else {
    console.log("Please check the UserName and Password");
}






