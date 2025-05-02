// arrays.js - Demonstrates array concepts and methods in JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // Initialize a sample array that will be used and modified by the examples.
  // Using 'let' because we will be adding and removing elements.
  let myMutableArray = ["apple", "banana", "cherry"];

  // Function to update the display of the current array state
  const updateArrayDisplay = () => {
    const displayElement = document.getElementById("currentArrayDisplay");
    if (displayElement) {
      // Display the array content and its length
      displayElement.textContent = `Current Array: [${myMutableArray.join(", ")}] (Length: ${myMutableArray.length})`;
      console.log(`Current Array State: [${myMutableArray.join(", ")}] (Length: ${myMutableArray.length})`);
    }
  };

  // Initial display of the array
  updateArrayDisplay();


  // --- Example 1: Creating and Accessing Elements ---
  // Demonstrates accessing array elements using their index (0-based).
  const arrayAccessInput = document.getElementById("arrayAccessInput");
  const arrayAccessBtn = document.getElementById("arrayAccessBtn");
  const arrayAccessOutput = document.getElementById("arrayAccessOutput");

  if (arrayAccessInput && arrayAccessBtn && arrayAccessOutput) {
    arrayAccessBtn.addEventListener("click", () => {
      const index = parseInt(arrayAccessInput.value, 10);

      // Validate input: check if it's a number and a valid index
      if (isNaN(index) || index < 0 || index >= myMutableArray.length) {
        arrayAccessOutput.textContent = `Please enter a valid index between 0 and ${myMutableArray.length - 1}.`;
        console.log("Array Access: Invalid index.");
        return;
      }

      // Access the element at the specified index
      const element = myMutableArray[index];

      // Display the accessed element
      arrayAccessOutput.textContent = `Element at index ${index}: "${element}"`;
      console.log(`Array Access: Accessed element at index ${index}: "${element}"`);
    });
  }


  // --- Example 2: Adding Elements (push, unshift) ---
  // Demonstrates adding elements to the end (push) and beginning (unshift) of an array.
  const addElementInput = document.getElementById("addElementInput");
  const pushBtn = document.getElementById("pushBtn");
  const unshiftBtn = document.getElementById("unshiftBtn");
  const addElementOutput = document.getElementById("addElementOutput");

  if (addElementInput && pushBtn && unshiftBtn && addElementOutput) {
    pushBtn.addEventListener("click", () => {
      const value = addElementInput.value;
      if (value === "") {
          addElementOutput.textContent = "Please enter a value to add.";
          return;
      }
      // Add the value to the end of the array
      myMutableArray.push(value);
      addElementOutput.textContent = `Added "${value}" to the end.`;
      console.log(`Push: Added "${value}".`);
      updateArrayDisplay(); // Update the array display
    });

    unshiftBtn.addEventListener("click", () => {
      const value = addElementInput.value;
       if (value === "") {
          addElementOutput.textContent = "Please enter a value to add.";
          return;
      }
      // Add the value to the beginning of the array
      myMutableArray.unshift(value);
      addElementOutput.textContent = `Added "${value}" to the beginning.`;
       console.log(`Unshift: Added "${value}".`);
      updateArrayDisplay(); // Update the array display
    });
  }


  // --- Example 3: Removing Elements (pop, shift) ---
  // Demonstrates removing elements from the end (pop) and beginning (shift) of an array.
  const popBtn = document.getElementById("popBtn");
  const shiftBtn = document.getElementById("shiftBtn");
  const removeElementOutput = document.getElementById("removeElementOutput");

  if (popBtn && shiftBtn && removeElementOutput) {
    popBtn.addEventListener("click", () => {
      // Remove the last element from the array
      const removedElement = myMutableArray.pop();
      if (removedElement !== undefined) {
        removeElementOutput.textContent = `Removed "${removedElement}" from the end.`;
        console.log(`Pop: Removed "${removedElement}".`);
      } else {
        removeElementOutput.textContent = "Array is empty, nothing to remove.";
         console.log("Pop: Array was empty.");
      }
      updateArrayDisplay(); // Update the array display
    });

    shiftBtn.addEventListener("click", () => {
      // Remove the first element from the array
      const removedElement = myMutableArray.shift();
       if (removedElement !== undefined) {
        removeElementOutput.textContent = `Removed "${removedElement}" from the beginning.`;
         console.log(`Shift: Removed "${removedElement}".`);
      } else {
        removeElementOutput.textContent = "Array is empty, nothing to remove.";
         console.log("Shift: Array was empty.");
      }
      updateArrayDisplay(); // Update the array display
    });
  }


  // --- Example 4: Iterating Through an Array (for loop) ---
  // Demonstrates looping through array elements using a for loop.
  const iterateArrayBtn = document.getElementById("iterateArrayBtn");
  const iterateArrayOutput = document.getElementById("iterateArrayOutput");

  if (iterateArrayBtn && iterateArrayOutput) {
    iterateArrayBtn.addEventListener("click", () => {
      // Clear previous output
      iterateArrayOutput.innerHTML = '';

      if (myMutableArray.length === 0) {
        iterateArrayOutput.textContent = "The array is currently empty.";
        console.log("Iterate Array: Array is empty.");
        return;
      }

      // Use a for loop to iterate through the array by index
      console.log("--- Iterate Array Example ---");
      for (let i = 0; i < myMutableArray.length; i++) {
        const element = myMutableArray[i];
        const p = document.createElement('p');
        p.textContent = `Element at index ${i}: "${element}"`;
        iterateArrayOutput.appendChild(p);
        console.log(`Index ${i}: "${element}"`);
      }
       console.log("------------------------------");
    });
  }


  // --- Example 5: Transforming Arrays (map, filter) ---
  // This is the original example demonstrating map, integrated into the new structure.
  const arrayInput = document.getElementById("arrayInput"); // Renamed from original for clarity
  const arrayBtn = document.getElementById("arrayBtn"); // Renamed from original for clarity
  const arrayOutput = document.getElementById("arrayOutput"); // Renamed from original for clarity

   if (arrayInput && arrayBtn && arrayOutput) {
      /**
       * Parses a comma-separated string into an array of numbers
       * @param {string} str
       * @returns {number[]}
       */
      const parseNumbers = (str) => str.split(",").map((s) => Number(s.trim()));

      /**
       * Doubles each number in the array using map()
       * @param {number[]} arr
       * @returns {number[]}
       */
      const doubleNumbers = (arr) => arr.map((n) => n * 2);

      // Expose functions to the window object for educational purposes
      window.parseNumbers = parseNumbers;
      window.doubleNumbers = doubleNumbers;

      console.log("Defined parseNumbers and doubleNumbers. Try calling doubleNumbers([1, 2, 3]) in the console!");

      arrayBtn.addEventListener("click", () => {
        const raw = arrayInput.value;
        const numbers = parseNumbers(raw);

        // Validate input: check if all elements are numbers
        if (numbers.some((n) => isNaN(n))) {
          arrayOutput.textContent = "Please enter valid numbers separated by commas.";
          console.log("Map Example: Invalid input - not all elements are numbers.");
          return;
        }

        const doubled = doubleNumbers(numbers);
        // Display original and transformed arrays
        arrayOutput.innerHTML = `<strong>Original:</strong> [${numbers.join(", ")}]<br><strong>Doubled:</strong> [${doubled.join(", ")}]`;
        console.log(`Map Example: Original: [${numbers.join(", ")}], Doubled: [${doubled.join(", ")}]`);
      });
   }

  console.log("Arrays.js loaded. Interact with the examples to learn about array operations.");
});
