import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class LogInButtons extends Component {
 	
	constructor(props){
		super(props);	
	}

	render() {
		return (
			<Collapse isOpen='true' className="text-center mr-5" navbar>
				<Nav navbar>
					<NavItem>
						<Button className="btn-nav mx-3">
							Sign In
						</Button>
					</NavItem>
					<NavItem>
						<Button className="btn-nav mx-3">
							Log  In
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
}

export default LogInButtons;

