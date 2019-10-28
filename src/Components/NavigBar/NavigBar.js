import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Navbar, NavbarBrand, Row
} from 'reactstrap';

import './NavigBar.css';
import logo from '../../data/img/logo3.png';

import NavButtons from './NavButtons';
import LogOutButton from './LogOutButton';

class NavigBar extends Component {
 	
	render() {
		return (
			<Navbar light expand="md" className="yellow-nb-style fixed-top">
				<div className="mx-auto d-sm-flex d-block  flex-sm-nowrap sticky">
					
						<NavbarBrand>
							<img
								src={logo}
								width="60"
								height="60"
								className="d-inline-block align-top"
								alt="WaterMelon"
								
							/>
						</NavbarBrand>
						<div className = 'web-page-title'> WATERMELON</div>
					
				
				{this.buttonsToDisplay()}
				
				</div>
			</Navbar>
		);
	}
	buttonsToDisplay(){
		if(localStorage.getItem('user') !== null)
			return(<Row className='ml-2'>
						<NavButtons onButtonClick = {this.props.onButtonClick}/>
						<LogOutButton onButtonClick = {this.props.onButtonClick}/>
				   </Row>	);
	
	}
};

export default NavigBar;
