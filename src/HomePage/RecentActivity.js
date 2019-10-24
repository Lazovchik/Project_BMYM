import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	 Col, Button, Row, Card,
	CardTitle, CardBody,
} from 'reactstrap';
import { getLastTransfer, getObjetById } from '../functions/ComponentTools';

import './HomePage.css';

class RecentActivity extends Component {

	constructor(props){
		super(props);

		this.state ={
			debWall: '',
			credWall: '',
			amount: ''
		};
	}
	componentWillMount()
	{
		this.getTransferInfos();
	}


	render(){
		return(
		<div>
			<Row>
				<Card className="w-100 ml-5 mt-5 default-home-card">
					<CardBody>
						<CardTitle className="h3 text-left">
							Recent Activity
						</CardTitle>
						{this.displayLastActivity()}
						<br/>
						<Row className="justify-content-left pl-2">
							<Button onClick = {this.handleTransactions} className="home-btn">
								View More
							</Button>
						</Row>
					</CardBody>
				</Card>
			</Row>
		</div>
		);
	}
	handleTransactions = () => {
		this.props.onButtonClick('Transactions');
	}
	displayLastActivity = () => {
		if(this.state.debWall !== '')
			return(
					<div className="text-left">
						<Row className="activity-list">
							<Col >
								<h3>Debited</h3>
							</Col>
							<Col>
								<h3>Credited</h3>
							</Col>
							<Col >
								<h3>Amount</h3>
							</Col>
						</Row>
						<Row className="activity-list">
							<Col >
								{this.state.debWall}
							</Col>
							<Col>
								{this.state.credWall}
							</Col>
							<Col className=" text-center">
								- {this.state.amount}
							</Col>
						</Row>
					</div>
			);
		else
				return 'none'
	}
	//get the last transfer infos and place them into component states
	getTransferInfos = () => {

	const user_id = parseInt(localStorage.getItem('user'));
	const lastTransfer = getLastTransfer(user_id);
	if(lastTransfer !== null)
	{
		const debUser = getObjetById(parseInt(lastTransfer.debited_wallet_id), 'user');
		const credUser = getObjetById(parseInt(lastTransfer.credited_wallet_id), 'user');
		const debName = debUser.first_name + ' ' +debUser.last_name;
		const credName = credUser.first_name + ' ' +credUser.last_name;
		const transferAmount = parseFloat(lastTransfer.amount / 100)
		this.setState({
			debWall: debName,
			credWall: credName,
			amount: transferAmount
		});
	}
	
	}
	
};

export default RecentActivity;
