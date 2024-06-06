// Version 2: Using let keyword

// Declare variables to store components and sum
let num1 = 0;
let num2 = 0;
let sum = 0;

// Function to add two numbers and display the result
function addNumbers() {
    sum = num1 + num2;
    document.getElementById("result").innerText = "Sum: " + sum;
}

// Initial calculation
addNumbers();

// Function to load new values and recalculate sum
function loadAndCalculate() {
    num1 = parseInt(prompt("Enter the new value for the first number:"));
    num2 = parseInt(prompt("Enter the new value for the second number:"));
    addNumbers();
}