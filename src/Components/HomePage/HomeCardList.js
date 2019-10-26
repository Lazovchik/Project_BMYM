import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Form, FormGroup, Input, Label,
	Col, Button, Row, Card
} from 'reactstrap';
import { getTabByUserId, formatDate, createCard, makeDatePicker } from '../../functions/ComponentTools';
import './HomePage.css';
import HomeCard from './HomeCard';
class HomeCradList extends Component {

	constructor(props){
		super(props);
		this.state = {
			rerender : true,
			nNumber: '',
			nType:'visa',
			nStartDate: new Date(),
			add_card: false,
			button: 'Add'


		}
	}
	render(){
		return(
			<div>
				<Card className="w-100 ml-1 mt-4 default-home-card">
					<Row className="pl-5 pt-3">
						<h2>Cards</h2>	
					</Row>
					
					{this.displayCards()}
					{this.addCard()}
				</Card>
			</div>
		);
	}
	handleNewDatePicker = date => {
		this.setState({
			nStartDate: date
		});
	};
	handleNewNumber = (event) => {
		this.setState({
			nNumber: event.target.value
		});
	};
	handleNewType = (event) => {
		this.setState({
			nType: event.target.value
		});
	};
	//return a component HomeCard for each card a user have
	displayCards(){
		var cardDisplayed = 'none';
		//get the user id
		const user_id = parseInt(localStorage.getItem('user'));
		//get all the cards
		var cardsTab = getTabByUserId(user_id, 'card');
		//sort the array by id to always display in the same order values
			if(cardsTab !== null)
			{
				cardDisplayed = cardsTab.map( card =>
					{
						return <HomeCard 
						key = {card.id} 
						card_id = {card.id}
						type = {card.brand}
						number = {card.last_4}
						exp_date = {card.expired_at}
						onButtonClick = {this.props.onButtonClick}
						reRender = {this.reRenderer} />
					});
				cardsTab.sort(function(a, b){return parseInt(a.id) - parseInt(b.id)});
			}
				
			cardDisplayed = <div className = "cards"> 
								{cardDisplayed} 
								<Row className="pt-3 pl-3">
									<Button onClick = {this.addSwitch} className="home-btn mb-3 ml-4"> 
										{this.state.button}
									</Button>
								</Row>
							</div>
			return cardDisplayed ;
		
	}
	//return les champs a remplir pour ajouter une carte
	addCard = () =>{
		if(this.state.add_card){
			return(
				<div>
					<Row className="mt-3">
						<Form className="mt-2 w-100">
							<Row className="">
								<Col className="col-sm-3 ml-3 text-left">
									<h5 className ="ml-4">Type</h5>
								</Col>
								<Col className="pl-4">
									<h5 class="text-left">Expiration date</h5>
								</Col>
							</Row>
							<Row className="">
								<Col className="col-sm-3 ml-3">
											<FormGroup>
												<Input 
													value ={this.state.nType} 
													onChange={this.handleNewType} 
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
									{makeDatePicker(this.state.nStartDate, this.handleNewDatePicker)}
								</Col>
							</Row>
							<Row className="text-center w-100">
								<Col className="col-sm-3">	
								</Col>
								<Col className="ml-3">
									<h5 className="text-left ml-3">Card Number</h5>
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
												value={this.nNumber}
												onChange={this.handleNewNumber}
											/>
										</FormGroup>
								</Col>
							</Row>
						</Form>
					</Row>
					<Row className="home-card-list w-100 pl-1 ml-1">
						<Button className="account-btn ml-3 mr-2" onClick={this.newCardCreation}>
							Accept
						</Button>
						<Button className="account-btn ml-4" onClick={this.addSwitch}>
							Cancel
						</Button>
					</Row>
				</div>
			);
		}
	}
	//Switches des booléens pour display/pas display les champs
	addSwitch = () =>{
		this.setState({
			add_card: !this.state.add_card
		});
		if(this.state.add_card)
			this.setState({
				button: 'Add'
			});
		else
			this.setState({
				button: 'Cancel'
			});

	}
	//create a new card in the db and rerender all cards lists
	newCardCreation = () =>{

		const user_id = parseInt(localStorage.getItem('user'));
		var date = '';
		if(this.state.nStartDate !== null)
			 date = formatDate(this.state.nStartDate)
			
		createCard(user_id, this.state.nNumber, this.state.nType, date);
		this.addSwitch();
		//this.props.reRender();		
	}
	reRenderer = () => {
		this.setState({
			rerender: !this.rerender
		});
	}
};

export default HomeCradList;
