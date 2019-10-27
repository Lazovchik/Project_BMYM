import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row,
} from 'reactstrap';

import './PayOutPage.css';
import PayOutRequest from './PayOutRequest';

class PayOutPage extends Component {

	render(){
		return(
			<Container className="rounded pay-main-container w-25 pb-5" fluid>
				<Row>
					<Col>
						<PayOutRequest/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default PayOutPage;
