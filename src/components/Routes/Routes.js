import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../App/App.js";
import Board from "../Board/Board.js";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} className="home" />
          <Route exact path="/Board" component={Board} className="board" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
