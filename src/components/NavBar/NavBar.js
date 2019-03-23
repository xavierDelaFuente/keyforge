import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/" className="navlink">
          Home
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
