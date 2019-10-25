import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Row,
} from 'reactstrap';
import { getTabByUserId } from '../functions/ComponentTools';
import './HomePage.css';
import HomeCard from './HomeCard';
class HomeCradList extends Component {

	render(){
		return(
			<div>
				<Row className="pl-5 pt-3">
					<h2>Cards</h2>	
				</Row>
				
				{this.displayCards()}
			
			</div>
		);
	}
	//return a component HomeCard for each card a user have
	displayCards(){
		var cardDisplayed = 'none';

		//get the user id
		const user_id = parseInt(localStorage.getItem('user'));
		//get all the cards
		const cardsTab = getTabByUserId(user_id, 'card');
		
			if(cardsTab !== null)
				cardDisplayed = cardsTab.map( card =>
					{
						return <HomeCard 
						key = {card.id} 
						type = {card.brand}
						number = {card.last_4}
						exp_date = {card.expired_at}
						onButtonClick = {this.props.onButtonClick}/>
					});
			return <div className = "cards"> {cardDisplayed} </div>
		
	}
};

export default HomeCradList;
