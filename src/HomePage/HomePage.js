import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './HomePage.css';
import Balance from './Balance';
import RecentActivity from './RecentActivity';
import PayButtons from './PayButtons';

class HomePage extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container className="rounded home-main-container w-75 pb-5" fluid>
				<Row>
					<Col>
						<Balance/>
						<RecentActivity/>	
					</Col>
					<Col>
						<PayButtons/>	
					</Col>
				</Row>
			</Container>
		);
	}
};

export default HomePage;
