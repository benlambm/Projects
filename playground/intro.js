// intro.js
// Demonstrates basic interaction & console logging.

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const output = document.getElementById("helloOutput");

  console.log("%c💡 Tip:", "color: teal; font-weight:bold;", "You can expand logged objects or run your own code in this console!");

  btn.addEventListener("click", () => {
    console.log("Button was clicked – running JavaScript...");
    output.textContent = "Hello, JavaScript world! 👋";
    btn.disabled = true;
  });
});
