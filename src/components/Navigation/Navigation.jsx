import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <header>
      <div className="logo">Social Media</div>
      <div>
        <ul>
          <li>
            <Link to="/React-Login-Module/">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
