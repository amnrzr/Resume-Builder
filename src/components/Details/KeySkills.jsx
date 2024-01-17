
import React from "react";
import { createContext,useContext } from "react";
import Resume1 from "./resume1";


const KeySkills = ({ userData, setUserData,pushElement }) => {
  const handleChange = (e) => {
    // Update the state with the new value when the input changes
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const addele = () => {
    let i=5;
    let nw = document.createElement('div');
    var htmlContent = `<div className="form-row"><div className="form-group-Card"><input
        type="text"
        placeholder="Add Additional Skill"
        id="AdditionalSkill"
        name="${i}skill"
        value="${userData.i}"
        onChange='${handleChange}' {/* Fix the function name here */}
        // required
        
      /></div></div>`;
      i++;
    nw.innerHTML += htmlContent;
    let form = document.querySelector('.form');
    form.appendChild(nw);
    // pushElement("New Element");
    console.log(userData);
  };
  const ResumeContext = createContext();



  return (
    <div>
      <div className="skillCard">
        <div className="education-form">
          <h2>Skill Details</h2>
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <div className="form-row">
              <div className="form-group-Card">
                <input
                  type="text"
                  placeholder="Add Additional Skill"
                  id="AdditionalSkill"
                  name="skill1"
                  value={userData.skill1}
              onChange={(e)=>{setUserData({...userData, skill1:e.target.value})}}
              required
                />
              </div>
              <div className="form-group-Card">
                <input
                  type="text"
                  id="skill2"
                  placeholder="Add Additional Skill"
                  name="skill2"
                  value={userData.skill2}
              onChange={(e)=>{setUserData({...userData, skill2:e.target.value})}}
              required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group-Card">
                <input
                  type="text"
                  id="skill3"
                  placeholder="Add Additional Skill"
                  name="skill3"
                  value={userData.skill3}
              onChange={(e)=>{setUserData({...userData, skill3:e.target.value})}}
              required
                />
              </div>
              <div className="form-group-Card">
                <input
                  type="text"
                  id="skill4"
                  placeholder="Add Additional Skill"
                  name="skill4"
                  value={userData.skill4}
              onChange={(e)=>{setUserData({...userData, skill4:e.target.value})}}
              required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      
      
    </div>
  );
};

export default KeySkills;
