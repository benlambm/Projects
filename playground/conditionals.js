// conditionals.js - Demonstrates conditional logic and logical operators in JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // --- Example 1: Even or Odd Check (if/else) ---
  // This section demonstrates a simple if/else statement to check if a number is even or odd.
  const evenOddInput = document.getElementById("evenOddInput");
  const evenOddBtn = document.getElementById("evenOddBtn");
  const evenOddOutput = document.getElementById("evenOddOutput");

  if (evenOddInput && evenOddBtn && evenOddOutput) {
    evenOddBtn.addEventListener("click", () => {
      const value = parseInt(evenOddInput.value, 10);

      // Check if the input is a valid integer
      if (isNaN(value)) {
        evenOddOutput.textContent = "Please enter a whole number.";
        console.log("Even/Odd Check: Invalid input - not a number.");
        return;
      }

      let result = `${value} is `; // Start building the output string

      // The core conditional logic: check the remainder when divided by 2
      if (value % 2 === 0) {
        result += "even."; // If remainder is 0, it's even
      } else {
        result += "odd."; // Otherwise, it's odd
      }

      evenOddOutput.textContent = result;
      console.log(`Even/Odd Check: ${result}`);
    });
  }

  // --- Example 2: Positive, Negative, or Zero (if/else if/else) ---
  // This section shows how to use if, else if, and else to handle multiple conditions.
  const posNegZeroInput = document.getElementById("posNegZeroInput");
  const posNegZeroBtn = document.getElementById("posNegZeroBtn");
  const posNegZeroOutput = document.getElementById("posNegZeroOutput");

  if (posNegZeroInput && posNegZeroBtn && posNegZeroOutput) {
    posNegZeroBtn.addEventListener("click", () => {
      const value = Number(posNegZeroInput.value);

       // Check if the input is a valid number
      if (isNaN(value)) {
        posNegZeroOutput.textContent = "Please enter a valid number.";
        console.log("Positive/Negative/Zero Check: Invalid input - not a number.");
        return;
      }

      let result = `${value} is `;

      // Conditional logic to check if the number is positive, negative, or zero
      if (value > 0) {
        result += "positive.";
      } else if (value < 0) {
        result += "negative.";
      } else {
        result += "zero."; // If not greater than 0 and not less than 0, it must be zero
      }

      posNegZeroOutput.textContent = result;
      console.log(`Positive/Negative/Zero Check: ${result}`);
    });
  }

  // --- Example 3: Checking a Range (Logical Operators &&, ||) ---
  // This section demonstrates using logical operators (&& - AND) to combine conditions.
  // We check if a number is within a specific range.
  const rangeInput = document.getElementById("rangeInput");
  const rangeBtn = document.getElementById("rangeBtn");
  const rangeOutput = document.getElementById("rangeOutput");

   if (rangeInput && rangeBtn && rangeOutput) {
     rangeBtn.addEventListener("click", () => {
       const value = Number(rangeInput.value);

        // Check if the input is a valid number
       if (isNaN(value)) {
         rangeOutput.textContent = "Please enter a valid number.";
         console.log("Range Check: Invalid input - not a number.");
         return;
       }

       let result = `${value} is `;

       // Conditional logic using the logical AND (&&) operator
       // The condition is true only if BOTH sub-conditions are true
       if (value >= 10 && value <= 20) {
         result += "between 10 and 20 (inclusive).";
       } else {
         result += "NOT between 10 and 20.";
       }

       rangeOutput.textContent = result;
       console.log(`Range Check: ${result}`);
     });
   }

   console.log("Conditionals.js loaded. Try interacting with the examples on the page.");
});
