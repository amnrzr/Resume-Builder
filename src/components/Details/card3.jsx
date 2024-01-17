import React from "react";

function Card3({ userData, education,dummyDetails }) {
  console.log("userData:", userData);
  console.log("education:", education);
  let skillsset= userData.skills;
  const university = education ? education[0]?.university : dummyDetails.university;
  const graduationYear = education ? education[0]?.endYear : dummyDetails.startYear+'-'+dummyDetails.endYear;
  
  return (
    <div>
      <div id="resume1" className="elegant-theme card-resume resume-container">
        <header className="header">
          <h1>{userData.firstname} {userData.lastname}</h1>
          <p>Web Developer</p>
        </header>
        <div className="form-row">
          <section className="section wrap">
            <h4>Contact</h4>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.number}</p>
            <p>Address:{userData.address}</p>
            <p>Objective: {userData.objective}</p>
          </section>

          <section className="section2">
            <h4>Education</h4>
            <p>University{university}</p>
            <p>Graduation Year: {graduationYear}</p>
          </section>
        </div>
        <section className="section3">
          <h4>Work Experience</h4>
          <p>Title: {userData.title}</p>
          <p>Company:{userData.company}</p>
          <p>Year:{userData.year}</p>
          <p>Responsibilities: {userData.responsibilities}</p>
        </section>

        <section className="section3">
          <h4>Skills</h4>
          <p>{userData.skill1}, {userData.skill2}</p>
          <p>{userData.skill3}, {userData.skill4}</p>
        </section>
      </div>
    </div>
  );
}

export default Card3;
