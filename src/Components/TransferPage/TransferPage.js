import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row,
} from 'reactstrap';

import './TransferPage.css';
import TransferRequest from './TransferRequest';

class TransferPage extends Component {

	render(){
		return(
			<Container className="rounded transfer-main-container w-50 pb-5" fluid>
				<Row>
					<Col>
						<TransferRequest/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default TransferPage;
