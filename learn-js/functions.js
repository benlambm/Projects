// functions.js - Demonstrates basic function usage in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // --- Example 1: Squaring a Number (One Argument) ---
  // This function takes one argument 'n' and returns its square.
  const square = (n) => n * n;

  // Get DOM elements for the squaring example
  const numInput = document.getElementById("numInput");
  const squareBtn = document.getElementById("squareBtn");
  const squareOutput = document.getElementById("squareOutput");

  // Error handling: Check if elements exist
  if (!numInput || !squareBtn || !squareOutput) {
    console.error("Required DOM elements for squaring example not found. Check your HTML.");
    return;
  }

  // Expose the function to the window object for educational purposes
  // This allows students to call 'square()' directly in the browser console
  window.square = square;

  console.log(`--- Squaring Function Example ---`);
  console.log(`We defined a function called 'square'. Try calling square(5) in the console!`);

  // Add click event listener to the 'Square it' button
  squareBtn.addEventListener("click", () => {
    // Get the value from the input field and convert it to a number
    const value = Number(numInput.value);

    // Validate if the input is a valid number
    if (isNaN(value)) {
      squareOutput.textContent = "Please enter a valid number.";
      console.log("Invalid input: Not a number.");
      return;
    }

    // Call the 'square' function with the input value
    const result = square(value);

    // Display the result on the page and log to console
    squareOutput.textContent = `${value}² = ${result}`;
    console.log(`Calling square(${value}) returned ${result}`);
  });


  // --- Example 2: Concatenating Strings (Multiple Arguments) ---
  // This function takes two arguments, 'str1' and 'str2', and returns a single string
  // which is the result of joining str1 and str2 together.
  const concatenateStrings = (str1, str2) => str1 + str2;

  // Get DOM elements for the string concatenation example
  const string1Input = document.getElementById("string1Input");
  const string2Input = document.getElementById("string2Input");
  const concatBtn = document.getElementById("concatBtn");
  const concatOutput = document.getElementById("concatOutput");

  // Error handling: Check if elements exist
  if (!string1Input || !string2Input || !concatBtn || !concatOutput) {
      console.error("Required DOM elements for string concatenation example not found. Check your HTML.");
      return;
  }

  // Expose the function to the window object
  window.concatenateStrings = concatenateStrings; // Allows console interaction

  console.log(`
--- String Concatenation Function Example ---`);
  console.log(`We defined a function called 'concatenateStrings'. Try calling concatenateStrings('Hello', 'World') in the console!`);

  // Add click event listener to the 'Concatenate Strings' button
  concatBtn.addEventListener("click", () => {
    // Get the values from the input fields
    const value1 = string1Input.value;
    const value2 = string2Input.value;

    // Call the 'concatenateStrings' function with the input values
    const result = concatenateStrings(value1, value2);

    // Display the result on the page and log to console
    concatOutput.textContent = `Concatenated string: "${result}"`;
    console.log(`Calling concatenateStrings('${value1}', '${value2}') returned "${result}"`);
  });

});
