// functions.js - Demonstrates basic function usage in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const input = document.getElementById("numInput");
  const btn = document.getElementById("squareBtn");
  const output = document.getElementById("squareOutput");

  // Error handling if elements aren't found
  if (!input || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  // A simple function expression that squares a number
  const square = (n) => n * n;

  // Expose the function to the window object for educational purposes
  // This allows students to call it directly in the console
  window.square = square;

  console.log("We defined a function called 'square'. Try calling square(4) in the console!");

  // Add click event listener to the button
  btn.addEventListener("click", () => {
    // Convert input value to a number and validate
    const value = Number(input.value);
    if (isNaN(value)) {
      output.textContent = "Please enter a valid number.";
      return;
    }

    // Call our square function and display the result
    const result = square(value);
    output.textContent = `${value}² = ${result}`;
    console.log(`square(${value}) returned ${result}`);
  });
});
