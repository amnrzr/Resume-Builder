// Import React and ReactDOM (Note: React DOM doesn't need to be explicitly imported here)
import React from "react";
// Import your stylesheet and components (KeySkills and Button)
import './KeySkills';
import Button from "./addSkillButton";

// Function to handle the click of the "Add New" button
const handleAddButtonClick = () => {
  // Function to add a new element
  function addelement() {
    // Create a new div element
    let nw = document.createElement('div');
    // Add HTML content to the new div element
    var htmlContent = `<h2>hi</h2>`;
    // Append the HTML content to the new div element
    nw.innerHTML += htmlContent;
    // Append the new div element to the 'form' element in the DOM
    document.getElementById('form').append(nw);
  }

  // Return JSX structure
  return (
    <div>
      {/* Your form goes here */}
      <div id="form"></div>

      {/* Use the Button component */}
      <button id="addButton" onClick={addelement}>
        Add New
      </button>
      
      {/* Note: Remove the function invocation '()' from onClick to ensure it's not immediately invoked */}
    </div>
  );
};
