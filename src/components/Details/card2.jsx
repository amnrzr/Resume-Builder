// Import the React library
import React from "react";

// Define the Card2 component
function Card2({ userData, setUserData, education }) {

  // JSX structure for the Card2 component
  return (
    <div>
      <div id="resume1" className="card1 card-resume resume-container blue-theme">
        <header className="header">
          {/* Display user's full name and job title */}
          <h1>{userData.firstname} {userData.lastname}</h1>
          {/* <div className="background"></div> */}
          <p>Web Developer</p>
        </header>

        {/* Contact and Objective section */}
        <div className="form-row">
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
            <p>Graduation Year: 2022</p>
          </section>
        </div>

        {/* Work Experience section */}
        <section className="section3">
          <h4>Work Experience</h4>
          <p>Software Engineer - Tech Solutions Inc. (2019-2021)</p>
          <p>Responsibilities: Developed and maintained web applications.</p>
        </section>

        {/* Skills section */}
        <section className="section3">
          <h4>Skills</h4>
          <p>JavaScript, React.js, HTML, CSS, Node.js, MongoDB</p>
        </section>
      </div>
    </div>
  );
}

// Export the Card2 component as the default export
export default Card2;
