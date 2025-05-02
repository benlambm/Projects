// objects.js - Demonstrates object creation and manipulation

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const nameInput = document.getElementById("objNameInput");
  const ageInput = document.getElementById("objAgeInput");
  const btn = document.getElementById("objBtn");
  const output = document.getElementById("objOutput");

  if (!nameInput || !ageInput || !btn || !output) {
    console.error("Required DOM elements not found. Check your HTML.");
    return;
  }

  /**
   * Creates a simple person object with name and age properties
   * @param {string} name
   * @param {number} age
   * @returns {{name: string, age: number}}
   */
  const createPerson = (name, age) => ({ name, age });

  // Expose the function to the window object for educational purposes
  // This allows students to call it directly in the console
  window.createPerson = createPerson;

  console.log("Defined createPerson(name, age). Try calling createPerson('Alice', 30) in the console!");

  btn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    if (!name || isNaN(age)) {
      output.textContent = "Please provide both a valid name and age.";
      return;
    }

    const person = createPerson(name, age);
    output.innerHTML = `<pre>${JSON.stringify(person, null, 2)}</pre>`;
    console.log("Created person object:", person);
  });
});