import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Nav, NavItem, Collapse,
	Button,
} from 'reactstrap';

import './NavigBar.css';

class NavButtons extends Component {


	render() {
		return (
			<Collapse isOpen='true' className="text-center mr-5" navbar>	
				<Nav navbar>
					<NavItem>
						<Button onClick = {this.handleHome} className="btn-nav mx-3">
							Home
						</Button>
					</NavItem>
					<NavItem>
						<Button onClick = {this.handleAccount} className="btn-nav mx-3">
							Account
						</Button>
					</NavItem>
					<NavItem>
						<Button onClick = {this.handleTransactions} className="btn-nav mx-3">
							Transactions
						</Button>
					</NavItem>
					<NavItem>
						<Button onClick = {this.handleTransfer} className="btn-nav mx-3">
							Transfer
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		);
	}
	handleHome = () => {
		this.props.onButtonClick('Home');
	}
	handleAccount = () => {
		this.props.onButtonClick('Account');
	}
	handleTransactions = () => {
		this.props.onButtonClick('Transactions');
	}
	handleTransfer = () => {
		this.props.onButtonClick('Transfer');
	}
}

export default NavButtons;

