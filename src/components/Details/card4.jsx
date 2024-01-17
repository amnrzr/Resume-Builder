import React from "react";


function Card4( {userData,setUserData}){

    return(<div>
        <div id="resume1" className="creative-blocks card-resume resume-container">
      <header className="header">
        <h1>{userData.firstname} {userData.lastname}</h1>
        {/* <div className="background"></div> */}

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
        <p>University of Tech - Bachelor of Science in Computer Science</p>
        <p>Graduation Year: 2022</p>
      </section>
</div>
      <section className="section3">
        <h4>Work Experience</h4>
        <p>Software Engineer - Tech Solutions Inc. (2019-2021)</p>
        <p>Responsibilities: Developed and maintained web applications.</p>
      </section>

      <section className="section3">
        <h4>Skills</h4>
        <p>JavaScript, React.js, HTML, CSS, Node.js, MongoDB</p>
      </section>
    </div>
    </div>)
}

export default Card4;