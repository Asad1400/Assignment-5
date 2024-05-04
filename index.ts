#! usr/bin/env node
import inquirer from "inquirer";

// Question#1 Write a script to log "Hello, World!" to the console.
console.log("Hello, World!"); // Hello, World!

//Question#2 Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold!");
} // It's cold! // The following condition is only true if the temperature is below 20 degrees Celsius.

// Question#3 Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples: number = 10;
let applesGivenAway: number = 3;
let applesLeft: number = apples - applesGivenAway;
console.log(applesLeft); // 7 // The result is 7 apples left after giving away 3 apples.

// Question#4 Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName: string = "Muhammad Asad";
let lastName: string = "Ullah";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // Muhammad Asad Ullah // The result is the combination of two variables.

// Question#5 Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number1: number = 5;
number1 > 3 ? console.log("Yes") : console.log("No"); // Yes // The condition is true because 5 is greater than 3.

//Question#6 Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle. 
let radius: number = 5;
const PI = Math.PI;
let calculateArea = (radius: number): number => PI * Math.pow(radius, 2);
console.log(calculateArea(radius)); // 78.53981633974483 // The area of the circle with a radius of 5 is approximately 78.54.

// Question#7 Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    (i%3==0)?console.log("Fizz"):(i%5==0)?console.log("Fuzz"):console.log(i);//The following will log Fizz if the number is a multiple of 3, log Fuzz if it is a multiple of 5 and will log the number if none of the conditions apply
}

// Question#8 Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures: number[] = [20, 25, 35, 12, 10];
console.log(Math.max(...temperatures));

// Question#9 Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
const age = await inquirer.prompt([
    {
        type: "number",
        name: "age",
        message: "Enter your age:",
        },
])
if (age.age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
// Question#10 Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const integers: number[] = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let count=0;
for(let i=0; i<integers.length; i++) {
    if(integers[i]>=0)
        count++;
}
console.log(count);

//Question#11 Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
let words: string[] = ["asad", "although", "mango", "apple", "run", "sad", "happy", "animal"];
let newWords = words.filter(x=>x.startsWith('a'));
console.log(newWords);

//Question#12 Create a script that logs the second to last element of an array named fruits.
let fruits: string[] = ["apple", "banana", "mango", "watermelon", "pinapple"];
console.log(fruits.slice(1, fruits.length));

// Question#13 Develop a function that takes an array of numbers and returns a new array with each number squared.`
let numbers2: number[] = [1, 2, 3, 4, 5];
let newNumbers: number[] = numbers2.map(x=>x*x);
console.log(newNumbers);

//Question#14 Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
const elements: number[] = [1,2,3,4,5,6];
const reverseElements: number[] = [];
for (let i=0, j=elements.length-1; i < elements.length; i++, j--) {
    reverseElements[j] = elements[i];
}
console.log(reverseElements);

// Question#15 Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const analysis = (array:  number[]): void => {
    if (array.length === 0){
        console.log("The array is empty");
        return;
    }
    const maxScore = Math.max(...array);
    const minScore = Math.min(...array);
    let maxCount = 0;
    let minCount = 0;
    for (const number of array) {
        (number > maxScore) ? maxCount++ : (number < minScore) ? minCount++ : null;
    }
    console.log(`The score exceeded the maximum score ${maxCount} times.`);
    console.log(`The score fell below the minimum score ${minCount} times.`);
}
analysis(scores);

// Question#16 Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
const array: any[] = [0, 1, false, 2, "", 3, null, undefined, NaN];
const removeFalsey = (array: any[]): any[] => array.filter(Boolean); // The Boolean function is used as a callback to filter out falsey values.
console.log(removeFalsey(array)); // [1, 2, 3] // The result is an array with only truthy values.   

// Question#17 Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr: number[] = arr1.concat(...arr2);
console.log(arr);

// Question#18 Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
const numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumOfElements = 0;
numbers3.forEach(x=>sumOfElements+=x);
console.log(sumOfElements);

// Question#19 Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
const elements2: number[] = [1, 2, 3, 4, 5];
const checkElement = (array: number[], element: number): number => array.indexOf(element);
console.log(checkElement(elements2, 3)); // 2 // The element 3 is found at index 2 in the array.

// Question#20 Write a function to find and return the smallest number in an array of integers.
const numbers4: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const smallestNumber = Math.min(...numbers4);
console.log(smallestNumber); // 1 // The smallest number in the array is 1.

// Question#21 Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
const numbers5: number[] = [1, 2, 3, 4, 5];
const calculateProduct = (array: number[]): number => array.reduce((a,b) => a*b, 1);
console.log(calculateProduct(numbers5)); // 120 // The product of all elements in the array is 120.

// Question#22 Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
const array7: string[] = ["asad", "fahad", "ali", "going", "went", "moving"];
const filterByLength = (array: string[], n: number):string[] => array.slice(n);
console.log(filterByLength(array7, 3));

// Question#23 Create a function findDuplicates that finds and logs all duplicates in an array.
const array8: number[] = [1,3,2,1,2,5,1,5];
const findDuplicates = (array: number[]): number[] => {
    const duplicates: number[] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
    }
    return duplicates;   
};
console.log(findDuplicates(array8));

// Question#24 Write a function incrementAll that takes an array of integers and increments each element by one.
const array9: number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
const incrementAll = (array: number[]): number[] => array.map(x=>x+1);
console.log(incrementAll(array9));

// Question#25 Develop a function countOccurrences that counts how many times a specific element appears in an array.
const array10: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const countOccurrences = (array: number[], element: number): number => array.filter(x=>x===element).length;
console.log(countOccurrences(array10, 1));

// Question#26 Create a function isSorted that checks if an array is sorted in ascending order.
const array11: number[] = [1, 2, 1, 4, 5];
const isSorted = (array: number[]): boolean => {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted(array11));

// Question#27 Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
const names: string[] =["Asad", "Fahad", "Abdullah", "Saad", "Ahmad"];
const forrmatNames = (array: string[]): string => {
    if (array.length === 1) {
        return array[0];
    } else if (array.length === 2) {
        return array.join(" and ");
    } else {
        return array.slice(0, -2).join(", ") + ", " + array.slice(-2).join(" and ");
    }
}
console.log(forrmatNames(names));

// Question#28 Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
const fahrenheitTemperatures: number[] = [32, 68, 104, 140, 176];
const temperatureConverter = (array: number[]): number[] => array.map(x=>(x-32)*5/9);
const celsiusTemperatures: number[] = temperatureConverter(fahrenheitTemperatures);
console.log(celsiusTemperatures);

// Question#29 Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
const array12 = [1, 2, 3, 4, 5, 6];
const minMaxAverage = (array: number[]): object => {
    return {
        min: Math.min(...array),
        max: Math.max(...array),
        average: array.reduce((x, y)=>x+y, 0)/array.length
    };
}
console.log(minMaxAverage(array12));

// Question#30 create a function swapElements that swaps two specified indices in an array.
const array13: number[] = [1, 2, 3, 4, 5, 6];
let temp: number = 0;
const swapElements = (array: number[], firstIndex: number, secondIndex: number):number[] => {
    temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
}
console.log(swapElements(array13, 1, 2));

// Question#31 Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
const mesaage1: string = "Hello, World!";
let countCharacter: number = 0;
const characterCounter = (message: string, character: string): number => {
    for (let i = 0; i < message.length; i++) {
        message[i] === character ? countCharacter++ : countCharacter;
    }
    return countCharacter;
}
console.log(characterCounter(mesaage1, "o"));

// Question#32 Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
const toDoList: { task: string, completed: boolean }[] = [
    {task: "Read a book", completed: true},
    {task: "Go for a walk", completed: false},
    {task: "Do the laundry", completed: true},
    {task: "Cook dinner", completed: false},
    {task: "Exercise", completed: false}
];
const completedTask = (array: { task: string, completed: boolean }[]): { task: string, completed: boolean }[] => array.filter(x=>x["completed"] === false);
console.log(completedTask(toDoList));

// Question#33 Write a function that takes an array of integers and sorts them from smallest to largest.
const numbers6: number[] = [5, 3, 8, 1, 2, 9, 4, 7, 6];
const sortAscending = (array: number[]): number[] => array.sort((a, b) => a - b);
console.log(sortAscending(numbers6));

// Question#34 Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
const array14: number[] = [1, 2, 3, 4, 5, 6];
const reverseArray = (array: number[]): number[] => {
    const reversedArray: number[] = [];
    for (let i = array14.length-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log(reverseArray(array14));

// Question#35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
const calculatorInput = await inquirer.prompt([
    {
        message: "Enter the first operand:",
        type: "number",
        name: "operand1",
    },
    {
        message: "Enter the second operand:",
        type: "number",
        name: "operand2",
    },
    {
        message: "Enter the operator:",
        type: "list",
        name: "operator",
        choices : ["+", "-", "*", "/"],
    }
]);

if(calculatorInput.operator === "+")
    console.log(`The sum of ${calculatorInput.operand1} and ${calculatorInput.operand2} is ${calculatorInput.operand1 + calculatorInput.operand2}`);
else if(calculatorInput.operator === "-")
    console.log(`The difference of ${calculatorInput.operand1} and ${calculatorInput.operand2} is ${calculatorInput.operand1 - calculatorInput.operand2}`);
else if(calculatorInput.operator === "*")
    console.log(`The product of ${calculatorInput.operand1} and ${calculatorInput.operand2} is ${calculatorInput.operand1 * calculatorInput.operand2}`);
else if(calculatorInput.operator === "/")
    console.log(`The quotient of ${calculatorInput.operand1} divided by ${calculatorInput.operand2} is ${calculatorInput.operand1 / calculatorInput.operand2}`);
else
    console.log("Invalid Operator");