import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card, CardBody, CardText,
} from 'reactstrap';

import './AccountPage.css';

class AccountOptions extends Component {

	constructor(props){
		super(props);

		this.state={
			nationality:"Zimbabve",
			id:"ID1984",
			nationality_mod: false,
			id_mod: false
		};

		this.nationalityMod = this.nationalityMod.bind(this);
		this.nationalityDisp = this.nationalityDisp.bind(this);
		this.idMod = this.idMod.bind(this);
		this.idDisp = this.idDisp.bind(this);
	}

	nationalityMod(){
		this.setState({
			nationality_mod: !this.state.nationality_mod
		});
	}
	
	idMod(){
		this.setState({
			id_mod: !this.state.id_mod
		});
	}

	idDisp(){
		if(!this.state.id_mod){
			return(
				<Row className="account-option-row">
					<Col className="h5 pt-3 col-sm-3">
						ID
					</Col>
					<Col className="pt-3">	
						{this.state.id}
					</Col>
					<Col className="pt-2 pl-5 col-sm-4">
						<Button className="account-btn" onClick={this.idMod}>
							Modify
						</Button>
					</Col>
				</Row>
			);
		}
		else{
			return(
				<Row className="account-option-row">
					<Col className="h5 pt-3 col-sm-3">
						ID
					</Col>
					<Col className="pt-2">	
						<Form>
							<FormGroup>
								<Input
									type="text"
									name="id"
									id="ID"
									placeholder="ID"
									className=""
								/>
							</FormGroup>
						</Form>
					</Col>
					<Col className="pt-2 pl-5 col-sm-4">
						<Button className="account-btn" onClick={this.idMod}>
							Apply
						</Button>
					</Col>
				</Row>
			);
		}
	}

	nationalityDisp(){
		if(!this.state.nationality_mod){
			return(
				<Row className="account-option-row">
					<Col className="h5 pt-3 col-sm-3">
						Nationality
					</Col>
					<Col className="pt-3">	
						{this.state.nationality}
					</Col>
					<Col className="pt-2 pl-5 col-sm-4">
						<Button className="account-btn" onClick={this.nationalityMod}>
							Modify
						</Button>
					</Col>
				</Row>
			);
		}
		else{
			return(
				<Row className="account-option-row">
					<Col className="h5 pt-3 col-sm-3">
						Nationality
					</Col>
					<Col className="pt-2">	
						<Form>
							<FormGroup>
								<Input
									type="text"
									name="natinality"
									id="Nationality"
									placeholder="Nationality"
									className=""
								/>
							</FormGroup>
						</Form>
					</Col>
					<Col className="pt-2 pl-5 col-sm-4">
						<Button className="account-btn" onClick={this.nationalityMod}>
							Apply
						</Button>
					</Col>
				</Row>
			);
		}

	}

	render(){
		return(
			<Row>
				<Card className="w-100 mt-3 ml-5 default-account-card">
					<CardBody>
						<CardText>
							<Row className="ml-1 text-uppercase ">
								Options
							</Row>
								{this.nationalityDisp()}
								{this.idDisp()}
							<Row>
								<Button className="account-btn mt-3">
									Close my account
								</Button>
							</Row>
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
};

export default AccountOptions;
