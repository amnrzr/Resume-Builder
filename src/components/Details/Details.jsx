// Import React, useState, and useEffect from React library
import React, { useState, useEffect } from "react";

// Import components from MUI library
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

// Details component definition
function Details({pageno, education}) {
    // Function to get the current window size
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    };

    // State variable to manage window size
    const [windowSize, setWindowSize] = useState(getWindowSize());

    // Effect to update window size on resize
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    // Dummy details for testing
    const dummyDetails = {
        firstname: 'John',
        lastname: 'Doe',
        // ... (rest of the details)
    };

    // Get page data from session storage
    const val = sessionStorage.getItem('myState');

    // State variables to manage form data and page number
    const [page, setPage] = useState(0);
    const [userData, setUserData] = useState({
        // ... (initial user data)
    });

    // Function to add a new element to the user data
    const pushElement = (newElement) => {
        setUserData([...userData, newElement]);
    };

    // JSX structure for the Resume1 component
    <Resume1 userData={userData} setUserData={setUserData} pageaData={val} dummyDetails={dummyDetails} />

    // Switch statement to determine the form page to display
    const formDisplay = () => {
        switch (page) {
            case 0:
                return <Profile userData={userData} setUserData={setUserData} />;
            case 1:
                return <WorkEx userData={userData} setUserData={setUserData} />;
            case 2:
                return <Education userData={userData} setUserData={setUserData} education={education} />;
            case 3:
                return <KeySkills userData={userData} setUserData={setUserData} pushElement={pushElement} />;
            case 4:
                return <Resume1 userData={userData} setUserData={setUserData} pageData={val} dummyDetails={dummyDetails} />;
            default:
                return <Profile userData={userData} setUserData={setUserData} />;
        }
    };

    // Function to display form titles
    const formTitles = ["Profile", "Work Experience", "Education", "Key Skills", "final"];

    // JSX structure for the Details component
    return (
        <div>
            {/* Navbar component */}
            <Navbar/>
            
            <div className="detailsPage">
                {windowSize.innerWidth > 850 ? (
                    <List className="list" hidden={page == formTitles.length - 1}>
                        {/* Display form titles with color based on the current page */}
                        <Typography variant="h6" color={page === 0 ? 'blue' : 'black'} >Profile</Typography>
                        <Typography variant="h6" color={page === 1 ? 'blue' : 'black'}>Work Experience</Typography>
                        <Typography variant="h6" color={page === 2 ? 'blue' : 'black'}>Education</Typography>
                        <Typography variant="h6" color={page === 3 ? 'blue' : 'black'}>Key Skills</Typography>
                    </List>
                ) : null}
            
                {/* Display the current form page */}
                <div>{formDisplay()}</div>

                {windowSize.innerWidth > 850 ? (
                    // Previous and Next buttons for navigation
                    <div>
                        <button style={{position:'fixed',marginLeft:'75%'}} hidden={page == 0} type="submit" onClick={(e) => {e.preventDefault(); setPage((current) => current - 1)}}>Previous</button>
                        <button style={{position:'fixed',marginLeft:'81%'}} hidden={page == (formTitles.length) - 1} type="submit" onClick={(e) => {e.preventDefault(); setPage((current) => current + 1)}}>Next</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

// Export the Details component as the default export
export default Details;
