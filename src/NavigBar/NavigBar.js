import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, 
} from 'reactstrap';

import './NavigBar.css';
import logo from './logo.png';

import NavButtons from './NavButtons';
import LogInButtons from './LogInButtons';
import LogOutButton from './LogOutButton';
import { exists } from 'fs';

class NavigBar extends Component {
 	
	render() {
		return (
			<Navbar light expand="md" className="yellow-nb-style fixed-top">
				<div className="mx-auto d-sm-flex d-block  flex-sm-nowrap sticky">
				<NavbarBrand>
					<img
						src={logo}
       					width="45"
						height="45"
						className="d-inline-block align-top"
				   		alt="WaterMelon"
					/>
				</NavbarBrand>
				<NavButtons onButtonClick = {this.props.onButtonClick}/>
				{this.buttonsToDisplay()}
				
				</div>
			</Navbar>
		);
	}
	buttonsToDisplay(){
		if(localStorage.getItem('user') !== null)
			return(<LogOutButton onButtonClick = {this.props.onButtonClick}/>);
		else
			return(
				<LogInButtons onButtonClick = {this.props.onButtonClick}/> );
	}
};

export default NavigBar;
