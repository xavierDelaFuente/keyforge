import React, { Component } from 'react';
import './Header.css';

import logo from '../../data/img/Keyforge-calendar.png';

class Header extends Component {
	render() {
		const { className } = this.props;
		return (
			<header className={className || "App-header"}>
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome to Keyforge. An App for easier keeping count of the game.</p>
			</header>
		);
	}
}

export default Header;
