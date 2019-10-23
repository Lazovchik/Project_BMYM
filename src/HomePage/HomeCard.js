import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';

import visa from './VISA.png';
import master_card from './MC.png';
import amex from './AMEX.png';

class HomeCard extends Component {

	constructor(props){
		super(props);

		this.state={
			type: "VISA",
			number: 1234123412341234,
			bank: "HSBC"
		};
	
	this.getCardLogo = this.getCardLogo.bind(this);
	}
	
	getCardLogo(){
		switch (this.state.type){
			case 'VISA':
				return(
					<img 
						src={visa}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="VISA"
					/>
				);
			case 'AMEX':
				return(
					<img 
						src={amex}
       					width="120"
						height="80"
						className="d-inline-block align-top"
				   		alt="AMEX"
					/>
				);
			case 'MC':
				return(
					<img 
						src={master_card}
       					width="120"
						height="80"
						className="d-inline-block align-top"
				   		alt="MC"
					/>
				);
		}
	}

	render(){
		return(
		<div>
			<Row className="pt-3 home-card-list">
				<Col className="col-sm-3">
					{this.getCardLogo()}		
				</Col>
				<Col className="">
					<Row className="h5">
						{this.state.bank}
					</Row>
					<Row>
						{this.state.number}
					</Row>
				</Col>
			</Row>
			<Row className="pt-3">
				<Button className="home-btn ml-5">
					Add
				</Button>
			</Row>
		</div>
		);
	}
};

export default HomeCard;
