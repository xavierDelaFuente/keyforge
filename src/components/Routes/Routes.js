import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../App/App.js";
import Card from "../Card/Card.js";
import Board from "../Board/Board.js";

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/Board" component={Board} />
					<Route exact path="/Card" component={Card} />
				</Switch>
			</Router>
		);
	}
}

export default Routes;
