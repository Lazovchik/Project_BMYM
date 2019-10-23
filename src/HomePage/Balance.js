import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card,
	CardTitle, CardSubtitle, CardText, CardBody,
} from 'reactstrap';

import './HomePage.css';

class Balance extends Component {

	constructor(props){
		super(props);

		this.state ={
			first_name: 'John',
			last_name: 'Smith',
			balance: 0.0
		};
	}

	render(){
		return(
		<div>
			<Row>
				<h1 className="ml-5">Welcome {this.state.first_name} {this.state.last_name}</h1>
			</Row>
			<Row>
				<Card className="w-75 ml-5 default-home-card">
					<CardBody>
					<CardTitle className="h3 text-left">
						Watermelon Balance
					</CardTitle>
					<CardSubtitle className="h1 font-weignt-light text-uppercase text-left">
						{this.state.balance} EUR
					</CardSubtitle>
					<CardText className="text-left">
						<br/>Avaliable
					</CardText>
						<Row className="justify-content-left pl-2">
						<Button className="home-btn">
							Money Transfer
						</Button>
					</Row>
					</CardBody>
				</Card>
			</Row>
		</div>
		);
	}
};

export default Balance;
