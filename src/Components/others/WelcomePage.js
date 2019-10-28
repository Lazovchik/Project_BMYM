import React, {Component} from 'react';
//css and reactstrap
import './WelcomePage.css'
import 'bootstrap/dist/css/bootstrap.css';

import {Button} from 'reactstrap';
//import img
import champion from '../../data/img/champion.png';
import hare from '../../data/img/hare.png';
import international from '../../data/img/international.png';
import secur from '../../data/img/secur.png';
import user from '../../data/img/user.png';
import price from '../../data/img/price.png';
class WelcomePage extends Component{

    render(){
        return(<div className="WelcomePage">
            <div className='rounded home-main-container w-50 pb-5 container-fluid pt-5 justify-content-center'>
                 <div className=' mx-auto text-center font-weight-bold text-light'>
                    <h2>Welcome to Watermelon,<br/> A smartest way to manage your money on internet</h2>
                </div> 
                <Button onClick = {this.handleSignIn} className="btn-nav mx-3">
							Sign In
                </Button>
                <Button onClick = {this.handleLogIn} className="btn-nav mx-3">
							Log  In
                </Button>
            </div>
                <div className='rounded home-main-container w-75 pb-5 container-fluid '>
                    <div className='col-md-1 mx-auto pt-5'></div>
                        <div className='col-md-5 mx-auto text-center font-weight-bold text-light'>
                            <h4>A convenient and easy-to-use account</h4>
                        </div> 
                    <div className='row my-5 '>
                        <div className='col-md-3 mx-auto'>
                            <div className='w-100   default-home-card card'>
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={secur}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="Security"
                                        />  
                                    </p>
                                    Watermelon Purchasing Protection Insured
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mx-auto'>
                            <div className='w-100   default-home-card card'>
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={hare}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="Fast"
                                        />  
                                    </p>
                                    Make your purchases more quickly
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mx-auto'>
                            <div className='w-100   default-home-card card'> 
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={price}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="Price"
                                        />  
                                    </p>
                                    Attractive rates that defy competition
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='col-md-2 mx-auto'></div>
                        <div className='col-md-4 mx-auto text-center font-weight-bold text-light'>
                            <h4>A service made for its users</h4>
                        </div> 
                    <div className='row my-5'>
                        <div className='col-md-3 mx-auto '>
                            <div className='w-100   default-home-card card'>
                                
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={international}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="International"
                                        />  
                                    </p>
                                    Send money to your contacts all over the world
                                </div>
                                
                            </div>
                        </div>
                        <div className='col-md-3 mx-auto'>
                            <div className='w-100   default-home-card card'>
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={user}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="User friendly"
                                        />  
                                    </p>
                                    Designed to be intuitive and quick to handle
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mx-auto'>
                            <div className='w-100   default-home-card card'>
                                
                                <div className='card-body text-center font-weight-bold text-light'>
                                    <p className='card-text'>
                                        <img 
                                        src={champion}
                                        width="80"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="Best bank of the year"
                                        />  
                                    </p>
                                    Rated Best Online Bank of the Year
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   </div>
            </div>
        );
    };
    handleLogIn = () => {
		this.props.onButtonClick('LogIn');
	}
	handleSignIn = () => {
		this.props.onButtonClick('SignIn');
	}

}
export default WelcomePage;