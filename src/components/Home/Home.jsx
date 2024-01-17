import React,{ useState } from "react";
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


const Header=()=>{
    // const [pageno,setPage] =useState({
    //     prop1:'0'}
    //     );
    const initial = 0;

   const [pageno ,setPage]=useState(()=>{
    const storedValue = sessionStorage.getItem('myState');
    return storedValue ? storedValue : initial;
    
   })
        const [showModal, setShowModal] = useState(false);
        const handleModalButtonClick = () => {
            // Show the modal when the button is clicked
            setShowModal(true);
          };
        
          const handleClose = () => {
            // Close the modal when the close button is clicked
            setShowModal(false);
          };
          
          const image1 =(e)=>{
            e.preventDefault();
            const newState = { ...pageno, prop1: '1' };
            setPage(1);
  
            sessionStorage.setItem('myState', 1 );
            console.log('before sending from home',pageno);
            setShowModal(true);
        }
        const image2 =(e)=>{
          e.preventDefault();
          const newState = { ...pageno, prop1: '2' };
          setPage(2);

          sessionStorage.setItem('myState', 2 );
          console.log('before sending from home',pageno);
          setShowModal(true);
      }
        const image3 =(e)=>{
            e.preventDefault();
            const newState = { ...pageno, prop1: '3' };
            setPage(3);

            sessionStorage.setItem('myState', 3 );
            console.log('before sending from home',pageno);
            // alert("You have selected resume template :01");
            setShowModal(true);
        }

        const image4 =(e)=>{
          e.preventDefault();
          const newState = { ...pageno, prop1: '4' };
          setPage(4);

          sessionStorage.setItem('myState', 4 );
          console.log('before sending from home',pageno);
          setShowModal(true);
      }
      const preventdef=()=>{
        
      }
        
    return(
      
    <Box sx={{flexGrow:1}} >
    <Navbar/>
        
        <Typography variant="h4" component="div" class="header-mid">Templates</Typography>
        <Typography variant="h7" component="div" text-align="start" paddingLeft="10%" fontSize="small">Select from the templates available</Typography>
       
        <Container className="style">
             <div className="imageContainer">
             <div class="middle">
              <button class="imageText" to="/details" onClick={image1}>Choose</button>
            </div>            
            <img src={Card1} alt="ye" text="img loaded" class="template-snaps"/>
            <div class="middle">
              <button class="imageText" to="/details" onClick={image2}>Choose</button>
            </div>      
            <img src={Card2} alt="ye" text="img loaded" class="template-snaps"/>
            <div class="middle">
              <button class="imageText" to="/details" onClick={image3}>Choose</button>
            </div>      
             
            <img src={Card3} alt="ye" text="img loaded" class="template-snaps img_img3"/>
            <div class="middle">
              <button class="imageText" to="/details" onClick={image4}>Choose</button>
            </div>      
            <img src={Card4} alt="ye" text="img loaded" class="template-snaps "/>
            
            
            </div>
            <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>You're about to proceed with your choice!!</Modal.Title>
          <Link to="/details" onClick={preventdef} >
          <Button variant="success" onClick={handleClose}>
            Proceed
        
          </Button>
          </Link>
        </Modal.Header>
        {/* <Modal.Body>
          This is your custom message. You can add any content, including buttons, here.
        </Modal.Body> */}
        
      </Modal>
        </Container>
        <div className="opacity">
        <Details pageno={pageno}/>
        {/* <Resume1 pageno={pageno}/> */}
        </div>

        
    </Box>
    )
};


export default Header;