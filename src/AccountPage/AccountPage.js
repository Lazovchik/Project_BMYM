import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './AccountPage.css';
import AccountTenant from './AccountTenant';
//import AccountOptions from './AccountOptions';

class AccountPage extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container className="rounded account-main-container w-75 pb-5" fluid>
				<Row>
					<Col>
						<AccountTenant/>
					</Col>
					<Col>
						
					</Col>
				</Row>
			</Container>
		);
	}
};

export default AccountPage;
