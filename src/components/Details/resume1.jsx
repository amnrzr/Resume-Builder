import React, {useState, useContext } from "react";
import html2pdf from 'html2pdf.js';

import './Form.css';
import jsPDF from 'jspdf';
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";

function Resume1({userData,setUserData,pageData,education,dummyDetails}){
  
  console.log('pageData in Resume1:', pageData);

  const [additionalData, setAdditionalData] = useState('');
  const HandleChange = (e) => {
    setAdditionalData(e.target.value);
  };


  const MakePDF = ()=>{
        const element = document.getElementById('resume1');

        const filenameInput = document.getElementById('filenameInput');
        const enteredFilename = filenameInput.value.trim() === '' ? 'default-filename' : filenameInput.value;
    
    
        // ,{
        //     callback:function(pdf){
        //         var pageCount = doc.internal.pageCount();
        //         console.loh(pageCount)
        //         pdf.save("resume.pdf");
        //     }
        // }))
        const options = {
    margin: 10,
    filename:`${enteredFilename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 }, // Adjust scale as needed
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', width: 210, height: 1200 }, // Adjust width and height as needed
  };

  // Generate PDF with the specified options
  html2pdf(element, options);
    };
    
    console.log(pageData)
    function cardDisplay(){
      switch(pageData){
        case '1':
          return <Card1 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education}/>
        case '2':
          return <Card2 userData={userData} setUserData={setUserData}dummyDetails={dummyDetails}education={education}/>
        case '3':
          return <Card3 userData={userData} setUserData={setUserData} dummyDetails={dummyDetails} education={education}/>
        case '4':
          return <Card4 userData={userData} setUserData={setUserData}dummyDetails={dummyDetails} education={education}/>
        default:
          return <Card1 userData={userData} setUserData={setUserData}dummyDetails={dummyDetails} education={education}/>
      }
    }

    return(
        // <div className='card-resume'>
        //     <h2>{userData.firstname} {userData.lastname}</h2>
        //     <br></br>
        // </div>
        <div className="form-row">

  
    {/* <div id="resume1" className="card-resume resume-container">
      <header className="header">
        <h1>{userData.firstname} {userData.lastname}</h1>
        <div className="background"></div>

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
    </div> */}

    {cardDisplay()}
 <script type="text/javascript" src="js/jspdf.min.js"></script>
            
 <input
        className="filename-input"
        type="text"
        id="filenameInput"
        placeholder="Enter File Name"
        value={additionalData}
        onChange={HandleChange}
      />
            <button style={{position:'fixed',marginLeft:'55%'}} onClick={MakePDF}>save</button>
            {/* <input type="text" id="filename" name="filename"         value={additionalData}
 onChange={HandleChange()}>Enter file nama</input> */}
        </div>
    )
};

export default Resume1;