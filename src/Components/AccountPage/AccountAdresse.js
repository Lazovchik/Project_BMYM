import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody
} from 'reactstrap';
import {getObjetById, updateUser} from '../../functions/ComponentTools';

import './AccountPage.css';

class AccountAdresse extends Component {

	constructor(props){
		super(props);

		this.state={
			street: '',
			city: '',
			adresse_mod: false,
			add_adresse: false,
			button: 'Change'
			
		};
	}
	componentDidMount()
	{
		this.getUserInfo();
	}
	render(){
		return(
			<Row>
				<Card className="w-100 mt-3 ml-5 default-account-card">
					<CardBody>
						<div>
							<Row className="text-uppercase">
								<Col className="text-left">
									Adresse
								</Col>
								<Col className="text-right">
									{/* <Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button> */}
									<Button className="account-btn ml-3" onClick={this.adresseMod}>
										{this.state.button}
									</Button>
								</Col>
							</Row>
							{this.adresseDisp()}
							{/*this.addAdresse()*/}
						</div>
					</CardBody>
				</Card>
			</Row>
		);
	}
	HandleStreetEvent = (event) =>{
		this.setState({
			street : event.target.value,
		});
	  }
	HandleCityEvent = (event) =>{
		this.setState({
			city : event.target.value,
		});
	  }
	//get user informations and put them into states
	getUserInfo = () =>{
	const user_id = parseInt(localStorage.getItem('user'));
	const user = getObjetById(user_id, 'user');
	this.setState({
		street : user.street,
		city : user.city,
	});
	
	}
	adresseMod = () =>{
		if(this.state.adresse_mod)
		{
			updateUser('','','','','', this.state.street, this.state.city, '');
			this.getUserInfo();
			this.setState({
				button: 'Change'
			});
		}
		else
			this.setState({
				button: 'Cancel'
			});
		this.setState({
			adresse_mod: !this.state.adresse_mod
		});
	}
	adresseDisp = () =>{
		if(!this.state.adresse_mod){
			return(
				<div>
					<Row>
						<Col>
							<Row className="h5 pt-3 pl-3">
								{this.state.street}
							</Row>
							<Row className="h5 pl-3">
								{this.state.city}
							</Row>
						</Col>
						<Col>
						</Col>
					</Row>
					 <Row className="account-adresse-row">
						{/* <Button className="account-btn ml-3" onClick={this.adresseMod}>
							Change
						</Button>
						<Button className="account-btn ml-3" onClick={this.phoneMod}>
							Delete
						</Button> */}
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
									name="street"
									id="LineOne"
									placeholder="Number + Street"
									className=""
									value={this.state.street}
									onChange={this.HandleStreetEvent}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="text"
									name="city"
									id="LineTwo"
									placeholder="Index + City + Country"
									className=""
									value={this.state.city}
									onChange={this.HandleCityEvent}
								/>
							</FormGroup>
						</Form>
					</Col>
					<Col>
					</Col>
				</Row>
				<Row className="account-adresse-row">
					<Button className="account-btn ml-3 my-2" onClick={this.adresseMod}>
						Apply
					</Button>
				</Row>
			</div>
		);
		}
	}
	addSwitch = () =>{
		this.setState({
			add_adresse: !this.state.add_adresse
		});
	}
	addAdresse = () =>{
		if(this.state.add_adresse){
			return(
				<div>
					<Row className="mt-3">
						<Col>
							<Form className="mt-2">
								<FormGroup>
									<Input
										type="text"
										name="street"
										id="LineOne"
										placeholder="Number + Street"
										className=""
									/>
								</FormGroup>
								<FormGroup>
									<Input
										type="text"
										name="city"
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
};

export default AccountAdresse;
