// objects.js - Demonstrates object concepts and operations in JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // Initialize a sample object that will be used and modified by the examples.
  // Using 'let' because we will be adding and removing properties.
  let myObject = {
    name: "Default Name",
    age: 0,
    city: "Unknown"
  };

  // Function to update the display of the current object state
  const updateObjectDisplay = (outputElementId) => {
    const displayElement = document.getElementById("currentObjectDisplay");
    if (displayElement) {
      // Use JSON.stringify for a readable representation of the object
      displayElement.innerHTML = `<strong>Current Object:</strong><pre>${JSON.stringify(myObject, null, 2)}</pre>`;
      console.log("Current Object State:", myObject);
    }
  };

  // Initial display of the object
  updateObjectDisplay();


  // --- Example 1: Creating and Displaying an Object ---
  // Demonstrates creating or updating an object based on input.
  const createObjNameInput = document.getElementById("createObjNameInput");
  const createObjAgeInput = document.getElementById("createObjAgeInput");
  const createObjBtn = document.getElementById("createObjBtn");
  const createObjOutput = document.getElementById("createObjOutput");

  if (createObjNameInput && createObjAgeInput && createObjBtn && createObjOutput) {
    createObjBtn.addEventListener("click", () => {
      const name = createObjNameInput.value.trim();
      const age = Number(createObjAgeInput.value);

      if (!name || isNaN(age)) {
        createObjOutput.textContent = "Please provide a valid name and age.";
        console.log("Create/Update Object: Invalid input.");
        return;
      }

      // Update the existing object with new values
      myObject.name = name;
      myObject.age = age;

      createObjOutput.textContent = "Object created/updated.";
      console.log("Create/Update Object: Object updated.", myObject);
      updateObjectDisplay(); // Update the main object display
    });
  }


  // --- Example 2: Accessing Properties ---
  // Demonstrates accessing object properties using bracket notation.
  const accessKeyInput = document.getElementById("accessKeyInput");
  const accessPropertyBtn = document.getElementById("accessPropertyBtn");
  const accessPropertyOutput = document.getElementById("accessPropertyOutput");

  if (accessKeyInput && accessPropertyBtn && accessPropertyOutput) {
    accessPropertyBtn.addEventListener("click", () => {
      const keyToAccess = accessKeyInput.value.trim();

      if (keyToAccess === "") {
        accessPropertyOutput.textContent = "Please enter a key to access.";
        console.log("Access Property: Key input is empty.");
        return;
      }

      // Access the property using bracket notation. This works even if the key doesn't exist.
      const value = myObject[keyToAccess];

      // Check if the property exists on the object
      if (myObject.hasOwnProperty(keyToAccess)) {
        accessPropertyOutput.textContent = `Value of '${keyToAccess}': ${JSON.stringify(value)}`;
        console.log(`Access Property: Accessed '${keyToAccess}' with value:`, value);
      } else {
        accessPropertyOutput.textContent = `Property '${keyToAccess}' not found on the object.`;
        console.log(`Access Property: Property '${keyToAccess}' not found.`);
      }
    });
  }


  // --- Example 3: Modifying Properties ---
  // Demonstrates changing the value of an existing property.
   const modifyKeyInput = document.getElementById("modifyKeyInput");
   const modifyValueInput = document.getElementById("modifyValueInput");
   const modifyPropertyBtn = document.getElementById("modifyPropertyBtn");
   const modifyPropertyOutput = document.getElementById("modifyPropertyOutput");

   if (modifyKeyInput && modifyValueInput && modifyPropertyBtn && modifyPropertyOutput) {
     modifyPropertyBtn.addEventListener("click", () => {
       const keyToModify = modifyKeyInput.value.trim();
       const newValue = modifyValueInput.value;

       if (keyToModify === "") {
         modifyPropertyOutput.textContent = "Please enter a key to modify.";
         console.log("Modify Property: Key input is empty.");
         return;
       }

       // Check if the property exists before attempting to modify (optional but good practice)
       if (myObject.hasOwnProperty(keyToModify)) {
           // Modify the property value
           myObject[keyToModify] = newValue;
           modifyPropertyOutput.textContent = `Modified property '${keyToModify}' to ${JSON.stringify(newValue)}.`;
            console.log(`Modify Property: Modified '${keyToModify}'. New object:`, myObject);
           updateObjectDisplay(); // Update the main object display
       } else {
            modifyPropertyOutput.textContent = `Property '${keyToModify}' not found. Cannot modify.`;
            console.log(`Modify Property: Property '${keyToModify}' not found.`);
       }
     });
   }


  // --- Example 4: Adding New Properties ---
  // Demonstrates adding a new key-value pair to the object.
  const addKeyInput = document.getElementById("addKeyInput");
  const addValueInput = document.getElementById("addValueInput");
  const addPropertyBtn = document.getElementById("addPropertyBtn");
  const addPropertyOutput = document.getElementById("addPropertyOutput");

  if (addKeyInput && addValueInput && addPropertyBtn && addPropertyOutput) {
    addPropertyBtn.addEventListener("click", () => {
      const keyToAdd = addKeyInput.value.trim();
      const valueToAdd = addValueInput.value;

      if (keyToAdd === "") {
        addPropertyOutput.textContent = "Please enter a key to add.";
        console.log("Add Property: Key input is empty.");
        return;
      }

      // Add the new property to the object
      myObject[keyToAdd] = valueToAdd;

      addPropertyOutput.textContent = `Added property '${keyToAdd}' with value ${JSON.stringify(valueToAdd)}.`;
      console.log(`Add Property: Added '${keyToAdd}'. New object:`, myObject);
      updateObjectDisplay(); // Update the main object display
    });
  }


  // --- Example 5: Deleting Properties ---
  // Demonstrates removing a property from the object using the 'delete' keyword.
  const deleteKeyInput = document.getElementById("deleteKeyInput");
  const deletePropertyBtn = document.getElementById("deletePropertyBtn");
  const deletePropertyOutput = document.getElementById("deletePropertyOutput");

  if (deleteKeyInput && deletePropertyBtn && deletePropertyOutput) {
    deletePropertyBtn.addEventListener("click", () => {
      const keyToDelete = deleteKeyInput.value.trim();

       if (keyToDelete === "") {
        deletePropertyOutput.textContent = "Please enter a key to delete.";
        console.log("Delete Property: Key input is empty.");
        return;
      }

      // Check if the property exists before attempting to delete
      if (myObject.hasOwnProperty(keyToDelete)) {
        // Delete the property from the object
        delete myObject[keyToDelete];
        deletePropertyOutput.textContent = `Deleted property '${keyToDelete}'.`;
        console.log(`Delete Property: Deleted '${keyToDelete}'. New object:`, myObject);
        updateObjectDisplay(); // Update the main object display
      } else {
         deletePropertyOutput.textContent = `Property '${keyToDelete}' not found. Cannot delete.`;
         console.log(`Delete Property: Property '${keyToDelete}' not found.`);
      }
    });
  }


  // --- Example 6: Iterating Through Properties ---
  // Demonstrates looping through the key-value pairs of an object.
  const iterateObjectBtn = document.getElementById("iterateObjectBtn");
  const iterateObjectOutput = document.getElementById("iterateObjectOutput");

  if (iterateObjectBtn && iterateObjectOutput) {
    iterateObjectBtn.addEventListener("click", () => {
      // Clear previous output
      iterateObjectOutput.innerHTML = '';

      const keys = Object.keys(myObject);

      if (keys.length === 0) {
        iterateObjectOutput.textContent = "The object is currently empty.";
        console.log("Iterate Object: Object is empty.");
        return;
      }

      // Use Object.entries() to get [key, value] pairs and iterate
      console.log("--- Iterate Object Example ---");
      Object.entries(myObject).forEach(([key, value]) => {
        const p = document.createElement('p');
        // Use JSON.stringify to handle different value types correctly in the display
        p.textContent = `Key: '${key}', Value: ${JSON.stringify(value)}`;
        iterateObjectOutput.appendChild(p);
        console.log(`Key: '${key}', Value:`, value);
      });
      console.log("------------------------------");
    });
  }

  console.log("Objects.js loaded. Interact with the examples to learn about object operations.");
});
