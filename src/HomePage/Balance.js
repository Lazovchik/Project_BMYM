import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Button, Row, Card,
	CardTitle, CardSubtitle, CardText, CardBody,
} from 'reactstrap';

import {getObjetById} from '../functions/ComponentTools';
import './HomePage.css';

class Balance extends Component {

	constructor(props){
		super(props);

		this.state = {
			first_name: '',
			last_name: '',
			balance: ''
		};
		

	}
	componentWillMount()
	{
		this.getUserInfo();
	}

	render(){
		return(
		<div>
			<Row>
				<h1 className="ml-5">Welcome {this.state.first_name} {this.state.last_name}</h1>
			</Row>
			<Row>
				<Card className="w-100 ml-5 default-home-card">
					<CardBody>
					<CardTitle className="h3 text-left">
						Watermelon Balance
					</CardTitle>
					<CardSubtitle className="h1 font-weignt-light text-uppercase text-left">
						{this.state.balance} EUR
					</CardSubtitle>
					<CardText className="text-left">
						<br/>Available
					</CardText>
						<Row className="justify-content-left pl-2">
						<Button onClick = {this.handleTransfer} className="home-btn">
							Money Transfer
						</Button>
					</Row>
					</CardBody>
				</Card>
			</Row>
		</div>
		);
	}
	//get user informations and put them into states
	getUserInfo = () =>{
		const user_id = parseInt(localStorage.getItem('user'));
		const user = getObjetById(user_id, 'user');
		const userBalance = parseFloat(user.balance / 100);
		this.setState({
			first_name : user.first_name,
			last_name : user.last_name,
			balance : userBalance
		});
			

		
	}
	handleTransfer = () => {
		this.props.onButtonClick('Transfer');
	}
};

export default Balance;
