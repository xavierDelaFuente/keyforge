import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../data/img/Keyforge-calendar.png";

class Header extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <header className={className || "App-header"}>
        <Link to="/" className="navlink home">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        {children}
      </header>
    );
  }
}

export default Header;
