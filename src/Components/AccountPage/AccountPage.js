import React, { Component } from 'react';
import {
	Container, Col, Row,
} from 'reactstrap';
import './AccountPage.css';
import AccountTenant from './AccountTenant';
import AccountOptions from './AccountOptions';
import AccountAdresse from './AccountAdresse';
import AccountEmail from './AccountEmail';
import AccountPhone from './AccountPhone';

class AccountPage extends Component {


	render(){
		return(
			<Container className="rounded account-main-container w-75 pb-5" fluid>
				<Row>
					<Col>
						<AccountTenant onButtonClick = {this.props.onButtonClick}/>
						<AccountOptions/>
					</Col>
					<Col>
						<AccountAdresse/>
						<AccountEmail/>
						<AccountPhone/>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default AccountPage;
