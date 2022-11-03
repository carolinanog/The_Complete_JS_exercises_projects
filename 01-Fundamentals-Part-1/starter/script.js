/*
LECTURE: Values and Variables

let js = 'amazing';
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
clean code: to make sure variable names are descriptive, making it easy to understand what the value holds by simply looking at the names

Assignment JavaScript Fundamentals Part 1 - LECTURE: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

const country = 'Brasil';
const continent = 'América';
const population = 214;

// 2. Log their values to the console
console.log(country);
console.log(continent);
console.log(population);

LECTURE: Data Types 

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


Assignment JavaScript Fundamentals Part 1 - LECTURE: Data Types

 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
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

LECTURE: let, const and var

variables that need reassignment at some point should be declared as let so it can be mutated when necessary - Most common use? we would want to declare variables at the top of a function, before calculating or assigning actual values;
We use const to declare values that won't mutate in any case, such as birthYear!
We CANNOT declare empty cont variables - mandatory immutable value.
var is the old-fashioned way to declare variables - prior to ES6.Just like let we can reassign value, but var is function scoped, while let is block scoped.
  

let age = 30;
age = 31;
const birthYear = 1991;

Assignment JavaScript Fundamentals Part 1 - LECTURE: let, const and var 
1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
let language;
language = 'Portuguese';

2.	Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3.	Try to change one of the changed variables now, and observe what happens.

const country = 'Brazil';
const continent = 'America';
let population = 214;
const isIsland = false;


// LECTURE: Basic Operators
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas*2, ageJonas / 10, 2**3);

const firstName = 'Carol';
const lastName = 'KitKat';
console.log(firstName + ' ' + lastName);
//Assignment Operators (= assignment)
let x = 10 + 5;
console.log(x);
//(+=)
x += 10; //x = x +10
console.log(x) // 25
//(*=)
x *= 4; //x = x * 4
console.log(x) // 100
//(/=)
x /= 2; //x = x / 2
console.log(x) // 50
//(++)
x++; //x++ = x + 1
console.log(x) // 51
//(++)
x--; //x-- = x - 1
console.log(x) // 50

//Comparison operators (>, <, >=, <= )
console.log(ageJonas > ageSarah) // Boolean = true
console.log(ageSarah > ageJonas) // Boolean = false
console.log(ageSarah >= 18) // false - Sarah is 17. Store the values in variables, e.g.:
const isAdult = ageSarah >= 18;
console.log(isAdult);

Assignment JavaScript Fundamentals Part 1 - LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
const country = 'Brazil';
const continent = 'America';
let brazilPopulation = 214;
const language = 'portuguese';

let halfPopulation = brazilPopulation / 2;
console.log(halfPopulation);

2. Increase the population of your country by 1 and log the result to the console
brazilPopulation++;
console.log(brazilPopulation);
3. Finland has a population of 6 million. Does your country have more people than
Finland?
let finlandPopulation = 6;

console.log(brazilPopulation > finlandPopulation);

4. The average population of a country is 33 million people. Does your country have less people than the average country?

let averagePop = 33;
console.log(brazilPopulation < averagePop)

5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

const description = country + ' is in ' + continent + ', and its  ' + brazilPopulation + '  million people speak ' + language + "."
console.log(description);


LECTURE: Operator precedence
H
Math operators: left-to-right: exponentiation; multiplication; division; remainder; addition; subtraction - then
less than; less than or equal; greater than; greater than or equal - then
= assignment ****Assigment is right-to-left

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables

const markHeight1 = 1.69;
const markMass1 = 78;
const johnHeight1 = 1.95;
const johnMass1 = 92;

const markHeight2 = 1.88;
const markMass2 = 95;
const johnHeight2 = 1.76;
const johnMass2 = 85;

2. Calculate both their BMIs using the formula (you can even implement both
versions)
const markBMI1 = markMass1/ markHeight1 **2;
console.log(markBMI1); 

const johnBMI1 = johnMass1 / johnHeight1 **2;
console.log(johnBMI1);

const johnBMI2 = johnMass2 / johnHeight2 **2;
console.log(johnBMI2);

const markBMI2 = markMass2/ markHeight2 **2;
console.log(markBMI2);

OR 

function calculateBMI(mass, height) {
    let bmi;
    bmi = mass / height **2
    return `This person's BMI is ${bmi}.`
};
const markBMI1 = calculateBMI(markMass1, markHeight1);
console.log(markBMI1);

const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
console.log(johnBMI1);

const markBMI2 = calculateBMI(markMass2, markHeight2);
console.log(markBMI2);

const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
console.log(johnBMI2);

3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1)
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);


LECTURE: Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = 'I\'m ' + firstName + ', a ' + (year-birthYear) + ' year-old ' + job + '!';
console.log(jonas) 

const jonasTemplateLiteral = `I'm ${firstName}, a ${year-birthYear}-year-old ${job}!`;
console.log(jonasTemplateLiteral);
console.log(`Regular string example!`);

console.log('String with \n multiple \n lines!') //  \n breaks lines

console.log(`It isn't
NECESSARY
to break lines using \\n
with template
literals,
just simply
return lines!`);

Assignment JavaScript Fundamentals Part 1 - LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const country = 'Brazil';
const continent = 'America';
let brazilPopulation = 214;
const language = 'portuguese';

const description = country + ' is in ' + continent + ', and its  ' + brazilPopulation + '  million people speak ' + language + "."
console.log(description);

const modernCleanerDescription = `${country} is in ${continent}, and its ${brazilPopulation} million people speak ${language}.`;
console.log(modernCleanerDescription);


LECTURE: Taking Decisions: if / else Statements

const age = 15;

//If-Statement
if (age >= 18) {
    console.log(`This person is old enough to drive, as he/she is ${age}.`);
} else {
    const yearsLeft = 18-age;
    console.log(`This person will be able to drive in ${yearsLeft} year(s), as he/she is ${age}.`);
};

const birthYear = 1999;
let century;

if (birthYear <= 2000) {
    century = `This person was born in the 20th century`;
} else {
    century = `This person was born in the 21st century`;
};
console.log(century);

// Assignment JavaScript Fundamentals Part 1 - LECTURE: Taking Decisions: if / else Statements

//const language = 'portuguese';
//const continent = 'America';
const country = 'Brazil';
let brazilPopulation = 214;
let averagePop = 33;

if (brazilPopulation > averagePop) {
    console.log(`${country}'s population is of ${brazilPopulation - averagePop} million people above the average.`);
} else {
    console.log(`${country}'s population is of ${averagePop - brazilPopulation} million people below the average.`);
};

1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

const markHeight1 = 1.69;
const markMass1 = 78;
const johnHeight1 = 1.95;
const johnMass1 = 92;

const markHeight2 = 1.88;
const markMass2 = 95;
const johnHeight2 = 1.76;
const johnMass2 = 85;

function calculateBMI(mass, height) {
    let bmi;
    bmi = (mass / height **2).toFixed(2);
    return `${bmi}`
};
const markBMI1 = calculateBMI(markMass1, markHeight1);
console.log(markBMI1);

const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
console.log(johnBMI1);

const markBMI2 = calculateBMI(markMass2, markHeight2);
console.log(markBMI2);

const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
console.log(johnBMI2);

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
// GOOD LUCK 😀

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is ${markBMI2}, greater than John's, at ${johnBMI2}`);
} else if (markBMI2 < johnBMI2) {    console.log(`Mark's BMI is ${markBMI2}, less than John's, at ${johnBMI2}.`);
} else {
    console.log(`Mark and John's BMI are the same!`);
};


// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// LECTURE: Type Conversion and Coercion


// Assignment JavaScript Fundamentals Part 1 - LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

//LECTURE: Equality Operators: == vs. ===

// Assignment JavaScript Fundamentals Part 1 - LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

//LECTURE: Logical Operators

// Assignment JavaScript Fundamentals Part 1 - LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)


// LECTURE: The switch Statement 

// Assignment JavaScript Fundamentals Part 1 - LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

// LECTURE: The Conditional (Ternary) Operator

// Assignment JavaScript Fundamentals Part 1 - LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
