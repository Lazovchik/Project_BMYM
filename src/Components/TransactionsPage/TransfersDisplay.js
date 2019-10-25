import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Col, Row,
	Card, CardBody,
} from 'reactstrap';

import './TransactionsPage.css';


class TransfersDisplay extends Component {

	constructor(props){
		super(props);
		
		this.state={
			creditor: "Superman",
			debitor: "Batman",
			amount: 20
		}
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
									Debited
								</Col>
								<Col>
									Credited
								</Col>
								<Col>
									Amount
								</Col>
							</Row>
							<Row className="transfers-list">
								<Col>
									{this.state.debitor}
								</Col>
								<Col>
									{this.state.creditor}
								</Col>
								<Col>
									{this.state.amount}
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Row>
			</div>
		);
	}
};

export default TransfersDisplay;
