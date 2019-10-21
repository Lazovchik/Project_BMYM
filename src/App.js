import React, { Component } from 'react';
import logo from './logo.svg';

import LogSignIn from './LogSignIn/LogSignIn';

import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<LogSignIn/>
		);
	}
}

export default App;
