import React, { Component } from 'react';
import Connection from './functional/Connection';
import Inscription from './functional/Inscription'
import users from './data/databases/users.json';
import cards from './data/databases/cards.json';
import payins from './data/databases/payins.json';
import payouts from './data/databases/payouts.json';
import transfers from './data/databases/transfers.json';

//import LogSignIn from './LogSignIn/LogSignIn';

import LogIn from './LogSignIn/LogIn';
import SignIn from './LogSignIn/SignIn';
import NavigBar from './NavigBar/NavigBar';
import './App.css';

class App extends Component {
	
	constructor(props)
    {
      super(props);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('cards', JSON.stringify(cards));
      localStorage.setItem('payins', JSON.stringify(payins));
      localStorage.setItem('payouts', JSON.stringify(payouts));
      localStorage.setItem('transfers', JSON.stringify(transfers));
      this.state = {
          displayedComp : 'Inscription'
      };
    }
    
	render(){
		return(<div className = 'App'>
      <header>
			  <NavigBar onButtonClick = {this.changeDisplayedComp}/>
      </header>
      <div>
        {this.switchDisplayedComp()}
      </div>
      </div>
		);
  }
  changeDisplayedComp = (compName) => {
    this.setState({
      displayedComp : compName
    });

  }
  switchDisplayedComp(){
    switch(this.state.displayedComp)
    {
      case 'LogIn' : 
          return (<LogIn onButtonClick = {this.changeDisplayedComp}/>) ;
      case 'SignIn' :
          return (<SignIn onButtonClick = {this.changeDisplayedComp}/>) ;
      default :
          return '';
    }
  }
}


export default App;
