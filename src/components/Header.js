import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="container-Header">
      <div className="titles-position">
        <h1>Alexander Santos</h1>
        <h3> Full Stack Developer</h3>
        <div className="text-initial">
          <ul className="links-external">
            <li>
              <Link to="https://github.com/naymco">
                <i className="fa fa-github-alt" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/alexander-santos-junior-full-stack-developer-818370106">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="mailto:alexsantos2018@outlook.es">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
