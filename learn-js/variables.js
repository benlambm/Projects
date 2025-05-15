document.addEventListener("DOMContentLoaded", () => {
  // --- Example 1: Mutable Variable (let) ---
  // Variables declared with 'let' can be reassigned a new value.
  // We use 'let' here for a counter that needs to be updated.
  let count = 0;

  // Get DOM elements for the counter example
  const countBtn = document.getElementById("countBtn");
  const countOutput = document.getElementById("countOutput");

  // Error handling: Check if elements exist before proceeding
  if (!countBtn || !countOutput) {
    console.error("Required DOM elements for counter not found. Check your HTML.");
    return;
  }

  // For educational purposes, expose variables to window
  // This allows students to interact with 'count' in the browser console
  window.count = count;

  console.log(`--- Counter Example ---`);
  console.log(`Initial 'count' value:`, count);

  // Add event listener to the button
  countBtn.addEventListener("click", () => {
    // Increment the 'count' variable by 1
    count += 1;
    // Update the window reference so console also shows latest value
    window.count = count;

    // Update the text content of the output element on the page
    countOutput.textContent = `Current count = ${count}`;
    console.log(`'count' is now: ${count}`);

    if (count === 10) {
      console.log("🎉 You reached 10! Notice how the variable 'count' kept its value between clicks because it was declared outside the click handler.");
    }
  });

  console.log("Hint: try typing 'count' in the browser console and hit Enter — you'll see its current value!");


  // --- Example 2: Changing a Variable's Value Based on Input ---
  // This example demonstrates how to read a value from an input field
  // and assign it to a variable declared with 'let'.
  let dynamicVariable = "Initial Value"; // Declare a variable using 'let'

  // Get DOM elements for the dynamic variable example
  const variableInput = document.getElementById("variableInput");
  const changeVariableBtn = document.getElementById("changeVariableBtn");
  const variableOutput = document.getElementById("variableOutput");

    // Error handling: Check if elements exist
    if (!variableInput || !changeVariableBtn || !variableOutput) {
        console.error("Required DOM elements for dynamic variable not found. Check your HTML.");
        return;
    }

  // Display the initial value on the page
  variableOutput.textContent = `Current variable value: ${dynamicVariable}`;
  console.log(`
--- Dynamic Variable Example ---`);
  console.log(`Initial 'dynamicVariable' value: "${dynamicVariable}"`);

  // Add event listener to the 'Change Variable' button
  changeVariableBtn.addEventListener("click", () => {
    // Get the current value from the input field
    const newValue = variableInput.value;

    // Assign the new value to the 'dynamicVariable'
    dynamicVariable = newValue;

    // Update the text content of the output element on the page
    variableOutput.textContent = `Current variable value: ${dynamicVariable}`;
    console.log(`'dynamicVariable' is now: "${dynamicVariable}"`);

    // For demonstration, you could also expose this to the window
    // window.dynamicVariable = dynamicVariable;
  });

});
