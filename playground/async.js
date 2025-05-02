// async.js - Demonstrates asynchronous JavaScript with Promises

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const btn = document.getElementById("asyncBtn");
  const output = document.getElementById("asyncOutput");

  if (!btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Simulates fetching data with a Promise after a delay
   * @returns {Promise<{message: string}>}
   */
  const fetchFakeData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Hello from async simulation!" });
      }, 1500);
    });

  // Expose the function to the window object for educational purposes
  // This allows students to call it directly in the console
  window.fetchFakeData = fetchFakeData;

  console.log("Defined fetchFakeData(). Try calling fetchFakeData().then(console.log) in the console!");

  btn.addEventListener("click", () => {
    output.textContent = "Loading...";
    fetchFakeData()
      .then((data) => {
        output.textContent = `Received: ${data.message}`;
        console.log("Fetched data:", data);
      })
      .catch((err) => {
        output.textContent = "Error fetching data.";
        console.error("fetchFakeData error:", err);
      });
  });
});