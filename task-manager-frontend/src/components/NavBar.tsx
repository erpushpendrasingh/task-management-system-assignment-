// src/components/NavBar.tsx
import {
 AppBar,
 Avatar,
 Box,
 IconButton,
 Toolbar,
 Typography,
} from "@mui/material";
import React from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
// import { Box } from "@mui/system";

const NavBar: React.FC = () => {
 return (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
   <Toolbar>
    <Typography variant="h6" noWrap component="div">
     DevExtreme App
    </Typography>
    <Box sx={{ flexGrow: 1 }} />
    <IconButton color="inherit">
     <Avatar alt="User" src="/static/images/avatar/1.jpg" />
    </IconButton>
   </Toolbar>
  </AppBar>
 );
};

export default NavBar;
