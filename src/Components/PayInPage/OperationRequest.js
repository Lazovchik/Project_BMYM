import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Row, Col,
	Card, CardTitle, CardBody,
	Input, Form, FormGroup,
	Label, Button
} from 'reactstrap';

import './Operation.css';
import { getTabByUserId, getObjetById } from '../../functions/ComponentTools';


class OperationRequest extends Component {

	constructor(props){
		super(props);
		this.state = {
			amount : 0
		};
	}
	render(){
		var type = '';
		var sentence = '';
		if(this.props.type === 'payin')
		{
			type = 'Pay In';
			sentence = 'Enter debited card number:';
		}
		else
		{
			sentence = 'Enter credited card number:';
			type = 'Pay Out';
		}
			
		return(
			<div>
				<Row className="text-left">
					<Card className="default-pay-card w-100 ml-4 mr-4 mt-3">
						<CardTitle className="h1 pl-4">
							Make a {type} operation:
						</CardTitle>
				 		<CardBody className="w-100">
							<Row>
								<Form>
									<Row>
										<FormGroup className="ml-5">
											<Label for="deb_card">{sentence}</Label>
											<select class="form-control" id="exampleFormControlSelect1">
												{this.displayUserCards()}
										    </select>
										</FormGroup>
									</Row>
									<Row>
										<FormGroup className="ml-5">
											<Label for="amount">Enter the amount:</Label>
											<Input
												type="number"
												name="Amount"
												id="amount"
												placeholder="0.00"
												value = {this.state.amount}
												onChange = {this.handleAmount}
											/>
										</FormGroup>
									</Row>
								</Form>
							</Row>
							<Row className="w-100">
								<Col >
								</Col>
								<Col className="col-sm-5 ">
									<Button className="pay-btn mx-1" onClick={this.handleAccept}>
										Accept
									</Button>
									<Button className="pay-btn mx-1	" onClick={this.handleCancel}>
										Cancel
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
		})
	}
	handleCancel = () =>{
		this.props.onButtonClick('Home');
	}
	handleAccept = () =>{
		

		if(this.state.amount < 1 )
			alert("You can't transfer less than 1€");
		else
		{
			//check if user have enough money
			if(this.props.type === 'payout')
			{
				const user = getObjetById(localStorage.getItem('user'), 'user');
				if(this.state.amount > parseInt(user.balance)/100)
				{
					alert("There is not enough money in you wallet to perform the transaction." );
					return false;
				}
				


			}
			this.props.onButtonClick('Home');
		
		}
			
	}
	//retrieve all the user cards
	findUserCards = () =>{
		
		const user_id = parseInt(localStorage.getItem('user'));
		const cardTabs = getTabByUserId(user_id, 'card');
		return cardTabs;
	}
	//return all the cards within options tag for a select
	displayUserCards = () =>{
		var brand = '';
		var display = this.findUserCards().map( card =>{
			switch(card.brand){
				case 'visa':
					brand = 'Visa';
					break;
				case 'mastercard':
					brand = 'Master Card';
					break;
				case 'other':
					brand = 'Other';
					break;
				case 'amex':
					brand = 'American E';
					break;
			}
			return <option className='option'>{brand}, num: ..{card.last_4} Date: {card.expired_at}  </option>
		});
		console.log(display);
		return display;
	}

};

export default OperationRequest;
