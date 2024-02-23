import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          La Panera Rosa
        </a>
        <div className="navbar-nav">
          <ul className="nav-left">
            <li className="nav-item">
              <a href="about" className="nav-link">
                Nosotros
              </a>
            </li>
          </ul>
          <ul className="nav-right">
            <li className="nav-item">
              <a href="galeria" className="nav-link">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a href="locals" className="nav-link">
                Locales
              </a>
            </li>
            <li className="nav-item">
              <a href="reviews" className="nav-link">
                Reseñas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;