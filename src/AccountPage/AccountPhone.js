import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody, 
} from 'reactstrap';
import {getObjetById, updateUser} from '../functions/ComponentTools';

import './AccountPage.css';

class AccountPhone extends Component {

	constructor(props){
		super(props);

		this.state={
			phone: '',
			phone_mod: false,
			add_phone: false,
			button:'Change'
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
							<Row className=" text-uppercase">
								<Col className="text-left">
									Phone Number
								</Col>
								<Col className="text-right">
									{/* <Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button> */}
									<Button className="account-btn ml-3" onClick={this.phoneMod}>
										{this.state.button}
									</Button>
								</Col>
							</Row>
							{this.phoneDisp()}	
							{/*this.addPhone()*/}
						</div>
					</CardBody>
				</Card>
			</Row>
		);
	}
	HandlePhoneEvent = (event) =>{
		this.setState({
			phone : event.target.value,
		});
	  }
	//get user informations and put them into states
	getUserInfo = () =>{
		const user_id = parseInt(localStorage.getItem('user'));
		const user = getObjetById(user_id, 'user');
		this.setState({
			phone: user.phone
		});
	}
	phoneMod = () =>{
		if(this.state.phone_mod)
		{
			updateUser('','','','','','','', this.state.phone);
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
			phone_mod: !this.state.phone_mod
		});
	}
	phoneDisp = () =>{
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
						{/* <Button className="account-btn ml-3" onClick={this.phoneMod}>
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
								name="phone"
								id="Phone"
								placeholder="Phone Number"
								className=""
								value={this.state.phone}
								onChange={this.HandlePhoneEvent}
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
	addSwitch = () =>{
		this.setState({
			add_phone: !this.state.add_phone
		});
	}
	addPhone = () =>{
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

};

export default AccountPhone;
