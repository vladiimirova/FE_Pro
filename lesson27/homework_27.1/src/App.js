import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeaderComponent from "./Components/Header/HeaderComponent";
import RouterComponent from "./Components/Router/RouterComponent";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            background: {
              default: '#121212', 
              paper: '#1D1D1D', 
            },
            text: {
              primary: '#ffffff', 
            },
          }
        : {
            background: {
              default: '#ffffff', 
              paper: '#f5f5f5',
            },
            text: {
              primary: '#000000', 
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: "100vh", backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
        <Router>
          <HeaderComponent toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <RouterComponent />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
