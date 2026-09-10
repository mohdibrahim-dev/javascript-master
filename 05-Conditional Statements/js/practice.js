// Round 1 - Logic Building

// Q1: Age Check
let age = 13;

if (age <= 13) {
    console.log("Child");
} else if (age <= 17) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Q2: Login Validation

let email = "user@gmail.com";
let password = "12345";

if (email === "user@gmail.com" && password === "12345") {
    console.log("Login Successful");
} else if (email === "user@gmail.com" || password !== "12345") {
    console.log("Wrong Password");
} else {
    console.log("User Not Found");
}

// Q3: ATM Withdrawal

let balance = 5000;
let withdrawAmount = 3000;
let pinCorrect = true;

if (withdrawAmount <= 5000 && !pinCorrect) {
    console.log("Incorrect PIN");
} else if (pinCorrect && withdrawAmount > 5000) {
    console.log("Insufficient Balance");
} else {
    console.log("withdrawal Successful");
}

// Q4: Shopping Discount

let amount = 3000;
let isPremium = true;

if (isPremium && amount >= 3000) {
    console.log("20% Discount");
} else if (isPremium && amount <= 3000) {
    console.log("10% Discout");
} else if (!isPremium && amount >= 3000) {
    console.log("5% Discount");
} else {
    console.log("No Discount");
}

// Q5: Traffic Signal

let signal = "yellow";

if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Slow Down");
} else if (signal === "green") {
    console.log("Go");
} else {
    console.log("Invalid Signal");
}

// Round 2 - Developer Thinking

// Q6:

let age1 = 20;
let hasLicense = false;

if (age1 >= 18 && hasLicense) {
    console.log("You can Drive.");
} else {
    console.log("You can not drive.");
}

// 6.1: Condition identify karni hai.

// ans: as we have requirement that the driver is above 18 years old and have valid license. so here we use simly if...else statement because we just identifie that is driver is 18 years old and have valid license then they drive the vichle , if not we say you can not drive.

// sumary : we have only 2 condition.
// 1. his age is >= 18 and has license ------- you can Drive.
// 2. if he is less than 18 or if it is greater then 18 but no licence then ----------- you can not drive.

// 6.2 : Operator choose krna hai.

// ans: here we use && operator because it check both condition is true or not if true then it return true, if one conditon is true or one is false it return false. if both is false then it return false.

// 6.3 : Output decide krna hai.

// ans here we hai only 2 output because the Requirement is: A person can drive only if they are 18 or older and have a valid license.

// 6.4 : Explain karna hai ki || kyun nahi use karna cahiye.

// ans: || Or operator is not use because or operator can show if only one condition is true.

// Q7.
// 7.1  by if...else if Statement

let role = "editor";

if (role === "admin") {
    console.log("Full Access");
} else if (role === "editor") {
    console.log("Edit Content");
} else if (role === "user") {
    console.log("View Content");
} else if (role === "guest") {
    console.log("Please Login");
}
// 7.2 by switch statement

switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "editor":
        console.log("Edit Content");
        break;
    case "user":
        console.log("View content");
        break;
    case "guest":
        console.log("Please Login");
        break;
}

// we use both switch and if...else if statement but I give the priority to if...else if statement .

// Q8.

// the code retrun B .
// this code not run after B because javascript code run line by line or in if...else if when one condtion can get true then code executatin can get ended there.

// Mini Project 1 - Login & Access Control

let Email = "user123@gmail.com";
let Password = "User@123";
let Role = "admin";
let isAccontActive = true;
let isEmailVerified = true;

if (isAccontActive) {
    if (isAccontActive && !isEmailVerified) {
        console.log("Please Verify Your Email");
    } else if (Email !== "user123@gmail.com" && Password !== "User@123") {
        console.log("Invalid Email or Password");
    } else if (Role === "admin") {
        console.log("Admin Dashboard");
    } else if (Role === "editor") {
        console.log("Editor Dashboard");
    } else if (Role === "user") {
        console.log("User Dashboard");
    } else {
        console.log("Access Denied");
    }
}else{
    console.log("Account is Disabled")
}

// Mini Project 2 — Shopping Checkout

let isLoggedIn = true;
let cartItems = 3;
let cartTotal = 4000;
let stockAvailable = true;
let IsPremium = true;
let paymentSuccessful = true;

if (isLoggedIn) {
    if (cartItems <= 0) {
        console.log("Cart is Empty");
    } 
    else if (!stockAvailable) {
        console.log("Product Out of Stock");
    } 
    else if (IsPremium && cartTotal >= 3000) {
        console.log("20% Discount");
    } 
    else if (IsPremium && cartTotal <= 3000) {
        console.log("10% Discount");
    } 
    else if (IsPremium && cartTotal >= 3000) {
        console.log("Free Delivery");
    } 
    else if (IsPremium && cartTotal <= 3000) {
        console.log("Delivery Charges Apply");
    } 
    else if (paymentSuccessful) {
        console.log("Order Placed Successfully");
    } 
    else if (!paymentSuccessful) {
        console.log("Payment Failed");
    }
}else{
    console.log("Please Login")
}
