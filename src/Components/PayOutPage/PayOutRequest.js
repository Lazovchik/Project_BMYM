import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Row, Col,
	Card, CardTitle, CardBody,
	Input, Form, FormGroup,
	Label, Button
} from 'reactstrap';

import './PayOutPage.css';

class PayOutRequest extends Component {

	render(){
		return(
			<div>
				<Row className="text-left">
					<Card className="default-pay-card w-100 ml-4 mr-4 mt-3">
						<CardTitle className="h1 pl-2">
							Make a PayOut operation:
						</CardTitle>
				 		<CardBody className="w-100">
							<Row>
								<Form>
									<Row>
										<FormGroup className="ml-5">
											<Label for="cred_card">Enter credited card number:</Label>
											<Input
												type="text"
												name="CredCard"
												id="cred_card"
												placeholder="XXXX-XXXX-XXXX-XXXX"
											/>
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
											/>
										</FormGroup>
									</Row>
								</Form>
							</Row>
							<Row className="w-100">
								<Col>
								</Col>
								<Col className="">
									<Button className="pay-btn">
										PayIn
									</Button>
								</Col>
								<Col>
									<Button className="pay-btn">
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
};

export default PayOutRequest;
