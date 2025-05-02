// arrays.js - Demonstrates array methods in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const input = document.getElementById("arrayInput");
  const btn = document.getElementById("arrayBtn");
  const output = document.getElementById("arrayOutput");

  if (!input || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Parses a comma-separated string into an array of numbers
   * @param {string} str
   * @returns {number[]}
   */
  const parseNumbers = (str) => str.split(",").map((s) => Number(s.trim()));

  /**
   * Doubles each number in the array
   * @param {number[]} arr
   * @returns {number[]}
   */
  const doubleNumbers = (arr) => arr.map((n) => n * 2);

  // Expose functions to the window object for educational purposes
  // This allows students to call them directly in the console
  window.parseNumbers = parseNumbers;
  window.doubleNumbers = doubleNumbers;

  console.log("Defined parseNumbers and doubleNumbers. Try calling doubleNumbers([1, 2, 3]) in the console!");

  btn.addEventListener("click", () => {
    const raw = input.value;
    const numbers = parseNumbers(raw);
    if (numbers.some((n) => isNaN(n))) {
      output.textContent = "Please enter valid numbers separated by commas.";
      return;
    }

    const doubled = doubleNumbers(numbers);
    output.innerHTML = `<strong>Original:</strong> [${numbers.join(", ")}]<br><strong>Doubled:</strong> [${doubled.join(", ")}]`;
    console.log(`Original: [${numbers.join(", ")}], Doubled: [${doubled.join(", ")}]`);
  });
});