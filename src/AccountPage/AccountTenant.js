import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';
import def_watermel from './def_watermel.png';


class AccountTenant extends Component {

	constructor(props){
		super(props);

		this.state={
			first_name: "John",
			last_name: "Smith",
			name_modif: false
		};
		
		this.nameModification = this.nameModification.bind(this);
		this.buttonModOrApp = this.buttonModOrApp.bind(this);
		this.changeModOrApp = this.changeModOrApp.bind(this);
	}
	

	//display modification form or clients name and surname
	nameModification(){
		if(this.state.name_modif){
			return(
				<Row className="h3">
					<Form>
						<FormGroup>
							<Input
								type="text"
								name="first_name"
								id="FirstName"
								placeholder="First Name"
								className=""
							/>
						</FormGroup>
						<FormGroup>
							<Input
								type="text"
								name="last_name"
								id="LastName"
								placeholder="Last Name"
								className=""
							/>
						</FormGroup>
					</Form>
				</Row>
			);
		}
		else{
			return(
				<Row className="h3">
					{this.state.first_name} {this.state.last_name}
				</Row>
			);
		}
		
	}
	
	//boolean responsible for displaying modification form or clients name and surname
	changeModOrApp(){
		this.setState({
			name_modif: !this.state.name_modif
		});
	}

	//change button
	buttonModOrApp(){
		if(this.state.name_modif){
			return(
				<Button className="account-btn" onClick={this.changeModOrApp}>
					Apply
				</Button>
			);
		}
		else{
			return(
				<Button className="account-btn" onClick={this.changeModOrApp}>
					Modify
				</Button>
			);
		}
	}

	render(){
		return(
			<Row>
				<Card className="w-100 mt-3 ml-5 default-account-card">
					<CardBody>
						<CardText>
							<Row className="ml-1 text-uppercase">
								Preferences
							</Row>
							<Row>
								<Col className="col-sm-3 pl-2 pt-3">
									<img
										src={def_watermel}
										width="100px"
										height="100px"
										className="account-avatar"
									/>
								</Col>
								<Col className="pt-3">
									<Row className="account-tenant-name">
										<Col>
											{this.nameModification()}
											<Row className="h5">
												Account created in 2019
											</Row>
										</Col>
										<Col className="pt-3 col-sm-4">
											{this.buttonModOrApp()}
										</Col>
									</Row>
									<Row className="mt-3">
										<Button className="account-btn">
											Home Page
										</Button>
									</Row>
								</Col>
							</Row>
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountTenant;
