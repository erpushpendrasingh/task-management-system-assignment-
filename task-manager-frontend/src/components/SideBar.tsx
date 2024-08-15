// // src/components/SideBar.tsx
// import React from "react";
// import {
//  Drawer,
//  List,
//  ListItem,
//  ListItemIcon,
//  ListItemText,
//  Divider,
//  Toolbar,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Link } from "react-router-dom";

import { HomeRepairServiceOutlined } from "@mui/icons-material";
import {
 Divider,
 Drawer,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
 Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const SideBar: React.FC = () => {
 return (
  <Drawer
   sx={{
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
     width: drawerWidth,
     boxSizing: "border-box",
    },
   }}
   variant="permanent"
   anchor="left"
  >
   <Toolbar />
   <Divider />
   <List>
    <ListItem button component={Link} to="/">
     <ListItemIcon>
      <HomeRepairServiceOutlined />
     </ListItemIcon>
     <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/tasks">
     <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
     <ListItemText primary="Tasks" />
    </ListItem>
    <ListItem button component={Link} to="/profile">
     <ListItemIcon>{/* <AccountCircleIcon /> */}</ListItemIcon>
     <ListItemText primary="Profile" />
    </ListItem>
   </List>
  </Drawer>
 );
};

export default SideBar;
