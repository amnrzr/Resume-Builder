import React from "react";
import { ReactDOM } from "react";
import './KeySkills';
import Button from "./addSkillButton";

    // document.getElementById('addButton').addEventListener('click',function(){
    //     let nw = document.createElement('div');
    //     var htmlContent = `<div><div className="form-row"><div className="form-group-Card"
    //     <input
    //         type="text"
    //         placeholder="Add Additional Skill" id="AdditionalSkill"
    //         name="skill1"
    //          value={userdata.skillA1}
    //         onChange={(e)=>setUserData({...userData,{name,value}})}
    //         // required/></div></div>`
    //     nw.innerHTML+=htmlContent;
    //     document.getElementById('form').append(nw);

    // })    

const handleAddButtonClick = () => {

    function addelement(){
        
        let nw = document.createElement('div');
        var htmlContent = `<h2>hi</h2>`
        // <div className="form-row"><div className="form-group-Card">
        //     <input
        //         type="text"
        //         placeholder="Add Additional Skill"
        //         id="AdditionalSkill"
        //         name="skill1"
        //         value={userData.skillA1}
        //         onChange={(e) => setUserData({ ...userData, skillA1: e.target.value })}
        //         // required
        //       /></div></div>`;
    
        nw.innerHTML += htmlContent;
        document.getElementById('form').append(nw);
        
        
    
    }
      return (
        <div>
          {/* Your form goes here */}
          <div id="form"></div>
    
          {/* Use the Button component */}
          <button id="addButton" onClick={addelement()}>
      Add New
    </button>
          {/* document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('addButton').addEventListener('click', handleAddButtonClick);
          }); */}
          {/* Add an event listener to the button */}
          {/* <script>
            document.getElementById('addButton').addEventListener('click', handleAddButtonClick);
          </script> */}
        </div>
      );
      };