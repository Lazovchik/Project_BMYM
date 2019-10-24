import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';

class AccountPhone extends Component {

	constructor(props){
		super(props);

		this.state={
			phone: "0601020304",
			phone_mod: false,
			add_phone: false
		};
		
		this.phoneMod = this.phoneMod.bind(this);
		this.phoneDisp = this.phoneDisp.bind(this);
		this.addPhone = this.addPhone.bind(this);
		this.addSwitch = this.addSwitch.bind(this);
	}

	phoneMod(){
		this.setState({
			phone_mod: !this.state.phone_mod
		});
	}

	phoneDisp(){
		if(!this.state.phone_mod){
			return(
				<div>
					<Row>
						<Col>
							<Row className="h5 pt-3 pl-3">
								{this.state.phone}
							</Row>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row className="account-phone-row">
						<Button className="account-btn ml-3" onClick={this.phoneMod}>
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
								type="text"
								name="phone"
								id="Phone"
								placeholder="06xxxxxxxx"
								className=""
							/>
						</FormGroup>
					</Form>
					</Col>
					<Col>
					</Col>
				</Row>
				<Row className="account-phone-row">
					<Button className="account-btn ml-3" onClick={this.phoneMod}>
						Apply
					</Button>
				</Row>
			</div>
		);
		}
	}

	addSwitch(){
		this.setState({
			add_phone: !this.state.add_phone
		});
	}
	addPhone(){
		if(this.state.add_phone){
			return(
				<div>
					<Row className="mt-3">
						<Col>
							<Form className="mt-2">
								<FormGroup>
									<Input
										type="text"
										name="phone"
										id="Phone"
										placeholder="06xxxxxxxx"
										className=""
									/>
								</FormGroup>
							</Form>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row className="account-phone-row">
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
									Phone Number
								</Col>
								<Col className="text-right">
									<Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button>
								</Col>
							</Row>
							{this.phoneDisp()}	
							{this.addPhone()}
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountPhone;
