// Version 1: Using var keyword

// Declare variables to store components and sum
var num1 = 0;
var num2 = 0;
var sum = 0;

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