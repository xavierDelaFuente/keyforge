import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/" className="navlink home">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;
