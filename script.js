// Error 1:  Misspelling of message  
let message = 'Welcome to the debugging exercise!';
console.log(message);    

// Error 2: Class name needs to be changed to ID
let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 

// Error 3: Undefined displayOutput Function
function eventHandler() {
  console.log('Button clicked');
  displayOutput(); // Ensure this function exists
}

// Error 4: Query Selector
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
let localMessage = 'Original message';

function updateMessage() {
  let localMessage = 'Updated message';
}
updateMessage();
console.log(localMessage); 

// Error 7: Call the function instead of passing it
document.getElementById('testButton').addEventListener('click', testFunction);
function testFunction() {
  console.log('Test function executed');
}

// Error 8: Incorrect Sum Calculation
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2));

// Error 9: Calling .length on null
if (nullVar !== null) {
console.log(nullVar.length);
} else {
  console.log('Variable is null');
}
// Error 10: Case sensitivity
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11: Logging a string instead of variable
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: Calling an undefined function
function tryToCallFunction() {
  console.log('Function executed');
}
tryToCallFunction();

// Error 13: Name is misspelled
let user = { name: 'Alice' };
console.log(user.name)

// Error 14: Numbers don't have a .toUpperCase() method
let someNumber = 123;
console.log(String(someNumber).toUpperCase()); 

// Error 15: Missing quotes in string
let greeting = "Hello, world!"; // Missing open and closing parenthesis

// Error 16: Unnecessary semicolon in for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Error 17: Type mismatch in === comparison
let five = '5';
if (Number(five) === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 

// Error 18: Overwriting array.prototype.push
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers); // [1]

// Error 19: Using x before declaration 
let x = 5;
console.log(x);


// Error 20: Adding a property to a string
let myString = { text:'Hello'};
myString.property = 'World';
console.log(myString.property); }
