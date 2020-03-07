import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Css propio
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        Alex<span>Santos</span>
      </h1>
      <Router>
        <Route>
          <div className="container-links">
            <Link to="#" className="link-navbar">
              Home
            </Link>
            <Link to="#" className="link-navbar">
              Blog
            </Link>
            <Link to="#" className="link-navbar">
              Portafolio
            </Link>
            <Link to="#" className="link-navbar">
              Sobre mi
            </Link>
            <Link to="#" className="link-navbar">
              Contáctame
            </Link>
          </div>
        </Route>
      </Router>
    </div>
  );
};

export default Navbar;
