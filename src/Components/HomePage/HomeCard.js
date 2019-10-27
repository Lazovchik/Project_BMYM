import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Form, FormGroup, Input,	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';
import { updateCard, makeDatePicker, formatDate, deleteObject,getCardLogo } from '../../functions/ComponentTools';

class HomeCard extends Component {

	constructor(props){
		super(props);
		//variables bidons pour l'affichage des champs
		this.state={
			change_card: false,
			startDate: new Date(),
			number: '...'+this.props.number,
			type: this.props.type
		};
	}
	
	
	render(){
		return(
		<div>
			{this.changeCard()}
		</div>
		);
	}
	handleDatePicker = date => {
		this.setState({
			startDate: date
		});
	};
	handleNumber = (event) => {
		this.setState({
			number: event.target.value
		});
	};
	handleType = (event) => {
		this.setState({
			type: event.target.value
		});
	};
	deleteUserCard = () =>{
		deleteObject(this.props.card_id, 'card');
		this.props.reRender();
	}
	//update a card and rerender all cards lists
	updateUserCard= () =>{

		var date = '';
		if(this.state.startDate !== null)
			 date = formatDate(this.state.startDate)
			
		updateCard(this.props.card_id, this.state.number, this.state.type, date);
		this.changeSwitch();
		this.props.reRender();		
	}
	changeSwitch = () =>{
		this.setState({
			change_card: !this.state.change_card
		});
	}
	//Display la carte actuel ou display les champs pour mis a jour de la carte	
	changeCard = () =>{
		if(!this.state.change_card){
			return(
				<div>
					<Row className="pt-3 w-100 home-card-list ml-1 pr-5">
						<Col className="col-sm-2 ">
							{getCardLogo(this.props.type)}		
						</Col>
						<Col className="">
							<Row className="h5 ml-1">
								Expiration Date: {this.props.exp_date}
							</Row>
							<Row className="ml-1">
								Card num: XXXX-XXXX-XXXX-{this.props.number}
							</Row>
						</Col>
						<Col className="col-sm-3">
							<Row>
								<Button  onClick={this.changeSwitch} className="home-btn my-1 btn-sm">
									Change
								</Button>
							</Row>
							<Row>
								<Button onClick={this.deleteUserCard} className="home-btn my-1  btn-sm">
									Delete
								</Button>
							</Row>
						</Col>
					</Row>
				</div>
			);
		}
		else{
			return(
				<div>
					<Row className="mt-3">
						<Form className="mt-2 w-100">
							<Row className="">
								<Col className="col-sm-3 ml-3">
									<FormGroup>
										<Input 
											value ={this.state.type} 
											onChange={this.handleType} 
											type="select" 
											name="Card Type" 
											id="card_type" 
											className="ml-4"
										>
											<option value='visa'>Visa</option>
											<option value='mastercard'>Master Card</option>
											<option value='amex'>American Express</option>
											<option value='other'>Other</option>
										</Input>
									</FormGroup>
								</Col>
								<Col className="d-flex justify-content-left pt-1 pl-4">
									{makeDatePicker(this.state.startDate, this.handleDatePicker)}
								</Col>
							</Row>
							<Row className="text-center w-100">
								<Col className="col-sm-3">
								</Col>
								<Col className="ml-3">
										<FormGroup className="w-75">
											<Input
												type="text"
												name="CardNumber"
												id="card_number"
												placeholder="XXXX-XXXX-XXXX-XXXX"
												className=" w-75 ml-3"
												value= {this.state.number}
												onChange={this.handleNumber}
											/>
										</FormGroup>
								</Col>
							</Row>
						</Form>
					</Row>
					<Row className="home-card-list w-100 pl-1 ml-1">
						<Button className="account-btn ml-3 mr-2" onClick={this.updateUserCard}>
							Accept
						</Button>
						<Button className="account-btn ml-4" onClick={this.changeSwitch}>
							Cancel
						</Button>
					</Row>
				</div>
			);
		}
	}
	
}

export default HomeCard;
