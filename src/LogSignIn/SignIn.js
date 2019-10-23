import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container,  Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';
import { createUser, showUsers} from '../functions/ComponentTools.js';

import './LogSignIn.css';

class SignIn extends Component {
 	
	constructor(props)
    {
      super(props);
      this.state = {
        mail : "",
        pw : "",
        surname : "",
        name : ""
      };
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
								<Label for="FirstName">First Name</Label>
								<Input
									type="text"
									name="first_name"
									id="FirstName"
									placeholder="John"
									className="input-att"
									value={this.state.name}
                    				onChange={this.HandleNameEvent}
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
									value={this.state.surname}
                   				 	onChange={this.HandleSurnameEvent}
								/>
							</FormGroup>
						</Row>
						<Row className="justify-content-md-center">
							<FormGroup>
								<Label for="Email">Email</Label>
								<Input
									type="email"
									name="email"
									id="Email"
									placeholder="myemail@email.com"
									className="input-att"
									value={this.state.mail}
                    				onChange={this.HandleMailEvent}
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
									value={this.state.pw}
                    				onChange={this.HandlePwEvent}
								/>
							</FormGroup>
						</Row>	
					</Form>
				</Row>
				<Row className="justify-content-md-center">
					<Button onClick={this.AddUser} className="btn-att">
						Log In
					</Button>
				</Row>
{/* 				{showUsers()}*/}
			</Container>
		);
	}

	AddUser = () =>{
		createUser(this.state.name, this.state.surname, this.state.mail, this.state.pw, "false");
		this.setState({
		  mail : "",
		  pw : "",
		  surname :"",
		  name : ""
		});
		this.props.onButtonClick('Home');
	  }
	  HandleSurnameEvent = (event) =>{
		this.setState({
		  surname : event.target.value,
		});
	  }
	  HandleNameEvent = (event) =>{
		this.setState({
		  name : event.target.value,
		});
	  }
	  HandleMailEvent = (event) =>{
		this.setState({
		  mail : event.target.value,
		});
	  }
	  HandlePwEvent = (event) =>{
		this.setState({
		  pw : event.target.value,
		});
	  }
};

export default SignIn;
