import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';

class PayButtons extends Component {

	render(){
		return(
			<Row className="pt-3">
				<Col className="">
					<Button onClick = {this.handlePayIn} className="home-btn">
						Pay In
					</Button>
				</Col>
				<Col className="">
					<Button onClick = {this.handlePayOut} className="home-btn">
						Pay Out
					</Button>
				</Col>
			</Row>
		);
	}
	handlePayIn = () => {
		this.props.onButtonClick('PayIn');
	}
	handlePayOut = () => {
		this.props.onButtonClick('PayOut');
	}
};

export default PayButtons;
