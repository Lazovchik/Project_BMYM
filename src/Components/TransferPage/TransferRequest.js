import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Row, Col,
	Card, CardTitle, CardBody,
	Input, Form, FormGroup,
	Label, Button
} from 'reactstrap';

import './TransferPage.css';

class TransferRequest extends Component {

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
											<Label for="email">Enter creditors email:</Label>
											<Input
												type="text"
												name="Email"
												id="email"
												placeholder="example@email.world"
											/>
										</FormGroup>
									</Row>
									<Row>
										<FormGroup className="ml-5">
											<Label for="email">Enter the amount:</Label>
											<Input
												type="number"
												name="Amount"
												id="amount"
												placeholder="0.00"
											/>
										</FormGroup>
									</Row>
								</Form>
							</Row>
							<Row className="w-100">
								<Col>
								</Col>
								<Col className="col-sm-2 ml-1">
								<Button className="transfer-btn">
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
};

export default TransferRequest;
