import React, { useState, useEffect } from "react";
import {grey} from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Form, Link} from "react-router-dom";
import { Container, List, TextField, selectClasses } from "@mui/material";
import Header from "../Header";
import KeySkills from "./KeySkills";
import Profile from "./Profile";
import Education from "./Education";
import WorkEx from "./WorkEx";
import Resume1 from "./resume1";
import Navbar from "../Header";
import Sidebar from '../Sidebar/Sidebar'

import './Form.css';

function Details({pageno,education}){
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
      };
    
      const [windowSize, setWindowSize] = useState(getWindowSize());
    
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);
    const dummyDetails = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        number: '123-456-7890',
        address: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        postalcode: '12345',
        objective: 'A passionate web developer seeking new opportunities.',
        degree: 'Bachelor of Science',
        type: 'Computer Science',
        university: 'University of Tech',
        startYear: '2018',
        endYear: '2022',
        skills: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Node.js', 'MongoDB'],
        experiences: [
          {
            title: 'Software Engineer',
            company: 'Tech Solutions Inc.',
            year: '2019-2021',
            responsibilities: 'Developed and maintained web applications.',
          },
        ],
      };
    const val = sessionStorage.getItem('myState');
    ;
   
        const [page,setPage] =useState(0);

        const [userData,setUserData] =useState({

            firstname:'',
            lastname:'',
            email:'',
            number:'',
            address:'',
            city:'',
            state:'',
            postalcode:'',
            objective:'',
            degree:'btech',
            type:'',
            university:'xyz',
            startyear:'2019',
            endyear:'2023',
            title:'',
            company:'',
            responsibilities:'',
            year:'',
            
            skill1:'',
            skill2:'',
            skill3:'',
            skill4:''
        




        });
        const pushElement = (newElement) => {
            setUserData([...userData, newElement]);
        };
        <Resume1 userData={userData} setUserData={setUserData} pageaData={val} dummyDetails={dummyDetails} />
        // const onInput =(e)=>{

        //     const {name,value}=e.target;

        //     setProfileData({
        //         ...profileData,
        //         [name]:value,
        //     });
        // };


        // const Submit =(e)=>{
        //     e.preventDefault();
        //     console.log(profileData);
        // }

        console.log("received on details page val",val);

        const formDisplay =()=>{

            switch(page){
                case 0:
                   return <Profile userData={userData} setUserData={setUserData} />
                case 1:
                    return <WorkEx userData={userData} setUserData={setUserData}/>
                case 2:
                    return(
                        <div>
                          <Education userData={userData} setUserData={setUserData} education={education} />
                        </div>
                      )
                  case 3:
                    return <KeySkills userData={userData} setUserData={setUserData} pushElement={pushElement}/>
                case 4:
                    return <Resume1 userData={userData} setUserData={setUserData} pageData={val} dummyDetails={dummyDetails} />
                default:
                    return <Profile userData={userData} setUserData={setUserData}/>
            }

        }

        

        const formTitles =["Profile","Work Experience", "Education","Key Skills","final"]
    
    return(
        <div>
            <Navbar/>
            
            <div className="detailsPage">
            {windowSize.innerWidth > 850 ? (
                <List className="list" hidden={page==formTitles.length-1}>
               
                    <Typography variant="h6" color={page === 0 ? 'blue' : 'black'} >Profile</Typography>
                    <Typography variant="h6" color={page === 1 ? 'blue' : 'black'}>Work Experience</Typography>
                    <Typography variant="h6" color={page === 2 ? 'blue' : 'black'}>Education</Typography>
                    <Typography variant="h6" color={page === 3 ? 'blue' : 'black'}>Key Skills</Typography>
                </List>):null}
            
                {/* <h2>{formTitles[page]}</h2> */}
                    {/* <form onSubmit={(e)=>e.preventDefault()}> */}
                        <div>{formDisplay()}</div>
                        {windowSize.innerWidth > 850 ? (
                           

                        <button style={{position:'fixed',marginLeft:'75%'}} hidden={page==0} type="submit" onClick={(e)=>{e.preventDefault();setPage((current)=>current-1)}}>Previous</button>
                        ):null}
                        {windowSize.innerWidth > 850 ? (
                        <button style={{position:'fixed',marginLeft:'81%'}} hidden={page==(formTitles.length)-1} type="submit" onClick={(e)=>{e.preventDefault();setPage((current)=>current+1)}}>Next</button>
                    ):null}
                  

            </div>
        </div>
    )
}
export default Details;