// loops.js - Demonstrates loops (for and while) in JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // --- Example 1: For Loop (Multiplication Table) ---
  // The for loop is ideal for iterating a fixed number of times.
  // Structure: for (initialization; condition; afterthought) { code block }
  const forLoopInput = document.getElementById("forLoopInput");
  const forLoopBtn = document.getElementById("forLoopBtn");
  const forLoopOutput = document.getElementById("forLoopOutput");

  if (forLoopInput && forLoopBtn && forLoopOutput) {
    forLoopBtn.addEventListener("click", () => {
      // Get the number input from the user
      const number = parseInt(forLoopInput.value, 10);

      // Validate input: check if it's a number between 1 and 12
      if (isNaN(number) || number < 1 || number > 12) {
        forLoopOutput.innerHTML = "<p>Please enter a whole number between 1 and 12.</p>";
        console.log("For Loop Example: Invalid input.");
        return;
      }

      // Clear previous output
      forLoopOutput.innerHTML = '';

      // Add a heading for the table
      const tableHeading = document.createElement('h3');
      tableHeading.textContent = `Multiplication Table for ${number}:`;
      forLoopOutput.appendChild(tableHeading);

      // Use a for loop to generate and display the multiplication table
      console.log(`--- For Loop Example: Multiplication Table for ${number} ---`);
      for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const p = document.createElement('p');
        p.textContent = `${number} x ${i} = ${result}`;
        forLoopOutput.appendChild(p);
        console.log(`${number} x ${i} = ${result}`);
      }
       console.log("---------------------------------------------------");
    });
  }


  // --- Example 2: While Loop (Counting Up) ---
  // The while loop continues as long as its condition is true.
  // Structure: while (condition) { code block }
  const whileLoopInput = document.getElementById("whileLoopInput");
  const whileLoopBtn = document.getElementById("whileLoopBtn");
  const whileLoopOutput = document.getElementById("whileLoopOutput");

  if (whileLoopInput && whileLoopBtn && whileLoopOutput) {
    whileLoopBtn.addEventListener("click", () => {
      // Get the number input from the user
      const limit = parseInt(whileLoopInput.value, 10);

      // Validate input: check if it's a positive whole number
      if (isNaN(limit) || limit <= 0) {
        whileLoopOutput.textContent = "Please enter a positive whole number.";
        console.log("While Loop Example: Invalid input.");
        return;
      }

      // Clear previous output
      whileLoopOutput.textContent = '';

      let count = 1; // Initialize the counter

      // Use a while loop to count up to the limit
      console.log(`
--- While Loop Example: Counting up to ${limit} ---`);
      while (count <= limit) {
        // Append the current count to the output
        whileLoopOutput.textContent += `${count} `;
        console.log(`Count: ${count}`);
        count++; // Increment the counter - IMPORTANT for while loops to avoid infinite loops!
      }
      console.log("-----------------------------------------------------");
    });
  }

  console.log("Loops.js loaded. Interact with the examples to see for and while loops in action.");
});
