import React from 'react';
import {Link} from "react-router-dom";
import './styleComponents.css'
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#ffffff'
    },
  },
});

const Header = () => {
  return (
    <AppBar theme={theme} color={"primary"} position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar variant="dense">
          <Button theme={theme} color={'secondary'} href={"/myprofile"} variant="outlined">My Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;