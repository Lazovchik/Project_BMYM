import React, { Component } from 'react';

import {
	Container,  Form,
	FormGroup, Label, Input,
	Button, Row,
} from 'reactstrap';
import {createUser} from '../../functions/ComponentTools.js';
import CountrySelect from '../others/CountrySelect';
import './LogSignIn.css';

class SignIn extends Component {
 	
	constructor(props)
    {
      super(props);
      this.state = {
        mail : '',
        pw : '',
        surname : '',
		name : '',
		origin: '',
		street:'',
		city: '',
		phone:''
      };
    }

	render() {
		return (
			<Container className='LogSignIn rounded yellow-style'>
				<Row className='justify-content-md-center'>
					<h1>Sign In</h1>
				</Row>
				<Row className='justify-content-md-center'>
					<Form>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='FirstName'>First Name</Label>
								<Input
									type='text'
									name='first_name'
									id='FirstName'
									placeholder='John'
									className='input-att'
									value={this.state.name}
                    				onChange={this.HandleNameEvent}
								/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='LastName'>Last Name</Label>
								<Input
									type='text'
									name='last_name'
									id='LastName'
									placeholder='Smith'
									className='input-att'
									value={this.state.surname}
                   				 	onChange={this.HandleSurnameEvent}
								/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<Label for="Country">Country</Label>
						</Row>
						<Row className='justify-content-md-center'>
							<CountrySelect onEvent = {this.HandleOriginEvent}/>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='Street'>Adress</Label>
										<Input
											type="text"
											name="Street"
											id="Street"
											placeholder="Number + Street"
											className=""
											value={this.state.street}
                   				 			onChange={this.HandleStreetEvent}
										/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='City'>City</Label>
									<Input
										type="text"
										name="City"
										id="City"
										placeholder="Index + City"
										className=""
										value={this.state.city}
                   				 		onChange={this.HandleCityEvent}
									/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='Phone'>Phone</Label>
									<Input
										type="text"
										name="Phone"
										id="Phone"
										placeholder="Phone number"
										className=""
										value={this.state.phone}
                   				 		onChange={this.HandlePhoneEvent}
									/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='Email'>Email</Label>
								<Input
									type='email'
									name='email'
									id='Email'
									placeholder='myemail@email.com'
									className='input-att'
									value={this.state.mail}
                    				onChange={this.HandleMailEvent}
								/>
							</FormGroup>
						</Row>
						<Row className='justify-content-md-center'>
							<FormGroup>
								<Label for='Password'>Password</Label>
								<Input
									type='password'
									name='password'
									id='Password'
									placeholder='********'
									className='input-att'
									value={this.state.pw}
                    				onChange={this.HandlePwEvent}
								/>
							</FormGroup>
						</Row>	
					</Form>
				</Row>
				<Row className='justify-content-md-center'>
					<Button onClick={this.AddUser} className='btn-att'>
						Sign In
					</Button>
				</Row>
{/* 				{showUsers()}*/}
				<br/>
			</Container>
		);
	}

	
	//add a new user to db and return to Home
	AddUser = () =>{
		const userId = createUser(this.state.name, this.state.surname, 
						this.state.mail, this.state.pw, 'false', this.state.origin, this.state.street,
						 this.state.city, this.state.phone);

		localStorage.setItem('user', userId );
		this.props.onButtonClick('Home');
	  }
	  HandleOriginEvent = (event) =>{
		this.setState({
		  origin : event.target.value,
		});
	  }
	  HandleStreetEvent = (event) =>{
		this.setState({
		  street : event.target.value,
		});
	  }
	  HandleCityEvent = (event) =>{
		this.setState({
		  city : event.target.value,
		});
	  }
	  HandlePhoneEvent = (event) =>{
		this.setState({
		  phone : event.target.value,
		});
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
