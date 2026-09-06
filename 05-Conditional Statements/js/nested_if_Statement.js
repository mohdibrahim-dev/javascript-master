// Nested if Statement

// Definaiton:    Nested if Statement is an if statement placed inside another if statement. The inner if is checked only when the outer if condition is true.

// syntax :

// if (condition1){
//     if (conditions2){
//         // code
//     }
// }


// Q.   Why Do We Need Nested if?

// ans :  We use Nested if when we need to check a second condition only after the first condition is true.

// eg:
let age = 20;
let hasLicense = true;
if (age >= 18) {
    if (hasLicense) {
        console.log("You can Drive.")
    }
}


// Here: 

// 1. Frist, JavaScript checks age >= 18.
// 2. if is true, then it checks hasLicense.
// 3.  if both are true, the message is printed.


// Is the person 18 or older?
//         ↓
//      YES, True
//         ↓
// Does the person have a license?
//         ↓
//      YES, True
//         ↓
//     Can drive


// Q.  What If Outer Conditions is False?

// ans:  So JavaScript Never Checks the inner if.


// Nested if...else 

let ag_e = 25;
let has_License = false;

if (ag_e >= 18) {
    if (has_License) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }
} else {
    console.log("You are underage")
}



// some Real-world Examples

// 1. Shopping 

let stock = 5;
let balance = 2000;
let price = 1500;

if (stock > 0){
    if (balance >= price){
        console.log("Purchase Successful");
    }
}

// 2.  Online Exam 

let isRegistered = true;
let attendence = 80;
if (isRegistered){
    if (attendence >= 75){
        console.log("You can take the exam")
    }
}



// Nested if vs &&

// nested version 
let age2 = 32;

if(age2 > 18){
    if (hasLicense){
        console.log("You can drive")
    }
}

if (age2 >= 18 && hasLicense){
    console.log("You can drive")
}


// Nested if with else if 

let age3 = 25;
let hasLicense1 = true;

if (age3 >= 18){
    if(hasLicense1){
        console.log("You can drive");
    }else{
        console.log("Get a license First");
    }
}else if(age3 >= 16){
    console.log("YOu are not old enough")
}else{
    console.log("You are underage");
}