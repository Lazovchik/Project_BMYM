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
			email_mod: false,
			add_email: false	
		};
		
		this.emailMod = this.emailMod.bind(this);
		this.emailDisp = this.emailDisp.bind(this);
		this.addEmail = this.addEmail.bind(this);
		this.addSwitch = this.addSwitch.bind(this);
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
					<Row className="account-email-row">
						<Button className="account-btn ml-3" onClick={this.emailMod}>
							Modify
						</Button>
						<Button className="account-btn ml-3" onClick={this.phoneMod}>
							Delete
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
				<Row className="account-email-row">
					<Button className="account-btn ml-3" onClick={this.emailMod}>
						Apply
					</Button>
				</Row>
			</div>
		);
		}
	}
	addSwitch(){
		this.setState({
			add_email: !this.state.add_email
		});
	}
	addEmail(){
		if(this.state.add_email){
			return(
				<div>
					<Row className="mt-3">
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
					<Row className="account-email-row">
						<Button className="account-btn ml-3" onClick={this.addSwitch}>
							Accept
						</Button>
						<Button className="account-btn ml-3" onClick={this.addSwitch}>
							Cancel
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
							<Row className=" text-uppercase">
								<Col className="text-left">
									Email Adresse
								</Col>
								<Col className="text-right">
									<Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button>
								</Col>
							</Row>
							{this.emailDisp()}
							{this.addEmail()}
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountEmail;
