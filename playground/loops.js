// loops.js - Demonstrates loop usage in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const input = document.getElementById("loopInput");
  const btn = document.getElementById("loopBtn");
  const output = document.getElementById("loopOutput");

  // Error handling if elements aren't found
  if (!input || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Generates a multiplication table HTML for a given number
   * @param {number} num - The number to create a multiplication table for
   * @param {number} [maxMultiplier=12] - The maximum multiplier to use
   * @returns {string} HTML string containing the multiplication table
   */
  const generateMultiplicationTable = (num, maxMultiplier = 12) => {
    if (isNaN(num) || num < 1) {
      return "Please provide a positive number.";
    }

    let html = `<strong>Multiplication table for ${num}</strong><br>`;
    html += "<ul>";

    // Using a for loop to build list items
    for (let i = 1; i <= maxMultiplier; i++) {
      html += `<li>${num} × ${i} = ${num * i}</li>`;
    }

    html += "</ul>";
    return html;
  };

  // Expose the function to the window object for educational purposes
  window.generateMultiplicationTable = generateMultiplicationTable;

  console.log("Try calling generateMultiplicationTable(7) in the console!");

  // Add click event listener to the button
  btn.addEventListener("click", () => {
    // Parse and validate the input
    const num = parseInt(input.value, 10);
    if (isNaN(num) || num < 1 || num > 12) {
      output.textContent = "Please enter a number between 1 and 12.";
      return;
    }

    // Generate and display the multiplication table
    const tableHtml = generateMultiplicationTable(num);
    output.innerHTML = tableHtml; // Using innerHTML is safe here as we control the content

    console.log(`Generated 1–12 multiplication table for ${num}`);
  });
});
