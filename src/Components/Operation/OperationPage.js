import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row,
} from 'reactstrap';

import './Operation.css';
import OperationRequest from './OperationRequest';

class OperationPage extends Component {

	render(){
		return(
			<Container className="rounded pay-main-container w-50 pb-5" fluid>
				<Row>
					<Col>
						<OperationRequest onButtonClick = {this.props.onButtonClick} type= {this.props.type}/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default OperationPage;
