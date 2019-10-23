import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Button, Row,
} from 'reactstrap';

import './HomePage.css';
import HomeCard from './HomeCard';
class HomeCradList extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Row className="pl-5 pt-3">
					<h2>Accounts and cards</h2>	
				</Row>
				
				<HomeCard/>
			
			</div>
		);
	}
};

export default HomeCradList;
