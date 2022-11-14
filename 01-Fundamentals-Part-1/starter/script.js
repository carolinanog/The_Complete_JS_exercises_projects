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

const markBMI1 = markMas12/ markHeight2 **2;
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


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

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

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI is ${markBMI1}, greater than John's, at ${johnBMI1}`);
} else if (markBMI1 < johnBMI1) {    
    console.log(`Mark's BMI is ${markBMI1}, lower than John's, at ${johnBMI1}.`);
} else {
    console.log(`Mark and John's BMI are the same!`);
};

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

LECTURE: Type Conversion and Coercion

//Type Conversion - when we manually convert to one type to another
const num1 = '1991';
console.log(Number(num1), num1);
console.log(num1 + 18);

const num2 = 1991;
console.log(num2 + 18);
console.log(Number('KitKat')); // NaN - not a number is of type number, but an invalid one
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion - JS automatically coerces values whenever it is dealing with two values that are of different types. JS will - behind the scenes - convert one value to match the other value

console.log('I am ' + 36 + ' years old.' ); // the plus operator triggers a coercion of the number 36 to a string / This also happens with template literals 
console.log('23' - '10' - 3); // JS converted the strings to numbers to do subtraction operations
console.log('23' + '10' + 3); // JS concatenates the strings - and coerces the number to a string - when dealing with additions
console.log('23' * '2', '23' / '2'); // JS converted the strings to numbers to multiply and to divide

let n = '1' + 1; //11 as in addition it will coerce to string and concatenate
n = n - 1; //10 as in subtration it will coerce to number and concatenate
console.log(n);

let z = 2 + 3 + 4 + '5'; //actual addition of 2 + 3 + 4 = 9  and then the 9 concatenates with 5, resulting in 95
console.log(z)

let y = '10' - '4' - '3' - 2 +'5'; // subtraction of 10 - 4 - 3 = 3, then -2 = 1 + '5' will concatenate with 5, resulting in 15
console.log(y);


// Assignment JavaScript Fundamentals Part 1 - LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; //4
// '19' - '13' + '17'; //617
// '19' - '13' + 17; // 23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 11 + 4 = 114 + 9 = 1149 - 4 = 1145 - 2 = 1143
// 2. Execute the operations to check if you were right
console.log('9' - '5'); 
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//LECTURE: Equality Operators: == vs. ===

const favNum = Number(prompt('What´s your favorite number?'));
console.log(favNum);
console.log(typeof favNum);

if (favNum === 23) {
    console.log('23 is cool!');
} else if(favNum === 5) {
    console.log('5 is also great!');
} else {
    console.log('Number is neither 23 nor 5!');
};

if (favNum !== 23) console.log('why not 23?');


// Assignment JavaScript Fundamentals Part 1 - LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
const numNeighbours = Number(prompt('How many neighbor countries does Brazil have?'));

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)

if (numNeighbours === 1) {
    console.log(`Only 1 bordering country!`);
} else if (numNeighbours > 1) {
    console.log(`This country has ${numNeighbours} neighboring countries!`)
} else {
    console.log('No neighbors!')
}
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

//LECTURE: Logical Operators

// Assignment JavaScript Fundamentals Part 1 - LECTURE: Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive!');
};

// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
const country = 'Brazil';
const continent = 'America';
let brazilPopulation = 214;
const language = 'portuguese';
const isIsland = false;
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('

if (language === 'english' && brazilPopulation < 50 && !isIsland) {
    console.log('Sarah should live in Brazil!')
} else {
    console.log('Brazil is not the right country for Sarah to move to right now!')
}

// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

const avgDolphins1 = (96 + 108 + 89)/3;
const avgKoalas1 = (88 + 91 + 110)/3;

const avgDolphins2 = (97 + 112 + 101)/3;
const avgKoalas2 = (109 + 95 + 106)/3


console.log(avgDolphins1);
console.log(avgKoalas1);
console.log(avgDolphins2);
console.log(avgKoalas2);

if (avgDolphins1 > 100 && avgDolphins1 > avgKoalas1) {
    console.log(`The Dolphins won the championship with an average score of ${avgDolphins1.toFixed(2)}!`);
} else if (avgKoalas1 > 100 && avgKoalas1 > avgDolphins1) {
    console.log(`The Koalas won the championship with an average score of ${avgKoalas1.toFixed(2)}!`);
} else if (avgDolphins1 === avgKoalas1) {
    console.log(`It's a draw!`)
} else {
    console.log(`Neither of the teams reached the minimun score to win the championship.`);
}


// LECTURE: The switch Statement 



Assignment JavaScript Fundamentals Part 1 - LECTURE: The switch Statement

1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
const language = 'spanish';

switch (language) {
    case 'mandarin':
        console.log('Greatest number of native speakers!');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;
    case 'english':
        console.log('3rd place in number of native speakers');
    break;
    case 'hindi':
        console.log('4th place in number of native speakers');
    break;
    case 'arabic':
        console.log('5th most spoken language');
    break;
    default:
        console.log('Awesome language!')
}

// LECTURE: The Conditional (Ternary) Operator Structure=> condition ? exectuion if condition is true : execution if condition is false

const age = 37;
age >= 18 ? console.log('Person can drink wine') : console.log('Person cannot drink alcohol.')

const drink = age >= 18 ? 'wine🍷' : 'water 🫖☕🧃🍵';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'tea🍵'}`)


Assignment JavaScript Fundamentals Part 1 - LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
const population = 114;
const country = 'Brazil';
console.log(`${country}'s population is ${population > 30 ? 'above' : 'below'} average.`);
 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original


Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

console.log(`The bill cost US\$${bill1}, the tip was US\$${tip1}, a total of US\$${bill1 + tip1}.`)
console.log(`The bill cost US\$${bill2}, the tip was US\$${tip2}, a total of US\$${bill2 + tip2}.`)
console.log(`The bill cost US\$${bill3}, the tip was US\$${tip3}, a total of US\$${bill3 + tip3}.`)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

// LECTURE: Functions



// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous  assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while loop?