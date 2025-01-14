// src/components/MiniDrawer.tsx
import React, { ReactNode } from "react";
import { styled, useTheme, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface MiniDrawerProps {
 children: ReactNode;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): React.CSSProperties => ({
 width: drawerWidth,
 transition: theme.transitions.create("width", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
 }),
 overflowX: "hidden",
});

const closedMixin = (theme: Theme): React.CSSProperties => ({
 transition: theme.transitions.create("width", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 overflowX: "hidden",
 width: `calc(${theme.spacing(7)} + 1px)`,
 [theme.breakpoints.up("sm")]: {
  width: `calc(${theme.spacing(8)} + 1px)`,
 },
});

const DrawerHeader = styled("div")(({ theme }) => ({
 display: "flex",
 alignItems: "center",
 justifyContent: "flex-end",
 padding: theme.spacing(0, 1),
 ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
 open?: boolean;
}

const AppBar = styled(MuiAppBar, {
 shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
 zIndex: theme.zIndex.drawer + 1,
 transition: theme.transitions.create(["width", "margin"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}));

const Drawer = styled(MuiDrawer, {
 shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
 width: drawerWidth,
 flexShrink: 0,
 whiteSpace: "nowrap",
 boxSizing: "border-box",
 ...(open && {
  ...openedMixin(theme),
  "& .MuiDrawer-paper": openedMixin(theme),
 }),
 ...(!open && {
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
 }),
}));

const MiniDrawer: React.FC<MiniDrawerProps> = ({ children }) => {
 const theme = useTheme();
 const [open, setOpen] = React.useState(false);

 const handleDrawerOpen = () => {
  setOpen(true);
 };

 const handleDrawerClose = () => {
  setOpen(false);
 };

 return (
  <Box sx={{ display: "flex" }}>
   <CssBaseline />
   <AppBar position="fixed" open={open}>
    <Toolbar>
     <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
       marginRight: 5,
       ...(open && { display: "none" }),
      }}
     >
      <MenuIcon />
     </IconButton>
     <Typography variant="h6" noWrap component="div">
      Task Management
     </Typography>
    </Toolbar>
   </AppBar>
   <Drawer variant="permanent" open={open}>
    <DrawerHeader>
     <IconButton onClick={handleDrawerClose}>
      {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
     </IconButton>
    </DrawerHeader>
    <Divider />
    {/* Your drawer items go here */}
   </Drawer>
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    {children}
   </Box>
  </Box>
 );
};

export default MiniDrawer;
