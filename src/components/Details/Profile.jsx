// Import necessary dependencies
import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import './Form.css';

// Profile component definition
const Profile = ({ userData, setUserData }) => {
    // State to track the window size
    const [windowSize, setWindowSize] = useState({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });

    // useEffect hook to update window size on resize
    useEffect(() => {
        // Function to handle window resize and update state
        const handleWindowResize = () => {
            setWindowSize({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        };

        // Event listener for window resize
        window.addEventListener("resize", handleWindowResize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    // JSX structure for the Profile component
    return (
        <Container maxWidth="md"> {/* Adjust the maxWidth based on your design */}
            {windowSize.innerWidth > 850 ? ( {/* Display content only when window size is greater than 850 */}
                <div>
                    <div className="education-form">
                        <h2>profile Details</h2>

                        {/* Form for profile details */}
                        <form style={{ display: 'inline' + '!important' }}>
                            <div className="form-group">
                                <label htmlFor="firstname"> Name</label>
                                {/* Input fields for firstname and lastname */}
                                <input type="text" placeholder="Firstname" name="firstname" value={userData.firstname} onChange={(e) => { setUserData({ ...userData, firstname: e.target.value }) }} />
                                <input type="text" placeholder="Lastname" name="Lastname" value={userData.lastname} onChange={(e) => { setUserData({ ...userData, lastname: e.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                {/* Input field for email */}
                                <input type="text" placeholder="Email" name="email" value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Number</label>
                                {/* Input field for number */}
                                <input type="text" placeholder="Number" name="number" value={userData.number} onChange={(e) => { setUserData({ ...userData, number: e.target.value }) }} />
                            </div>
                            <div className="form-group">
                                {/* Input field for address */}
                                <input type="text" placeholder="Address" name="address" value={userData.address} onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }} />
                                {/* Textarea for objective */}
                                <textarea type="text" maxLength="50" placeholder="Objective" name="objective" value={userData.objective} onChange={(e) => { setUserData({ ...userData, objective: e.target.value }) }}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div><h2>Please Increase the window size to see content!!</h2></div> {/* Display a message if window size is less than or equal to 850 */}
            )}
        </Container>
    )
}

// Export the Profile component as the default export
export default Profile;
