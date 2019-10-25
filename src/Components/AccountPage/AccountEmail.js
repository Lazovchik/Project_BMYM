import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody, 
} from 'reactstrap';
import {getObjetById, updateUser} from '../../functions/ComponentTools';

import './AccountPage.css';

class AccountEmail extends Component {

	constructor(props){
		super(props);

		this.state={
			email: '',
			email_mod: false,
			add_email: false,
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
							<Row className=" text-uppercase">
								<Col className="text-left">
									Email Adresse
								</Col>
								<Col className="text-right">
									{/* <Button className="account-btn" onClick={this.addSwitch}>
										Add
									</Button> */}
									<Button className="account-btn ml-3" onClick={this.emailMod}>
										{this.state.button}
									</Button>
								</Col>
							</Row>
							{this.emailDisp()}
							 {/*this.addEmail()*/}
						</div>
					</CardBody>
				</Card>
			</Row>
		);
	}

	HandleEmailEvent = (event) =>{
		this.setState({
			email : event.target.value,
		});
	  }
	  //get user informations and put them into states
	getUserInfo = () =>{
		const user_id = parseInt(localStorage.getItem('user'));
		const user = getObjetById(user_id, 'user');
		this.setState({
			email : user.email
		});
		
		}
	emailMod = () =>{
		if(this.state.email_mod)
		{
			updateUser('','', this.state.email,'','', '', '', '');
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
			email_mod: !this.state.email_mod
		});
	}
	emailDisp = () =>{
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
						{/* <Button className="account-btn ml-3" onClick={this.emailMod}>
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
								type="email"
								name="email"
								id="Email"
								placeholder="example@mail.world"
								className=""
								value={this.state.email}
								onChange={this.HandleEmailEvent}
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
	addSwitch = () =>{
		this.setState({
			add_email: !this.state.add_email
		});
	}
	addEmail = () =>{
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
	
};

export default AccountEmail;
