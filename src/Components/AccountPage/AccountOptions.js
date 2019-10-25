import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Col, Form,
	Button, Row, Card, CardBody, 
} from 'reactstrap';
import {getObjetById, updateUser} from '../../functions/ComponentTools';
import CountrySelect from '../others/CountrySelect';

import './AccountPage.css';

class AccountOptions extends Component {

	constructor(props){
		super(props);

		this.state={
			nationality:'',
			id:'',
			nationality_mod: false
		};
	}
	componentDidMount()
	{
		this.getUserInfo();
	}
	render(){
		return(
			<Row>
				<Card className='w-100 mt-3 ml-5 default-account-card'>
					<CardBody>
						<div>
							<Row className='ml-1 text-uppercase '>
								Options
							</Row>
								{this.nationalityDisp()}
								{this.idDisp()}
							<Row>
								<Button className='account-btn mt-3'>
									Close my account
								</Button>
							</Row>
						</div>
					</CardBody>
				</Card>
			</Row>
		);
	}
	//get user informations and put them into states
	getUserInfo = () =>{
		const user_id = parseInt(localStorage.getItem('user'));
		const user = getObjetById(user_id, 'user');
		this.setState({
			nationality : user.origin,
			id : user.id,
		});
	}
	//change the mod and update user info
	nationalityMod = () =>{
		if(this.state.nationality_mod)
		{
			updateUser('','','','',this.state.nationality,'','','');
			this.getUserInfo();
		}
		this.setState({
			nationality_mod: !this.state.nationality_mod
		});
	}
	idMod = () => {
		this.setState({
			id_mod: !this.state.id_mod
		});
	}
	//display id user
	idDisp = () =>{
		
			return(
				<Row className='account-option-row'>
					<Col className='h5 pt-3 col-sm-3'>
						ID
					</Col>
					<Col className='pt-3'>	
						{this.state.id}
					</Col>
					<Col className='pt-3'>	
					</Col>
				</Row>
			);
	}
	//display nationality of the user
	nationalityDisp = () => {
		if(!this.state.nationality_mod){
			return(
				<Row className='account-option-row'>
					<Col className='h5 pt-3 col-sm-3'>
						Nationality
					</Col>
					<Col className='pt-3'>	
						{this.state.nationality}
					</Col>
					<Col className='pt-2 pl-5 col-sm-4'>
						<Button className='account-btn' onClick={this.nationalityMod}>
							Change
						</Button>
					</Col>
				</Row>
			);
		}
		else{
			return(
				<Row className='account-option-row'>
					<Col className='h5 pt-3 col-sm-3'>
						Nationality
					</Col>
					<Col className='pt-2'>	
						<Form>
							<CountrySelect country = {this.state.nationality} onEvent = {this.HandleNationalityEvent}/>
						</Form>
					</Col>
					<Col className='pt-2 pl-5 col-sm-4'>
						<Button className='account-btn' onClick={this.nationalityMod}>
							Apply
						</Button>
					</Col>
				</Row>
			);
		}

	}
	HandleNationalityEvent = (event) =>{
		this.setState({
			nationality : event.target.value,
		});
	  }
};

export default AccountOptions;
