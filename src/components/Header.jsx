// Import styles for Navbar
import "./Navbar.css";

// Import React and other necessary components from libraries
import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define the width of the drawer
const drawerWidth = 240;

// Create a custom theme for the logo
const logoTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

// Navbar component definition
function Navbar(props) {
  // State to manage mobile drawer open/close
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Function to handle toggle of the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // JSX structure for the drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/">
          <img
            src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
            height="30px"
            alt="AlmaBetter"
          />
        </NavLink>
      </Typography>
      <Divider />
      <List
        className="drawerLinks"
        sx={{
          display: "flex",
          textAlign: "left",
          paddingLeft: "20px",
          flexDirection: "column",
        }}>
        <NavLink className="nav-link" to="/" color="inherit">
          Resume Templates
        </NavLink>
        <NavLink to="/my/resumes" className="nav-link" color="inherit">
          My Resumes
        </NavLink>
        <NavLink to="/about" color="inherit" className="nav-link">
          About us
        </NavLink>
      </List>
    </Box>
  );

  // JSX structure for the main Navbar component
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={logoTheme}>
          {/* Main AppBar for larger screens */}
          <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
            <Toolbar id="toolbar">
              {/* Menu icon for smaller screens */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                id="icon"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}>
                <MenuIcon />
              </IconButton>

              {/* Logo and brand for the Navbar */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  fontSize: "25px",
                  position: "relative",
                  top: "5px",
                }}>
                <NavLink to="/" className="homeIcon">
                  <img
                    src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
                    height="30px"
                    alt="Alma Better"
                  />
                </NavLink>
              </Typography>

              {/* Navigation links for larger screens */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        {/* Drawer for smaller screens */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

// Export the Navbar component as the default export
export default Navbar;
