import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';

class PayButtons extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Row className="pl-5 pt-3">
				<Col className="">
					<Button className="home-btn">
						Pay In
					</Button>
				</Col>
				<Col className="">
					<Button className="home-btn">
						Pay Out
					</Button>
				</Col>
			</Row>
		);
	}
};

export default PayButtons;
