// Import React and useState from React library
import React, { useState } from "react";

// Import Details and Card3 components
import Details from "./Details";
import Card3 from "./card3";

// Education component definition
function Education({ userData, setUserData }) {
  // State to manage education details using an array of objects
  const [education, setEducation] = useState([
    {
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    },
  ]);

  // Function to handle changes in education details
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  // Function to add a new education entry
  const addEducation = () => {
    setEducation([...education, { university: "", degree: "", startYear: "", endYear: "" }]);
  };

  // Function to remove an education entry
  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  // JSX structure for the Education component
  return (
    <div>
      <section className="education-form">
        <h2>Education Details</h2>
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              {/* Input fields for university, degree, start year, and end year */}
              <input
                type="text"
                placeholder="University"
                value={edu.university}
                onChange={(e) => handleEducationChange(index, "university", e.target.value)}
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
              />
              <input
                type="text"
                placeholder="Start Year"
                value={edu.startYear}
                onChange={(e) => handleEducationChange(index, "startYear", e.target.value)}
              />
              <input
                type="text"
                placeholder="End Year"
                value={edu.endYear}
                onChange={(e) => handleEducationChange(index, "endYear", e.target.value)}
              />
              {/* Button to remove the education entry */}
              <button style={{ width: '70px', marginLeft: '320px', marginBottom: '5px' }} type="button" onClick={() => removeEducation(index)}>
                Remove
              </button>
            </div>
          ))}
          {/* Button to add a new education entry */}
          <button type="button" style={{ width: '70px', marginLeft: '320px' }} onClick={addEducation}>
            Add Education
          </button>
          {/* Render Details and Card3 components with education data */}
          <div className="opacity">
            <Details education={education} />
            <Card3 userData={userData} setUserData={setUserData} education={education} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Export the Education component as the default export
export default Education;
