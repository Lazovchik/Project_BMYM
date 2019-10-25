import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Container,  Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';
import IsInDb from '../../functions/ComponentTools.js';
import './LogSignIn.css';

class LogIn extends Component {
 	
	constructor(props)
    {
      super(props);
      this.state = {
        mail : '',
        pw : '',
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
					<Button onClick={this.CheckUser} className="btn-att">
						Log In
					</Button>
				</Row>
				<br/>
			</Container>
		);
	}
	//check if the user is in the db and approve the connection
	CheckUser = () => {

	const indexUser = IsInDb(this.state.mail, this.state.pw);
      if( indexUser !== false)
      {
		localStorage.setItem('user', indexUser );
		console.log('user '+ localStorage.getItem('user') + ' connected');
		this.props.onButtonClick('Home');
	  }
	  else
      	this.setState({
			mail : '',
			pw : ''
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

export default LogIn;
