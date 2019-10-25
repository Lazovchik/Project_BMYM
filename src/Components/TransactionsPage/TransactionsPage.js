import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row,
} from 'reactstrap';

import './TransactionsPage.css';
import TransfersDisplay from './TransfersDisplay';
import OperationsDisplay from './OperationsDisplay';

class TransactionsPage extends Component {

	render(){
		return(
			<Container className="rounded transactions-main-container w-75 pb-5" fluid>
				<Row>
					<Col>
						<TransfersDisplay/>
					</Col>
					<Col>
						<OperationsDisplay/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default TransactionsPage;
