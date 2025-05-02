// conditionals.js - Demonstrates conditional logic in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const input = document.getElementById("condInput");
  const btn = document.getElementById("condBtn");
  const output = document.getElementById("condOutput");

  // Error handling if elements aren't found
  if (!input || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  // Function to check if a number is even, odd, or zero
  const checkNumber = (num) => {
    if (num === 0) {
      return "0 is neither even nor odd – it's special!";
    } else if (num % 2 === 0) {
      return `${num} is even.`;
    } else {
      return `${num} is odd.`;
    }
  };

  // Expose the function to the window object for educational purposes
  window.checkNumber = checkNumber;

  console.log("Try calling checkNumber(5) or checkNumber(8) in the console!");

  // Add click event listener to the button
  btn.addEventListener("click", () => {
    // Parse the input value and validate
    const val = parseInt(input.value, 10);
    if (isNaN(val)) {
      output.textContent = "Please enter a whole number.";
      return;
    }

    // Use our function to determine if the number is even or odd
    const result = checkNumber(val);
    output.textContent = result;

    console.log(`Checked ${val}: ${result}`);
  });
});
