// Import React and useState from React library
import React,{ useState } from "react";

// Import components from MUI library
import {grey} from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import './Home.css';
import Details from "../Details/Details";
import { Container, selectClasses } from "@mui/material";
import Card1 from './Card1.png';
import Card2 from './Card2.png';
import Card3 from './Card3.png';
import Card4 from './Card4.png';
import Resume1 from "../Details/resume1";
import { Modal } from 'react-bootstrap';
import Navbar from '../Header';

// Header component definition
const Header = () => {
    // State to manage the page number and the modal visibility
    const initial = 0;
    const [pageno, setPage] = useState(initial);
    const [showModal, setShowModal] = useState(false);

    // Function to handle the opening of the modal
    const handleModalButtonClick = () => {
        setShowModal(true);
    };

    // Function to handle the closing of the modal
    const handleClose = () => {
        setShowModal(false);
    };

    // Functions to handle the selection of different template images
    const image1 = (e) => {
        e.preventDefault();
        setPage(1);
        sessionStorage.setItem('myState', 1);
        setShowModal(true);
    }

    const image2 = (e) => {
        e.preventDefault();
        setPage(2);
        sessionStorage.setItem('myState', 2);
        setShowModal(true);
    }

    const image3 = (e) => {
        e.preventDefault();
        setPage(3);
        sessionStorage.setItem('myState', 3);
        setShowModal(true);
    }

    const image4 = (e) => {
        e.preventDefault();
        setPage(4);
        sessionStorage.setItem('myState', 4);
        setShowModal(true);
    }

    // Function to prevent the default behavior of a link
    const preventdef = () => {}

    // JSX structure for the Header component
    return (
        <Box sx={{flexGrow:1}}>
            {/* Navbar component */}
            <Navbar/>

            {/* Typography components for header */}
            <Typography variant="h4" component="div" class="header-mid">Templates</Typography>
            <Typography variant="h7" component="div" text-align="start" paddingLeft="10%" fontSize="small">Select from the templates available</Typography>
            
            {/* Container for template images */}
            <Container className="style">
                <div className="imageContainer">
                    {/* Template Image 1 */}
                    <div class="middle">
                        <button class="imageText" to="/details" onClick={image1}>Choose</button>
                    </div>            
                    <img src={Card1} alt="ye" text="img loaded" class="template-snaps"/>

                    {/* Template Image 2 */}
                    <div class="middle">
                        <button class="imageText" to="/details" onClick={image2}>Choose</button>
                    </div>      
                    <img src={Card2} alt="ye" text="img loaded" class="template-snaps"/>

                    {/* Template Image 3 */}
                    <div class="middle">
                        <button class="imageText" to="/details" onClick={image3}>Choose</button>
                    </div>      
                    <img src={Card3} alt="ye" text="img loaded" class="template-snaps img_img3"/>

                    {/* Template Image 4 */}
                    <div class="middle">
                        <button class="imageText" to="/details" onClick={image4}>Choose</button>
                    </div>      
                    <img src={Card4} alt="ye" text="img loaded" class="template-snaps"/>
                </div>

                {/* Modal for template selection confirmation */}
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>You're about to proceed with your choice!!</Modal.Title>
                        <Link to="/details" onClick={preventdef} >
                            <Button variant="success" onClick={handleClose}>
                                Proceed
                            </Button>
                        </Link>
                    </Modal.Header>
                </Modal>
            </Container>

            {/* Container for Details component */}
            <div className="opacity">
                <Details pageno={pageno}/>
            </div>
        </Box>
    );
};

// Export the Header component as the default export
export default Header;
