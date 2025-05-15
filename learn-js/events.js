// events.js - Demonstrates event handling in JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const box = document.getElementById("eventBox");
  const output = document.getElementById("eventOutput");

  if (!box || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Handles events by displaying their type in the output
   * @param {Event} e
   */
  const handleEvent = (e) => {
    output.textContent = `Event detected: ${e.type}`;
  };

  // Expose the function to the window object for educational purposes
  // This allows students to dispatch events in the console
  window.handleEvent = handleEvent;

  console.log("Defined handleEvent(e). Try dispatching events manually, e.g., handleEvent(new Event('click'))");

  ["click", "mouseover", "mouseout"].forEach((evt) => {
    box.addEventListener(evt, handleEvent);
  });
});