import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Row, Col,
	Card, CardTitle, CardBody,
	Input, Form, FormGroup,
	Label, Button
} from 'reactstrap';

import './TransferPage.css';
import AutoCompSearch from '../others/AutoCompSearch';
import { createTransfer, getObjetById } from '../../functions/ComponentTools';

class TransferRequest extends Component {

	constructor(props){
		super(props);
		this.state = {
			userOk : false,
			selectedUser : '',
			amount: 0 ,
			max : getObjetById(parseInt(localStorage.getItem('user')), 'user').balance/100
		};
	}
	render(){
		return(
			<div>
				<Row className="text-left">
					<Card className="default-transfer-card w-100 ml-4 mr-4 mt-3">
						<CardTitle className="h1 pl-4">
							Make a transfer operation:
						</CardTitle>
				 		<CardBody className="w-100">
							<Row>
								<Form>
									<Row>
										<FormGroup className="ml-5">
											<Label for="email">Enter the amount:</Label>
											<Input
												type="number"
												name="Amount"
												id="amount"
												min = "0"
												step="0.01"
												max = {this.state.max}
												placeholder="0.00"
												value = {this.state.amount}
												onChange = {this.handleAmount}
											/>
										</FormGroup>
									</Row>
									<Row>
										<FormGroup className="ml-5">
											<Label for="name">Enter creditors Email:</Label>
											<AutoCompSearch userOk = {this.isUserCorrect} content = {this.state.selectedUser} 
											changeContent = {this.handleSelectedUser} />
										</FormGroup>
									</Row>
								</Form>
							</Row>
							<Row className="w-100">
								<Col>
								</Col>
								<Col className="col-sm-2 ml-1">
								<Button className="transfer-btn" onClick ={this.handleTransfer}  >
									Transfer
								</Button>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Row>
			</div>
		);
	}
	handleAmount = (event) =>{
		this.setState({
			amount: event.target.value
		});
	}
	handleTransfer = () =>{
		if(this.state.amount*100 < 1 )
			alert("You can't transfer less than 1€");
		else
			if(this.state.userOk)
			{
				const user_id = localStorage.getItem('user');
				const mainUser = getObjetById(user_id, 'user');
				const users = JSON.parse(localStorage.getItem('users'));
				var idCred = -1;
				users.forEach( user => {
					const name = user.email;
					if(name === this.state.selectedUser)
						idCred = user.id;
				})
				//on a retrouvé l'id de l'utilisateur désigné
				if(idCred !== -1)
				{
					if(this.state.amount*100 <= mainUser.balance)
					{
						createTransfer(user_id, idCred, JSON.stringify(this.state.amount*100));
						alert("Transaction completed");
						this.props.onButtonClick('Home');
					}
					else
						alert("There is not enough money in you wallet to perform the transaction." );

				}
				else
					console.log('ui')


					
			}
			else
				alert("Incorrect user selection");
			
	}
	handleSelectedUser = (value) =>{
		this.setState({
			selectedUser: value
		});
	}
	//set the boolean to check if a correct user is selected
	isUserCorrect = (value) => {
		this.setState({
			userOk : value
		});
	}
};

export default TransferRequest;
