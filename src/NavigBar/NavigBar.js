import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, Nav, NavItem,Collapse, Container,  Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './NavigBar.css';
import logo from './logo.png';

import NavButtons from './NavButtons';
import LogInButtons from './LogInButtons';
import LogOutButton from './LogOutButton';

class NavigBar extends Component {
 	
	constructor(props){
		super(props);	
	}

	render() {
		return (
			<Navbar light expand="md" className="yellow-nb-style">
				<div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
				<NavbarBrand>
					<img
						src={logo}
       					width="45"
						height="45"
						className="d-inline-block align-top"
				   		alt="Melon"
					/>
				</NavbarBrand>
				<NavButtons/>
				<LogInButtons/>
				<LogOutButton/>
				</div>
			</Navbar>
		);
	}
};

export default NavigBar;
