'use strict';
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');
//const interface = 'audio';
//const private = 534;

// LECTURE: Functions

function logger() {
    console.log(`My name is KitKat!`)
};

//calling/running/invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice made with ${apples} apples and ${oranges} oranges.`;
    return juice;
};
//Evoke/Call/Run function:
const juice1 = fruitProcessor(3,4);
console.log(juice1);
const juice2 = fruitProcessor(6,8);
console.log(juice2);

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return description;
};
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

const brazil = describeCountry('Brazil', 214, 'Brasilia');  
const france = describeCountry('France', 67, 'Paris');
const usa = describeCountry('United States', 331, 'Washington');
console.log(brazil, france, usa);


// LECTURE: Function Declarations vs. Expressions
//Function Declaration - we can call function declarations before they are defined 

function calcAge1(birthYear) {
    return 2022 - birthYear;
};
const birthYear1 = calcAge1(1986);
console.log(birthYear1);

//Function Expression or Anonymous Function - cannot be accessed before initialized
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}
const birthYear2 = calcAge2(1986);
console.log(birthYear2);

1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
function percentageOfWorld1(population) {
    return (population / 7900) * 100; 
};

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
const percentageBrazilPop = percentageOfWorld1(214);
const percentageUSAPop = percentageOfWorld1(332);
const percentageChinaPop = percentageOfWorld1(1441);
console.log(percentageBrazilPop);
console.log(percentageUSAPop);
console.log(percentageChinaPop);

// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100; 
};

LECTURE: Arrow Functions
Arrow Functions do NOT have THIS - with 1 parameter
const calcAge3 = birthYear => 2022 - birthYear;
const birthYear3 = calcAge3(1986);
console.log(birthYear3);

Arrow Function with more than one line:
const firstYearsUntil75 = birthYear => {
    const age = 2022 - birthYear;
    const yearsTill75 = 75 - age;
    return yearsTill75
}
console.log(firstYearsUntil75(1986));
//Arrow Function with more than one parameter: write the parameters between parenthesis, separated by commas
const yearsUntil75 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const yearsTill75 = 75 - age;
    return `${firstName} will turn 75 in ${yearsTill75} years!`
}
console.log(yearsUntil75(1986, 'Carol'));

1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = population =>(population / 7900) * 100; 

const percentageBrazilPop = percentageOfWorld3(214);
const percentageUSAPop = percentageOfWorld3(332);
const percentageChinaPop = percentageOfWorld3(1441);
console.log(percentageBrazilPop);
console.log(percentageUSAPop);
console.log(percentageChinaPop)


// LECTURE: Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 3;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} slices of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor(2,3));

1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
const percentageOfWorld3 = population =>(population / 7900) * 100; 

const describePopulation = function(country, population) {
    const percentageCalc = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percentageCalc.toFixed(2)}% of the world population.`
};

2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
console.log(describePopulation('Portugal', 10));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));
console.log(describePopulation('Brazil', 214));
 
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;


// 2. Use the function to calculate the average for both teams
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const averageDolphins1 = calcAverage(44, 23, 71);
const averageKoalas1 = calcAverage(65, 54, 49);
console.log(averageDolphins1, averageKoalas1);

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const averageDolphins2 = calcAverage(85, 54, 41);
const averageKoalas2 = calcAverage(23, 34, 27);
console.log(averageDolphins2, averageKoalas2);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
const checkWinner = function(averageDolphins, averageKoalas) {
    if (averageDolphins >= 2 * averageKoalas) {
        return `Dolphins win!(${averageDolphins} vs. ${averageKoalas})`
    } else if (averageKoalas >= 2 * averageDolphins) {
        return `Koalas win!(${averageKoalas} vs. ${averageDolphins})`
    } else {
        return `No team wins!`
    }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

console.log(checkWinner(averageDolphins1, averageKoalas1));
console.log(checkWinner(averageDolphins2, averageKoalas2));
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀



// LECTURE: Introduction to Arrays
const friend1 = 'Petra';
const friend2 = 'Lina';
const friend3 = 'Michael';

const friends = ['Petra', 'Lina', 'Michael'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length); //elements of an array qty
console.log(friends[friends.length-1]); //last element of an array, as it´s zero-indexed

//Reassigning an element of an array - as it's not a primitive value
friends[2] = 'Rafael';
console.log(friends);
console.log(friends[friends.length-1]);

//Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

const birthYear = [1991, 1981, 1986];

const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[birthYear.length-1]);

console.log(age1, age2, age3);

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
const populations = [214, 1441, 332, 67];
// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
function percentageOfWorld1(population) {
    return population / 7900 * 100; 
};

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


// LECTURE: Basic Array Operations (Methods)
const friends = ['Petra', 'Lina', 'Michael'];


// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
const neighbors = ['Belgium', 'Luxemburg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Spain', 'Andorra'];
console.log(neighbors.length);
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
console.log(neighbors.push('Utopia')); //returns the length of the array
console.log(neighbors);
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
console.log(neighbors.pop('Utopia')); //returns the removed element
console.log(neighbors);
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
    if (neighbors.includes('Germany')) {
        console.log `It is a central country!`;
    } else {
        console.log `It is not a central country!`;
    };
console.log(neighbors);

// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
neighbors[neighbors.indexOf('Monaco')] = 'Principality of Monaco';
console.log(neighbors);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125, 555, 44]

// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(totals);
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀



// LECTURE: Introduction to Objects



// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 214,
    neighbors: ['Uruguay', 'Argentina', 'Paraguyay', 'Bolivia', 'Peru', 'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'French Guiana']
};



// LECTURE: Dot vs. Bracket Notation
const carol = {
    firstName: 'Carolina',
    lastName: 'Nogueira',
    age: 2022-1986,
    job: 'teacher',
    pets: ['KitKat', 'Tintin', 'Haddock']
};
console.log(carol.lastName); //dot notation
console.log(carol['lastName']); // bracket notation - we can pass any string into the brackets

//adding new properties to objects, use the assignment (=) operator:
//Using dot notation
carol.location = 'Brasilia';

//Using bracket notation
carol['e-mail'] = 'carol@email.com';

console.log(carol);
//Challenge: write "Carol has had 3 pets and her first pet was KitKat."
console.log(`${carol.firstName} has ${carol.pets.length} pets, and her first pet was ${carol.pets[0]}!`)


// const questionAbout = prompt('What would you like to know about Carol? Choose between firstName, lastName, age, job or pets!');
// console.log(carol[questionAbout]);

// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 214,
    neighbors: ['Uruguay', 'Argentina', 'Paraguyay', 'Bolivia', 'Peru', 'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'French Guiana']
};
console.log(`${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry['capital']}.`)
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
myCountry.population +=2;
console.log(myCountry['population']);

myCountry['population'] -= 2;
console.log(myCountry.population);


// LECTURE: Object Methods
const carol = {
    firstName: 'Carolina',
    lastName: 'Nogueira',
    birthYear: 1986,
    job: 'teacher',
    pets: ['KitKat', 'Tintin', 'Haddock'],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age; 
    },
    summary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`;
    } 
};
console.log(carol.calcAge());
console.log(carol.age);//dot notation
// console.log(carol['age']); //bracket notation

//Challenge: write "Jonas is a 46-year-old teacher, and he has a driver's license."
console.log(carol.summary());


// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous  assignment, but this time using the 'this' keyword.
const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 214,
    neighbors: ['Uruguay', 'Argentina', 'Paraguyay', 'Bolivia', 'Peru', 'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'French Guiana'],
    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`; 
    },
    checkIsIsland: function() {
        //return this.neighbors.length === 0 ? true : false;
        return !Boolean(this.neighbors.length);
    }
};

// 2. Call the 'describe' method
console.log(myCountry.describe());


// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
console.log(myCountry.checkIsIsland());

console.log(myCountry);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};
const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
markMiller.calcBMI();
console.log(markMiller.bmi);
johnSmith.calcBMI();
console.log(johnSmith.bmi);
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
const higherBMI = markMiller.bmi > johnSmith.bmi ? `${markMiller.fullName}'s BMI(${markMiller.bmi}) is higher than John's(${johnSmith.bmi})!` : `${johnSmith.fullName}'s BMI(${johnSmith.bmi} is higher than Mark's(${markMiller.bmi})!`;
console.log(higherBMI);
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀


// LECTURE: Iteration: The for Loop
for(let i = 1; i <=10; i++) {
    console.log(`Repetition ${i}!`);
};

// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for(let i= 1; i <=50; i++) {
    console.log(`Voter number ${i} is currently voting`);
};


// LECTURE: Looping Arrays, Breaking and Continuing

const carol = ['Carolina', 'Nogueira', 2022-1986, 'teacher', ['KitKat', 'Tintin', 'Haddock'], true];

const types = [];

for(let i = 0; i< carol.length; i++) {
    console.log(carol[i]);
    //filling the types array
    //types[i] = typeof carol[i];
    types.push(typeof carol[i]);
};
console.log(types);

const years = [1991, 2007, 1978, 1986, 1933];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
};
console.log(ages);
//continue and break

const carol = ['Carolina', 'Nogueira', 2022-1986, 'teacher', ['KitKat', 'Tintin', 'Haddock'], true];

console.log('-----ONLY STRINGS-----')
for(let i = 0; i< carol.length; i++) {
    if(typeof carol[i] !== 'string') continue;
    console.log(carol[i], typeof carol[i]);
};

console.log('-----BREAK WITH NUMBER-----')
for(let i = 0; i< carol.length; i++) {
    if(typeof carol[i] === 'number') break;
    console.log(carol[i], typeof carol[i]);
};

// 1. Let's bring back the 'populations' array from a previous assignment
const populations = [214, 1441, 332, 67];

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
function percentageOfWorld1(population) {
    return population / 7900 * 100; 
};

const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
};


// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops

//Looping Backwards
const carol = ['Carolina', 'Nogueira', 2022-1986, 'teacher', ['KitKat', 'Tintin', 'Haddock']];

for(let i = carol.length-1; i >= 0; i--) {
    console.log(carol[i]);
};

//Loops in Loops - at the gym, you need to work on 5 different exercises, each repeating 3 times
for(let i = 1; i<=5; i++ ) {
    console.log(`--------You started exercise ${i}------!`);
    for(let j = 1; j<=3; j++) {
        console.log(`This is repetition #${j}.`);
    };
};

// 1. Store this array of arrays into a variable called 'listOfNeighbours'
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
for(let i=0; i<=listOfNeighbours.length-1; i++) {
    for(let j=0; j<=listOfNeighbours[i].length-1; j++) {
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`);
    }
}

// LECTURE: The while Loop

for(let i = 1; i <=10; i++) {
    console.log(`Repetition FOR LOOP ${i}!`);
};

// While loop has the same components, but set differently

// let i =1; //set starting point outside the while loop - NOT MANDATORY - only the condition is necessary - we don´t know how many times the loop will take to reach a certaiin condition, e.g. rolling a dice till it´s 6
// while(condition to check before each iteration) {
//     //execution of loop/each iteration
//     //counter
// }
let j = 1;
while(j<=10) {
    console.log(`Repetition WHILE LOOP ${j}!`);
    j++
}

let dice= Math.trunc(Math.random()*6) + 1 //Math.trunc returns only the integral part of a number, removing fractional digits, and Math.random returns a pseudo number between 0 and 1 + 1 to result a random number between 1 and 6

while(dice !==6) {
    console.log(`You rolled a ${dice}`);
    dice= Math.trunc(Math.random()*6) + 1; //created a new random number - there´s no counter i++ as the condition will stop the counter in this example
    if (dice === 6) console.log(`Loop ends here as you rolled a ${dice}!`)
}

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')

const populations = [214, 1441, 332, 67];

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
function percentageOfWorld1(population) {
    return population / 7900 * 100; 
};

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const calcPercentages = percentageOfWorld1(populations[i]);
    percentages3.push(calcPercentages);
    i++;
};

console.log(percentages3);


// 2. Reflect on what solution you like better for this task: the for loop or the while loop? The for loop is a better choice in this particular case, as we know how many times the loop will iterate, 4, the length of the array.

*/
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops! Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const tips = [];
const totals = [];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
for(let i = 0; i < bills.length; i++) {
    const eachTip = calcTip(bills[i]);
    tips.push(eachTip);
    totals.push(bills[i] + eachTip);
};
console.log(bills, tips, totals);


// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀
const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));