'use strict';
//Testing Prettier - adjusting single quotes and parenthesis configurations in the prettierrc file
const x = '23';
if (x === 23) console.log(x);

const calcAge = birthYear => 2022 - birthYear;
console.log(calcAge(1998));
// Problem> we worl for a company building a smart home thermometer. Task: given an array of temperatures od one day, calculate the temperature amplitude. Sometimes there might be a sensor error.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
//The temp. amplitude is the difference between highest and lowest recorded temperatures
//How to compute the highest and the lowest temperatures?
//what to do with the errors?

//2. Breaking it up into sub-problems
//- How to ignore the errors;
//- Find max value in the array;
//- Find min value in the array;
//- Subtract min from max to get the amplitude and return it

const calcTempAmplitude = function (tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    const currentTemp = tempArray[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
// console.log(`... ${arr1[0]}ºC ... ${arr1[1]}ºC ... ${arr1[2]}ºC`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} day${i === 0 ? '' : 's'}...`;
  }
  console.log('...' + str);
};

printForecast(arr1);
printForecast(arr2);
