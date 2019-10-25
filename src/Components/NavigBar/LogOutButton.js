import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class LogOutButton extends Component {
 
//collapse avait isOpen='true' en props = warnings ?
	render() {
		return (
			<Collapse  className="text-center" navbar>
				<Nav navbar>
					<NavItem>
						<Button onClick = {this.handleLogOut} className="btn-nav mx-3">
							Log Out
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
	handleLogOut = () => {
		localStorage.removeItem('user');
		this.props.onButtonClick('Home');
	}
}

export default LogOutButton;

