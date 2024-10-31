import React from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./Details/ThemeBtn";
import "./HeaderComponent.css";

function HeaderComponent({ toggleTheme, isDarkMode }) {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <nav className="header-list">
              <Link to="/" className="header-item">Главная</Link>
              <Link to="/about" className="header-item">О нас</Link>
              <Link to="/contact" className="header-item">Контакты</Link>
            </nav>
            <ThemeBtn toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
