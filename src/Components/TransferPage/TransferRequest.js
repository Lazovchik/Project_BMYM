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
			amount: 0 
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
												placeholder="0.00"
												value = {this.state.amount}
												onChange = {this.handleAmount}
											/>
										</FormGroup>
									</Row>
									<Row>
										<FormGroup className="ml-5">
											<Label for="name">Enter creditors Name:</Label>
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
		if(this.state.amount < 1 )
			alert("You can't transfer less than 1€");
		else
			if(this.state.userOk)
			{
				const user_id = localStorage.getItem('user');
				const users = JSON.parse(localStorage.getItem('users'));
				var idCred = -1;
				users.forEach( user => {
					const name = user.first_name+" "+user.last_name;
					if(name === this.state.selectedUser)
						idCred = user.id;
				})
				if(idCred != -1)
				{
					createTransfer(user_id, idCred, JSON.stringify(this.state.amount*100));
					alert("Transaction completed");
				}
					
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
