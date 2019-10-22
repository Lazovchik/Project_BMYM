import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container,  Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './LogSignIn.css';

class LogIn extends Component {
 	
	constructor(props){
		super(props);	
	}

	render() {
		return (
			<Container className="LogSignIn rounded yellow-style">
				<Row className="justify-content-md-center">
					<h1>Log In</h1>
				</Row>
				<Row className="justify-content-md-center">
					<Form>
						<Row className="justify-content-md-center">
							<FormGroup>
								<Label for="Email">Email</Label>
								<Input
									type="email"
									name="email"
									id="Email"
									placeholder="myemail@email.com"
									className="input-att"
								/>
							</FormGroup>
						</Row>
						<Row className="justify-content-md-center">
							<FormGroup>
								<Label for="Password">Password</Label>
								<Input
									type="password"
									name="password"
									id="Password"
									placeholder="********"
									className="input-att"
								/>
							</FormGroup>
						</Row>
					</Form>
				</Row>
				<Row className="justify-content-md-center">
					<Button className="btn-att">
						Log In
					</Button>
				</Row>

			</Container>
		);
	}
};

export default LogIn;
