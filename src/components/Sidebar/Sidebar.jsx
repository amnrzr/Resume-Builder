// Import React and necessary components from libraries
import React from "react";
import { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Define the height for each item in the menu
const ITEM_HEIGHT = 48;

// Sidebar component definition
const Sidebar = (props) => {
  // Function to get the current window size
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  // State variables for menu anchor element, window size, and menu open status
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);

  // Function to handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Effect to update window size on resize
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    // Event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // JSX structure for the Sidebar component
  return (
    <div>
      {/* Conditional rendering based on window size */}
      {windowSize.innerWidth > 850 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
            height: "fit-content",
          }}
        >
          <List disablePadding>
            {/* Personal Info ListItem */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={props.tab === 0 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null}
              >
                <AccountCircleOutlinedIcon color={props.tab === 0 ? "info" : "disabled"} />
                <ListItemText
                  className="IcoSpace"
                  primary="Personal Info"
                  sx={props.tab === 0 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            {/* Add the rest of your ListItems here */}
          </List>
        </Box>
      ) : (
        <div>
          {/* Menu for smaller screens */}
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          {/* Long menu */}
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {/* Personal Info MenuItem */}
            <MenuItem
              sx={props.tab === 0 ? { color: "rgb(0, 128, 255)" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <AccountCircleOutlinedIcon color={props.tab === 0 ? "info" : "disabled"} />
              <ListItemText
                className="IcoSpace"
                primary="Personal Info"
                sx={props.tab === 0 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
              />
            </MenuItem>
            <Divider />
            {/* Add the rest of your MenuItems here */}
          </Menu>
        </div>
      )}
    </div>
  );
};

// Export the Sidebar component as the default export
export default Sidebar;
