// Import the React library
import React from "react";

// Define the Card1 component
function Card1({ userData, education, dummyDetails }) {
  // Log user data and education information for debugging
  console.log("userData:", userData);
  console.log("education:", education);

  // Extract university and graduationYear based on education data or fallback to dummyDetails
  const university = education ? education[0]?.university : dummyDetails.university;
  const graduationYear = education ? education[0]?.endYear : dummyDetails.startYear + '-' + dummyDetails.endYear;

  // JSX structure for the Card1 component
  return (
    <div>
      <div id="resume1" className="clean-theme card-resume resume-container">
        <header className="header">
          {/* Display user's full name and job title */}
          <h1>{userData.firstname} {userData.lastname}</h1>
          <p>Web Developer</p>
        </header>

        <div className="form-row">
          {/* Contact and Objective section */}
          <section className="section wrap">
            <h4>Contact</h4>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.number}</p>
            <p>Address: {userData.address}</p>
            <p>Objective: {userData.objective}</p>
          </section>

          {/* Education section */}
          <section className="section2">
            <h4>Education</h4>
            <p>University: {university}</p>
            <p>Graduation Year: {graduationYear}</p>
          </section>
        </div>

        {/* Work Experience section */}
        <section className="section3">
          <h4>Work Experience</h4>
          <p>Title: {userData.title}</p>
          <p>Company: {userData.company}</p>
          <p>Year: {userData.year}</p>
          <p>Responsibilities: {userData.responsibilities}</p>
        </section>

        {/* Skills section */}
        <section className="section3">
          <h4>Skills</h4>
          <p>{userData.skill1}, {userData.skill2}</p>
          <p>{userData.skill3}, {userData.skill4}</p>
        </section>
      </div>
    </div>
  );
}

// Export the Card1 component as the default export
export default Card1;
