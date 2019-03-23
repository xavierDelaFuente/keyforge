import React, { Component } from "react";
import styled from "styled-components";

import logo from "../../data/img/Keyforge-calendar.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Keyforge. An App for easier keeping count of the game.</p>
      </header>
    );
  }
}

export default Header;
