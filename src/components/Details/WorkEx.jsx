import React from "react";



const WorkEx =({userData,setUserData})=>{
    return(
        <div>
        <div className="education-form">
        <h2>Work Experience</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="title">Designation:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={userData.title}
              onChange={(e)=>{setUserData({...userData, title:e.target.value})}}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={userData.company}
              onChange={(e)=>{setUserData({...userData, company:e.target.value})}}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="Responsibilities">Responsibilities:</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={userData.responsibilities}
              onChange={(e)=>{setUserData({...userData, responsibilities:e.target.value})}}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="graduationYear">Graduation Year:</label>
            <input
              type="text"
              id="graduationYear"
              name="graduationYear"
              // value={userData.graduationYear}
              // onChange={handleChange}
              // required
            />
          </div>
  
        </form>
      </div>
      </div>
    )
}
export default WorkEx;