import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';

class AccountEmail extends Component {

	constructor(props){
		super(props);

		this.state={
			email: "bukkake_bitch@prostitute.zb",
			email_mod: false
			
		};
		
		this.emailMod = this.emailMod.bind(this);
		this.emailDisp = this.emailDisp.bind(this);
	}

	emailMod(){
		this.setState({
			email_mod: !this.state.email_mod
		});
	}

	emailDisp(){
		if(!this.state.email_mod){
			return(
				<div>
					<Row>
						<Col>
							<Row className="h5 pt-3 pl-3">
								{this.state.email}
							</Row>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row className="">
						<Button className="account-btn ml-3" onClick={this.emailMod}>
							Modify
						</Button>
					</Row>
				</div>
			);
		}
		else{
		return(
			<div>
				<Row>
					<Col>
					<Form className="mt-2">
						<FormGroup>
							<Input
								type="email"
								name="email"
								id="Email"
								placeholder="example@mail.world"
								className=""
							/>
						</FormGroup>
					</Form>
					</Col>
					<Col>
					</Col>
				</Row>
				<Row className="">
					<Button className="account-btn ml-3" onClick={this.emailMod}>
						Apply
					</Button>
				</Row>
			</div>
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
								Email Adresse
							</Row>
							{this.emailDisp()}	
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountEmail;
