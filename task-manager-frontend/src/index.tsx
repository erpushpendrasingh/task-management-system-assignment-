// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);

root.render(
 <React.StrictMode>
  <Provider store={store}>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </ThemeProvider>
  </Provider>
 </React.StrictMode>
);

// Optional: report web vitals
reportWebVitals();
