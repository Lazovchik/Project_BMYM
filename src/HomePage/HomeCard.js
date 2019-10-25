import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';

import visa from '../data/img/VISA.png';
import master_card from '../data/img/MC.png';
import amex from '../data/img/AMEX.png';

class HomeCard extends Component {

	constructor(props){
		super(props);
		this.getCardLogo = this.getCardLogo.bind(this);
	}
	
	getCardLogo(){
		switch (this.props.type){
			case 'visa':
				return(
					<img 
						src={visa}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="VISA"
					/>
				);
			case 'amex':
				return(
					<img 
						src={amex}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="AMEX"
					/>
				);
			case 'mastercard':
				return(
					<img 
						src={master_card}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="MC"
					/>
				);
			default :
				return '';
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
						Expiration Date: {this.props.exp_date}
					</Row>
					<Row>
						Card num: XXXX-XXXX-XXXX-{this.props.number}
					</Row>
				</Col>
				<Col className="col-sm-3">
					<Button className="home-btn">
						Modify
					</Button>
				</Col>
			</Row>
			<Row className="pt-3">
				<Button onClick = {this.handleAddCard} className="home-btn ml-5">
					Add
				</Button>
			</Row>
		</div>
		);
	}
	handleAddCard = () => {
		this.props.onButtonClick('AddCard');
	}
};

export default HomeCard;
