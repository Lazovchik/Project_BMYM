import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Col, Row,
} from 'reactstrap';

import './TransactionsPage.css';


class OperationsDisplay extends Component {

	//pour savoir si l'operation est payin ou payout, et la display correctement

	render(){
		return(
			<div>
				<Row className="transfers-list py-2">
					<Col>
						{this.props.type}
					</Col>
					<Col>
						{this.props.amount}
					</Col>
				</Row>
			</div>
		);
	}};

export default OperationsDisplay;
