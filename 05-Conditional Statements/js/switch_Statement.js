// switch Statement

// Definition:
// The switch statement is a conditional statement in JavaScript that is used to execute one block of code from multiple possible blocks based on the value of an expression.


// ** Note **: switch is strict comparision === so it can not convert string into number and number to string.


// syntax

// switch(expression){
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     case value3:
//         // code
//         break;
//     default:
//         // code
// }

// syntax breakdown :

// 1. switch ----------- it start Conditional statement.
//2.  expression ----------- Whose value needs to be checked.
// 3. case ----------------  possible value.
// 4. break ----------------- stop the switch.
// 5. default --------------- When no case matches.

//  example:
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


// Q1. What is case in switch statements?

// ans :  A case defines a posible value that is compared with the switch expression.

// Q2. what is break in switch statements?

// The break statement terminates the switch statement and revents the execution of the remaining.


// Q3. What is Fall-Through?

// ans: Fall-through occurs when JavaScript continues executing the next cases after a matching case because there is no break statement.

// eg:
let number = 1;
switch (number) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}

// Q4. What is default Case?
// ans: The default case executed when none of the spedified cases matches the switch expression.


// Multiple Case with Same Code.


let weekdays = "Sa turday";
switch (weekdays) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
    console.log("Working day");
    break;
  default:
    console.log("Invalid days");
}

// Real world Example 

// 1. User Role 

let role = "editor";
switch (role) {
  case "admin":
    console.log("You can manage users.");
    break;
  case "editor":
    console.log("You can edit content.");
    break;

  case "user":
    console.log("You can view content.");
    break;
  default:
    console.log("Access denied.")
}

// 2. Menu Selection

let choice = 2;
switch (choice) {
  case 1:
    console.log("Pizza selected");
    break;
  case 2:
    console.log("Burger selected");
    break;
  default:
    console.log("invalid choice");
}


console.log("day4")

let day4 = "Sunday";

switch (day4) {
case "Saturday":
case "Sunday":
console.log("Weekend");
break;

case "Monday":
case "Tuesday":
case "Wednesday":
case "Thrusday":
case "Friday":
console.log("Weekday");
default: 
console.log("Invalid day4")
}