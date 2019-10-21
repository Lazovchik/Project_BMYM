import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Col, Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';

import './LogSignIn.css';
import LogInForm from './LogInForm';

class LogSignIn extends Component {
 	
	constructor(props){
		super(props);
		this.state={
			log_or_sign: true, //si on affiche forme signIn ou logIn, par default c log in
			c_action: "Sign In"//Titre + texte de button
		};
		this.logOrSignVerif = this.logOrSignVerif.bind(this);
	}

	logOrSignVerif(){
		if (this.state.log_or_sign){
			this.c_action = "Sign In";
		}
		else{
			this.c_action = "Log In";
		}

		return (
			<div>
				<Row className="justify-content-md-center">
					<h1>{this.c_action}</h1>
				</Row>
				<Row className="justify-content-md-center">
					<LogInForm log_or_sign={this.state.log_or_sign}/>
				</Row>
				<Row className="justify-content-md-center">
					<Button className="btn-att">
						{this.c_action}
					</Button>
				</Row>
			</div>
		);
	}

	render() {
		return (
			<Container className="LogSignIn rounded yellow-style">
				{this.logOrSignVerif()}
			</Container>
		);
	}
};

export default LogSignIn;
