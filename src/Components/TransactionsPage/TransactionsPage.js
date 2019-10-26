import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Row, Card, CardBody
} from 'reactstrap';

import './TransactionsPage.css';
import TransfersDisplay from './TransfersDisplay';
import OperationsDisplay from './OperationsDisplay';
import { getTabByUserId, getObjetById } from '../../functions/ComponentTools';

class TransactionsPage extends Component {

	render(){
		return(
			<Container className="rounded transactions-main-container w-75 pb-5" fluid>
				<Row>
					<Col>
						<Row className="h1 text-left pl-4">
							Transfer History
						</Row>
						{this.displayTransfers()}
					</Col>
					<Col>
						<Row className="h1 text-left pl-4">
							Operations History
						</Row>
						{this.displayOperations()}
					</Col>
				</Row>
			</Container>
		);
	}

	//return a component TransfersDisplay for each transfer a user have
	displayTransfers(){
		var transfersDisplayed = 'none';
		//get the user id
		const user_id = parseInt(localStorage.getItem('user'));
		//get all the transfers
		var transfersTab = getTabByUserId(user_id, 'transfer');
		
		if(transfersTab !== null)
			{
				transfersDisplayed = transfersTab.map( transfer =>
					{
						//get infos from the transfer
						const debUser = getObjetById(parseInt(transfer.debited_wallet_id), 'user');
						const credUser = getObjetById(parseInt(transfer.credited_wallet_id), 'user');
						const debName = debUser.first_name + ' ' +debUser.last_name;
						const credName = credUser.first_name + ' ' +credUser.last_name;
						const transferAmount = parseFloat(transfer.amount / 100);

						return <TransfersDisplay 
						key = {transfer.id}
						debUser = {debName}
						credUser = {credName}
						amount = {transferAmount} />
					});
			}
			transfersDisplayed = <div className = "transfers"> 
									<Row>
										<Card className="rounded default-transactions-card mt-1 ml-4 w-100">	
											<CardBody>
												<Row className="h3 ">
													<Col>
														Debited
													</Col>
													<Col>
														Credited
													</Col>
													<Col>
														Amount
													</Col>
												</Row>
												{transfersDisplayed}
											</CardBody>
										</Card>
									</Row> 
								</div>
			return transfersDisplayed ;
		
	}
	//return a component OperationsDisplay for each operation a user have
	displayOperations(){
		var operationsDisplayed;
		//get the user id
		const user_id = parseInt(localStorage.getItem('user'));
		operationsDisplayed = this.getOperationsInfos(user_id, 'payin');
		operationsDisplayed = operationsDisplayed + this.getOperationsInfos(user_id,'payout')
		if( typeof(operationsDisplayed) !== typeof(String) )
			operationsDisplayed = 'none';
		operationsDisplayed = <div className = "operations"> 
								<Row>
									<Card className="rounded default-transactions-card mt-1 ml-4 w-100">	
										<CardBody>
											<Row className="h3 ">
												<Col>
													Operation
												</Col>
												<Col>
													Amount
												</Col>
											</Row>
												{operationsDisplayed}
										</CardBody>
									</Card>
								</Row>
							  </div>
		return operationsDisplayed ;
		
	}
	getOperationsInfos(user_id, type){
		//get all the operations of type specified
		var operationsTab = getTabByUserId(user_id, type);
		var operationsDisplayed;
		if(type === 'payin')
			type = 'Pay In';
		else
			type = 'Pay Out';

		if(operationsTab !== null)
		{
			operationsDisplayed = operationsTab.map( operation =>
				{
					return <OperationsDisplay 
					key = {operation.id}
					type = {type}
					amount = {operation.amount} />
				});
			return operationsDisplayed;
		}
		
	}
};

export default TransactionsPage;
