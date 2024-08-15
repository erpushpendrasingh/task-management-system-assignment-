// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
 palette: {
  primary: {
   main: "#00796b", // Teal color
  },
  secondary: {
   main: "#ff7043", // Deep Orange color
  },
  background: {
   default: "#f4f6f8", // Light Grey background
   paper: "#ffffff", // White paper background
  },
  text: {
   primary: "#333333", // Dark Grey text
   secondary: "#666666", // Medium Grey text
  },
 },
 components: {
  MuiAppBar: {
   styleOverrides: {
    root: {
     backgroundColor: "#00796b", // Teal color for the navbar
    },
   },
  },
  MuiDrawer: {
   styleOverrides: {
    paper: {
     backgroundColor: "#ffffff", // White sidebar background
    },
   },
  },
  MuiTableHead: {
   styleOverrides: {
    root: {
     backgroundColor: "#f5f5f5", // Light grey for table header
    },
   },
  },
 },
});

export default theme;
