import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class LogOutButton extends Component {
 	
	constructor(props){
		super(props);	
	}

	render() {
		return (
			<Collapse isOpen='true' className="text-center" navbar>
				<Nav navbar>
					<NavItem>
						<Button className="btn-nav mx-3">
							Log Out
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
}

export default LogOutButton;

