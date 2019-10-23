import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row, Card,
	CardTitle, CardSubtitle, CardText, CardBody,
} from 'reactstrap';

import './HomePage.css';

class RecentActivity extends Component {

	constructor(props){
		super(props);

		this.state ={
			date: new Date (),
			description: "Pornhub Premium subscription",
			operation: "Payment"
		};

		this.typeMonth = this.typeMonth.bind(this);
	}

	typeMonth(){
		let monthNumber = (this.state.date.getMonth());
		let monthNames = ["January", "February", "March", "April", 
		"May", "June", "July", "August", "September", "October", "November", "December"];
		let monthName = monthNames[monthNumber];

		// render jsx
		return(
			<div>{monthName}</div>
		);
	}

	render(){
		return(
		<div>
			<Row>
				<Card className="w-75 ml-5 mt-5 default-home-card">
					<CardBody>
						<CardTitle className="h3 text-left">
							Recent Activity
						</CardTitle>
						<CardText className="text-left">
							<Row>
								<Col className="h5 col-sm-3">
									{this.typeMonth()}
								</Col>
								<Col>
									{this.state.description}
								</Col>
							</Row>
							<Row className="activity-list">
								<Col className="col-sm-3">
									{this.state.date.getDate()}
								</Col>
								<Col>
									Operation
								</Col>
							</Row>
						</CardText>
						<Row className="justify-content-left pl-2">
							<Button className="home-btn">
								View More
							</Button>
						</Row>
					</CardBody>
				</Card>
			</Row>
		</div>
		);
	}
};

export default RecentActivity;
