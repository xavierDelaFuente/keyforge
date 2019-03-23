import React, { Component } from "react";
import "./Header.css";

import logo from "../../data/img/Keyforge-calendar.png";

class Header extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <header className={className || "App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        {children}
      </header>
    );
  }
}

export default Header;
