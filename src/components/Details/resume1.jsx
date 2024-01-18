// Import React, useState, useContext, and other necessary libraries
import React, { useState, useContext } from "react";
import html2pdf from 'html2pdf.js';
import './Form.css';
import jsPDF from 'jspdf';
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";

// Define the Resume1 component
function Resume1({ userData, setUserData, pageData, education, dummyDetails }) {
  console.log('pageData in Resume1:', pageData);

  // State for additional data input
  const [additionalData, setAdditionalData] = useState('');
  
  // Handler for additional data input change
  const HandleChange = (e) => {
    setAdditionalData(e.target.value);
  };

  // Function to generate PDF
  const MakePDF = () => {
    const element = document.getElementById('resume1');
    const filenameInput = document.getElementById('filenameInput');
    const enteredFilename = filenameInput.value.trim() === '' ? 'default-filename' : filenameInput.value;

    // Options for PDF generation
    const options = {
      margin: 10,
      filename: `${enteredFilename}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Adjust scale as needed
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', width: 210, height: 1200 }, // Adjust width and height as needed
    };

    // Generate PDF with the specified options
    html2pdf(element, options);
  };

  // Function to determine which card to display based on pageData
  function cardDisplay() {
    switch (pageData) {
      case '1':
        return <Card1 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education} />;
      case '2':
        return <Card2 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education} />;
      case '3':
        return <Card3 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education} />;
      case '4':
        return <Card4 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education} />;
      default:
        return <Card1 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education} />;
    }
  }

  // JSX structure for the Resume1 component
  return (
    <div className="form-row">
      {cardDisplay()}
      {/* Input for additional data */}
      <input
        className="filename-input"
        type="text"
        id="filenameInput"
        placeholder="Enter File Name"
        value={additionalData}
        onChange={HandleChange}
      />
      {/* Button to generate and save PDF */}
      <button style={{ position: 'fixed', marginLeft: '55%' }} onClick={MakePDF}>save</button>
    </div>
  );
}

// Export the Resume1 component as the default export
export default Resume1;
