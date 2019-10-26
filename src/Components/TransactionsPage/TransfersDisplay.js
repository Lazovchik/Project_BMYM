import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Col, Row,
	Card, CardBody,
} from 'reactstrap';

import './TransactionsPage.css';


class TransfersDisplay extends Component {


	render(){
		return(
			<div>
				<Row className="transfers-list py-2">
					<Col>
						{this.props.debUser}
					</Col>
					<Col>
						{this.props.credUser}
					</Col>
					<Col>
						{this.props.amount}
					</Col>
				</Row>
			</div>
		);
	}
};

export default TransfersDisplay;
