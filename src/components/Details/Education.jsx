import React, { useState } from "react";
import Details from "./Details";
import Card3 from "./card3";

function Education({ userData, setUserData }) {
  const [education, setEducation] = useState([
    {
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { university: "", degree: "", startYear: "", endYear: "" }]);
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  return (
    <div>
      <section className="education-form">
        <h2>Education Details</h2>
        <div>
          {education.map((edu, index) => (
            <div key={index}>
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
              <button style={{ width: '70px', marginLeft: '320px', marginBottom: '5px' }} type="button" onClick={() => removeEducation(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" style={{ width: '70px', marginLeft: '320px' }} onClick={addEducation}>
            Add Education
          </button>
          <div className="opacity">
            <Details education={education} />
            <Card3 userData={userData} setUserData={setUserData} education={education} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
