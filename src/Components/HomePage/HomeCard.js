import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Form, FormGroup, Input,	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';
import {getObjetById, updateCard} from '../../functions/ComponentTools';

import visa from '../../data/img/VISA.png';
import master_card from '../../data/img/MC.png';
import amex from '../../data/img/AMEX.png';

class HomeCard extends Component {

	constructor(props){
		super(props);
		//variables bidons pour l'affichage des champs
		this.state={
			add_card: false,
			change_card: false
		};

		this.getCardLogo = this.getCardLogo.bind(this);
		this.addCard = this.addCard.bind(this);
		this.addSwitch = this.addSwitch.bind(this);
		this.changeCard = this.changeCard.bind(this);
		this.changeSwitch = this.changeSwitch.bind(this);
	}
	
	getCardLogo(){
		switch (this.props.type){
			case 'visa':
				return(
					<img 
						src={visa}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="VISA"
					/>
				);
			case 'amex':
				return(
					<img 
						src={amex}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="AMEX"
					/>
				);
			case 'mastercard':
				return(
					<img 
						src={master_card}
       					width="60"
						height="40"
						className="d-inline-block align-top"
				   		alt="MC"
					/>
				);
			default :
				return '';
		}
	}
	//Switches des booléens pour display/pas display les champs
	addSwitch(){
		this.setState({
			add_card: !this.state.add_card
		});
	}
 	
	changeSwitch(){
		this.setState({
			change_card: !this.state.change_card
		});
	}
	//return les champs a remplir pour ajouter une carte
	addCard(){
		if(this.state.add_card){
			return(
				<div>
					<Row className="mt-3">
						<Form className="mt-2 w-100">
							<Row className="">
							<Col className="col-sm-4 ml-3">
								<FormGroup>
									<Input type="select" name="Card Type" id="card_type" className="ml-4">
										<option>Visa</option>
										<option>Master Card</option>
										<option>American Express</option>
										<option>Other</option>
									</Input>
								</FormGroup>
							</Col>
							<Col className="">
								<Row className="w-100">
									<FormGroup className ="w-100">
										<Input 
											type="select" 
											name="Expiration Date" 
											id="exp_date" 
											className="w-75 ml-3"
										>
											<option>Add DatePicker</option>
										</Input>
									</FormGroup>
								</Row>
								<Row className="text-center w-100">
									<FormGroup className="w-100">
										<Input
											type="text"
											name="CardNumber"
											id="card_number"
											placeholder="XXXX-XXXX-XXXX-XXXX"
											className=" w-75 ml-3"
										/>
									</FormGroup>
								</Row>
							</Col>
							</Row>
						</Form>
					</Row>
					<Row className="account-email-row w-100 pl-4">
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
	//Display la carte actuel ou display les champs pour mis a jour de la carte	
	changeCard(){
		if(!this.state.change_card){
			return(
				<div>
					<Row className="pt-3 home-card-list">
						<Col className="col-sm-3">
							{this.getCardLogo()}		
						</Col>
						<Col className="">
							<Row className="h5">
								Expiration Date: {this.props.exp_date}
							</Row>
							<Row>
								Card num: XXXX-XXXX-XXXX-{this.props.number}
							</Row>
						</Col>
						<Col className="col-sm-3">
							<Row>
								<Button  onClick={this.changeSwitch} className="home-btn">
									Change
								</Button>
							</Row>
							<Row>
								<Button  className="home-btn mt-1">
									Delete
								</Button>
							</Row>
						</Col>
					</Row>
					<br/>
					<Row className="pt-3">
						<Button onClick = {this.addSwitch} className="home-btn ml-5"> 
							Add
						</Button>
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
							<Col className="col-sm-4 ml-3">
								<FormGroup>
									<Input type="select" name="Card Type" id="card_type" className="ml-4">
										<option>Visa</option>
										<option>Master Card</option>
										<option>American Express</option>
										<option>Other</option>
									</Input>
								</FormGroup>
							</Col>
							<Col className="">
								<Row className="w-100">
									<FormGroup className ="w-100">
										<Input 
											type="select" 
											name="Expiration Date" 
											id="exp_date" 
											className="w-75 ml-3"
										>
											<option>Add DatePicker</option>
										</Input>
									</FormGroup>
								</Row>
								<Row className="text-center w-100">
									<FormGroup className="w-100">
										<Input
											type="text"
											name="CardNumber"
											id="card_number"
											placeholder="XXXX-XXXX-XXXX-XXXX"
											className=" w-75 ml-3"
										/>
									</FormGroup>
								</Row>
							</Col>
							</Row>
						</Form>
					</Row>
					<Row className="account-email-row w-100 pl-4">
						<Button className="account-btn ml-3" onClick={this.changeSwitch}>
							Accept
						</Button>
						<Button className="account-btn ml-3" onClick={this.changeSwitch}>
							Cancel
						</Button>
					</Row>
				</div>
			);
		}
	}

	//!!!!!!!!!

	render(){
		return(
		<div>
			{this.changeCard()}
			{this.addCard()}
			
		</div>
		);
	}
};

export default HomeCard;
