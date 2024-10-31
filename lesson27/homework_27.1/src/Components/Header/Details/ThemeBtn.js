import React from "react";
import { Switch } from "@mui/material";
import "./ThemeBtn.css"; 

function ThemeBtn({ toggleTheme, isDarkMode }) {
  return (
    <div className="theme-toggle">
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        inputProps={{ "aria-label": "controlled" }}
       
      />
      <span className={`icon ${isDarkMode ? "moon" : "sun"}`}>
        {isDarkMode ? <span>&#127769;</span> : <span>&#9728;</span>}
      </span>
    </div>
  );
}

export default ThemeBtn;
