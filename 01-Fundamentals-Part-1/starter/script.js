/* let js = 'amazing';
console.log(40 + 8 + 23 -10);

console.log('Carol');
console.log(30);

let firstName = 'Carolina';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let funct$ion = 27; //the dollar sign is allowed as special character in variable names
let cat = 'KitKat';
let oldestPet = cat;
//Camel Case

let PI = 3.1415; 
//all uppercase variable names are reserved for constants;

let job1 = 'teacher';
let job2 = 'programmer';

let myFirstJob = 'teacher';
let myCurrentJob = 'coder';
//clean code: to make sure variable names are descriptive, making it easy to understand what the value holds by simply looking at the names

//Assignment JavaScript Fundamentals Part 1 - LECTURE: Values and Variables

// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

const country = 'Brasil';
const continent = 'América';
const population = 214;

// 2. Log their values to the console
console.log(country);
console.log(continent);
console.log(population);

let jsIsFun = true;
console.log(jsIsFun); //it is the VALUE that stores the data type, and NOT the variable name (JavaScrit has dynamic typing)
// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 25);
//console.log(typeof 'Kit');
jsIsFun = 'Yes!' // As it was declared as a let variable, it can be reassigned 
console.log(typeof jsIsFun);
let year; //declared an empty variable, without value
console.log(typeof year); //type is undefined - there's no value assigned


// Assignment JavaScript Fundamentals Part 1 - LECTURE: Data Types

// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
const country = 'Brasil';
const continent = 'América';
const population = 214;

let isIsland = false;
let language;

//2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*variables that need reassignment at some point should be declared as let so it can be mutated when necessary - Most common use? we would want to declare variables at the top of a function, before calculating or assigning actual values;
We use const to declare values that won't mutate in any case, such as birthYear!
We CANNOT declare empty cont variables - mandatory immutable value.
var is the old-fashioned way to declare variables - prior to ES6.Just like let we can reassign value, but var is function scoped, while let is block scoped.
  

let age = 30;
age = 31;
const birthYear = 1991;

// Assignment JavaScript Fundamentals Part 1 - LECTURE: let, const and var 
1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
let language;
language = 'Portuguese';

2.	Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3.	Try to change one of the changed variables now, and observe what happens.

const country = 'Brazil';
const continent = 'America';
let population = 214;
const isIsland = false;
*/


