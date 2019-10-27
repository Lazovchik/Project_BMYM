import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row,
} from 'reactstrap';

import './PayInPage.css';
import PayInRequest from './PayInRequest';

class PayInPage extends Component {

	render(){
		return(
			<Container className="rounded pay-main-container w-25 pb-5" fluid>
				<Row>
					<Col>
						<PayInRequest/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default PayInPage;
