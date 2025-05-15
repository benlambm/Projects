// dom.js - Demonstrates DOM manipulation in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const textPara = document.getElementById("domText");
  const btn = document.getElementById("domBtn");
  const output = document.getElementById("domOutput");

  if (!textPara || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Changes the text content of the target paragraph
   * @param {string} newText
   */
  const changeText = (newText) => {
    textPara.textContent = newText;
  };

  // Expose the function to the window object for educational purposes
  // This allows students to call it directly in the console
  window.changeText = changeText;

  console.log("Defined changeText(text). Try calling changeText('Hello from console!') in the console!");

  btn.addEventListener("click", () => {
    const newContent = "You've changed the DOM! 🎉";
    changeText(newContent);
    output.textContent = `Paragraph text is now: "${newContent}"`;
    console.log("DOM text changed to:", newContent);
  });
});