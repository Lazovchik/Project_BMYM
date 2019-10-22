import React, { Component } from 'react';
import logo from './logo.svg';

import LogSignIn from './LogSignIn/LogSignIn';
import LogIn from './LogSignIn/LogIn';
import SignIn from './LogSignIn/SignIn';
import NavigBar from './NavigBar/NavigBar';
import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			<NavigBar/>
			<LogIn/>
			<SignIn/>
			</div>
		);
	}
}

export default App;
