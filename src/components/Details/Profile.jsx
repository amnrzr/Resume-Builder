import { Container } from "@mui/material";
import React, { useState,useEffect} from "react";
import './Form.css';

const Profile = ({ userData, setUserData }) => {
    const [windowSize, setWindowSize] = useState({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    return(
        
        <Container maxWidth="md"> {/* Adjust the maxWidth based on your design */}
         {windowSize.innerWidth > 850 ? (
        <div>

            <div className="education-form">
            <h2>profile Details</h2>

            <form style={{display:'inline'+'!important'}}>
            <div className="form-group">
                <label htmlFor="firstname"> Name</label>
                <input type="text" placeholder="Firstname" name="firstname" value={userData.firstname} onChange={(e)=>{setUserData({...userData, firstname:e.target.value})}}/>

                <input type="text" placeholder="Lastname" name="Lastname" value={userData.lastname} onChange={(e)=>{setUserData({...userData, lastname:e.target.value})}}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" name="email" value={userData.email} onChange={(e)=>{setUserData({...userData, email:e.target.value})}}/>
                </div>
                <div className="form-group">

                <label htmlFor="number">Number</label><input type="text" placeholder="Number" name="number" value={userData.number} onChange={(e)=>{setUserData({...userData, number:e.target.value})}}/>
                </div>
                <div className="form-group">

                <input type="text" placeholder="Address" name="address" value={userData.address} onChange={(e)=>{setUserData({...userData, address:e.target.value})}}/>
                <textarea type="text" maxlength="50" placeholder="Objective" name="objective" value={userData.objective} onChange={(e)=>{setUserData({...userData,objective:e.target.value})}}></textarea>            
            </div>
            </form>
            </div>
        </div>
        ): (<div><h2>Please Increase the window size to see content!!</h2></div>)}
        </Container>
    )
}
export default Profile;