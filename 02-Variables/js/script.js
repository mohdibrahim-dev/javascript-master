// defination :- A variable is a named container use to store data in memory.
// eg:- let age = 21;                            here Variable name -> age                    stored value -> 21


// Declaration 
// let age;                       here we not store any value just create an box with name age . we store value later.

// Devination :- Declaration means creating a variable.


// Initializaton 

// let age = 21;                     here we create an box and store its value = 21 now i create an box and put some value in it.

// Definition :- Initialization means assigning the first value to a variable.

// we also declare like this 
// let name;
//name = "Ibrahim";

// here in first line we crate an box and then stor value in another line.


let name = "Mohd Ibraihim";
console.log(name);                  //it show Mohd Ibrahim in console.

let age1;
console.log(age1);                   //it show undefined because we can not assing any age int this variable.


let city;
city= "Delhi";
console.log(city);                  //Declaration happened first in first line and Initialization happened later in second line.



//================== JavaScript has rules for naming variables.  =================

// Rule 1 – Variable names can contain:

// Letters (a-z, A-Z)
// Numbers (0-9)
// Underscore (_)
// Dollar Sign ($)

// Eg: 
 let age = 21;

 let fullName = "Ibrahim";

 let user1 = "Ali";

 let _price = 500;

 let $salary = 30000;

//  Rule 2 – Variable names cannot start with a number.
// eg: let 1name = "Ibrahim"   // wrong way.

let name1 = "Ibrahim"   // correct way to use number.

// Rule 3 – Spaces are not allowed.
// eg: let full name = "Ibrahim"      // wrong way. 
let fullName2 = "Ibrahim";          // correct way.
let full_name = "Ibrahim";                    //  correct way.


// Rule 4 – Reserved Keywords cannot be used.

// eg: let let = 10;
// let const = 20;
// let console = "Ibrahim";
// let function = "Hello";

// Some Reserved Keywords
// let
// const
// var
// if
// else
// function
// return
// class
// for
// while
// switch


// Naming Conventions
// These are not rules. These are conventions.

// 1.  camelCase  (Most Common)

// eg:
// let firstName;
// let lastName;
// let totalPrice;
// let isLoggedIn;

// This is the JavaScript standard  Use it everywhere.

// 2. snake_case
// eg: let first_name;


// 3. PascalCase
// eg:
// let StudentName;

// Usually used for Classes and React Components.


// ======================== Variables ========================

// 1. var

// eg: 
var age2 = 21;
// Q can we change it later ?  
// answr: yes
// eg:
var age2 = 21;
age = 22;
console.log(age2);                           // it print 22 . so it can be change later.

// Can we declare it again?
// answer : yes
// eg:
var age3 = 21;
var age5 = 50;
// it dose't show any error but iy Causes bugs.(Note:- NOT RECOMMENDED METHOD)


// 2. let


let Name = "Mohd Ibrahim";
// Q. can we change it? 
// answer : yes
// eg:
let studentName = "Shivam";
studentName = "Rahul";
console.log(studentName);                 // it print the changed name now studentName = Rahul.  

// Q. Can we declare it again?
// answer : No!  Because let does not allow redeclaration in the same scope.



// 3. const

const agee = 22;
// Q. can we change it ?
// answer: No! it show error.
// Q. can we redeclare it?
// answer: No .

// NOTE:-- A const variable must have a value when it is created.

