import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	FormGroup, Input,
	Button, Row, Card, CardBody,
} from 'reactstrap';

import './AccountPage.css';
import def_watermel from '../../data/img/def_watermel.png';
import {getObjetById, updateUser} from '../../functions/ComponentTools';


class AccountTenant extends Component {

	constructor(props){
		super(props);

		this.state={
			first_name: '',
			last_name: '',
			name_modif: false
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
									alt="avatar"
								/>
							</Col>
							<Col className="pt-3 ">
								<Row className="account-tenant-name ">
									<Col className=" col-sm-7">
										{this.nameModification()}
										<Row className="h5">
											Account created in 2019
										</Row>
									</Col>
									<Col className="pt-3 col-sm-3">
										{this.buttonModOrApp()}
									</Col>
								</Row>
								<Row className="mt-3">
									<Button onClick={this.handleHome} className="account-btn">
										Home Page
									</Button>
								</Row>
							</Col>
						</Row>
					</div>
				</CardBody>
			</Card>
		</Row>
	);
}
//get user informations and put them into states
getUserInfo = () =>{
	const user_id = parseInt(localStorage.getItem('user'));
	const user = getObjetById(user_id, 'user');
	this.setState({
		first_name : user.first_name,
		last_name : user.last_name,
	});
}
//display home page
handleHome = () => {
	this.props.onButtonClick('Home');
}
//display modification form or clients name and surname
nameModification = () =>{
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
							onChange={this.HandleFirstNameEvent}
							value={this.state.first_name}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="text"
							name="last_name"
							id="LastName"
							placeholder="Last Name"
							className=""
							onChange={this.HandleLastNameEvent}
							value={this.state.last_name}
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
HandleFirstNameEvent = (event) =>{
	this.setState({
		first_name : event.target.value,
	});
  }
HandleLastNameEvent = (event) =>{
	this.setState({
		last_name : event.target.value,
	});
  }
//boolean responsible for displaying modification form or clients name and surname
changeModOrApp = () =>{
	if(this.state.name_modif)
		{
			updateUser(this.state.first_name ,this.state.last_name,'','','','','','');
			this.getUserInfo();
		}
	this.setState({
		name_modif: !this.state.name_modif
	});
}

//change button
buttonModOrApp = () =>{
	if(this.state.name_modif){
		return(
			<Button className="account-btn ml-4" onClick={this.changeModOrApp}>
				Apply
			</Button>
		);
	}
	else{
		return(
			<Button className="account-btn ml-4" onClick={this.changeModOrApp}>
				Change
			</Button>
		);
	}
}

};
export default AccountTenant;
