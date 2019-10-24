import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';

class AccountAdresse extends Component {

	constructor(props){
		super(props);

		this.state={
			line_one: "42 Pussy Street, ",
			line_two: "69069 Big-Dick City, France",
			adresse_mod: false,
			add_adresse: false
			
		};
		
		this.adresseMod = this.adresseMod.bind(this);
		this.adresseDisp = this.adresseDisp.bind(this);
		this.addAdresse = this.addAdresse.bind(this);
		this.addSwitch = this.addSwitch.bind(this);
	}

	adresseMod(){
		this.setState({
			adresse_mod: !this.state.adresse_mod
		});
	}

	adresseDisp(){
		if(!this.state.adresse_mod){
			return(
				<div>
					<Row>
						<Col>
							<Row className="h5 pt-3 pl-3">
								{this.state.line_one}
							</Row>
							<Row className="h5 pl-3">
								{this.state.line_two}
							</Row>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row className="account-adresse-row">
						<Button className="account-btn ml-3" onClick={this.adresseMod}>
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
									name="line_one"
									id="LineOne"
									placeholder="Number + Street"
									className=""
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="text"
									name="line_two"
									id="LineTwo"
									placeholder="Index + City + Country"
									className=""
								/>
							</FormGroup>
						</Form>
					</Col>
					<Col>
					</Col>
				</Row>
				<Row className="account-adresse-row">
					<Button className="account-btn ml-3" onClick={this.adresseMod}>
						Apply
					</Button>
				</Row>
			</div>
		);
		}
	}

	addSwitch(){
		this.setState({
			add_adresse: !this.state.add_adresse
		});
	}
	addAdresse(){
		if(this.state.add_adresse){
			return(
				<div>
					<Row className="mt-3">
						<Col>
							<Form className="mt-2">
								<FormGroup>
									<Input
										type="text"
										name="line_one"
										id="LineOne"
										placeholder="Number + Street"
										className=""
									/>
								</FormGroup>
								<FormGroup>
									<Input
										type="text"
										name="line_two"
										id="LineTwo"
										placeholder="Index + City + Country"
										className=""
									/>
								</FormGroup>
							</Form>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row className="account-adresse-row">
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
							<Row className="text-uppercase">
								<Col className="text-left">
									Adresse
								</Col>
								<Col className="text-right">
									<Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button>
								</Col>
							</Row>
							{this.adresseDisp()}
							{this.addAdresse()}
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountAdresse;
