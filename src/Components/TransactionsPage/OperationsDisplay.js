import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Col, Row,
	Card, CardBody,
} from 'reactstrap';

import './TransactionsPage.css';


class OperationsDisplay extends Component {

	constructor(props){
		super(props);
		
		this.state={
			pay_in_out: false, //si false=> payin, si true=> payout
			amount: 5
		}

		this.operationDisplay = this.operationDisplay.bind(this);
	}

	//pour savoir si l'operation est payin ou payout, et la display correctement

	operationDisplay(){
		
		let operation = "default";
			
		if(this.state.pay_in_out){ //si c'est un payout	
			 operation= "Pay Out";
		}
		else{
			 operation = "Pay In";
		}

		return(
			<Row className="transfers-list">
				<Col>
					{operation}
				</Col>
				<Col>
					{this.state.amount}
				</Col>
			</Row>

		);
	}
	
	render(){
		return(
			<div>
				<Row className="h1 text-left pl-4">
					Transfer History
				</Row>
				<Row>
					<Card className="rounded default-transactions-card mt-1 ml-4 w-100">	
						<CardBody>
							<Row className="h3 transfers-list">
								<Col>
									Operation
								</Col>
								<Col>
									Amount
								</Col>
							</Row>
							{this.operationDisplay()}
						</CardBody>
					</Card>
				</Row>
			</div>
		);
	}};

export default OperationsDisplay;
