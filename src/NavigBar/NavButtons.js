import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class NavButtons extends Component {
 	
	constructor(props){
		super(props);	
	}

	render() {
		return (
			<Collapse isOpen='true' className="text-center mr-5" navbar>	
				<Nav navbar>
					<NavItem>
						<Button className="btn-nav mx-3">
							Home
						</Button>
					</NavItem>
					<NavItem>
						<Button className="btn-nav mx-3">
							Account
						</Button>
					</NavItem>
					<NavItem>
						<Button className="btn-nav mx-3">
							Transactions
						</Button>
					</NavItem>
					<NavItem>
						<Button className="btn-nav mx-3">
							Transfer
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
}

export default NavButtons;

