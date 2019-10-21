import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './LogSignIn.css';


class LogInForm extends Component {
	
	constructor(props){
		super(props);

		this.state ={
			log_or_sign: this.props.log_or_sign
		};
	}

	logOrSignVerif(){
		if (this.state.log_or_sign){
			return(
				<div>
					<Row className="justify-content-md-center">
						<FormGroup>
							<Label for="FirstName">First Name</Label>
							<Input
								type="text"
								name="first_name"
								id="FirstName"
								placeholder="John"
								className="input-att"
							/>
						</FormGroup>
					</Row>
					<Row className="justify-content-md-center">
						<FormGroup>
							<Label for="LastName">Last Name</Label>
							<Input
								type="text"
								name="last_name"
								id="LastName"
								placeholder="Smith"
								className="input-att"
							/>
						</FormGroup>
					</Row>
				</div>
			);
		}
		else{
			return 0;
		}
	}

	render(){
		return(
			<Form>
				{this.logOrSignVerif()}
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
		);
	}


};

export default LogInForm;
