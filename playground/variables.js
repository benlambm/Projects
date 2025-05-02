document.addEventListener("DOMContentLoaded", () => {
  // Use let instead of window to avoid polluting the global namespace
  // Still accessible in console for educational purposes
  let count = 0;

  // Get DOM elements and add error handling
  const btn = document.getElementById("countBtn");
  const output = document.getElementById("countOutput");

  // Error handling if elements aren't found
  if (!btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  // For educational purposes, expose variables to window
  // This allows students to interact with them in the console
  window.count = count;
  window.btn = btn;
  window.output = output;

  console.log(`We start with a variable called 'count' that equals`, count);

  btn.addEventListener("click", () => {
    // Increment count and update both the local variable and window reference
    count += 1;
    window.count = count; // Keep the window reference updated

    // Update the UI
    output.textContent = `Current count = ${count}`;
    console.log(`count is now ${count}`);

    if (count === 10) {
      console.log("🎉 You reached 10! Notice how the variable kept its value between clicks.");
    }
  });

  console.log("Hint: try typing 'count', 'btn', or 'output' in the console and hit Enter — you'll see their current values!");
});
