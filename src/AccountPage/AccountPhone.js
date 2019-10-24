import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';

class AccountPhone extends Component {

	constructor(props){
		super(props);

		this.state={
			phone: "0601020304",
			phone_mod: false
		};
		
		this.phoneMod = this.phoneMod.bind(this);
		this.phoneDisp = this.phoneDisp.bind(this);
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
					<Row className="">
						<Button className="account-btn ml-3" onClick={this.phoneMod}>
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
				<Row className="">
					<Button className="account-btn ml-3" onClick={this.phoneMod}>
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
								Phone Number
							</Row>
							{this.phoneDisp()}	
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountPhone;
