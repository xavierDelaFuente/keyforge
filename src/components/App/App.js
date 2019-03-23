import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <MainApp className="App">
        <Link to="/Board"><Header /></Link>   
      </MainApp>
    );
  }
}

const MainApp = styled.div`
  .App {
    text-align: center;
  }
`;

export default App;
