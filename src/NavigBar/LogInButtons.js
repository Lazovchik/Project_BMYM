import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class LogInButtons extends Component {
 	
	

	render() {
		return (
			<Collapse isOpen='true' className="text-center mr-5" navbar>
				<Nav navbar>
					<NavItem>
						<Button onClick = {this.handleSignIn} className="btn-nav mx-3">
							Sign In
						</Button>
					</NavItem>
					<NavItem>
						<Button onClick = {this.handleLogIn} className="btn-nav mx-3">
							Log  In
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
	handleLogIn = () => {
		this.props.onButtonClick('LogIn');
	}
	handleSignIn = () => {
		this.props.onButtonClick('SignIn');
	}
}

export default LogInButtons;

