import React, { Component } from 'react';
import logo from './logo.svg';
import Connection from './functional/Connection';
import Inscription from './functional/Inscription'
import users from './data/databases/users.json';
import cards from './data/databases/cards.json';
import payins from './data/databases/payins.json';
import payouts from './data/databases/payouts.json';
import transfers from './data/databases/transfers.json';

import LogSignIn from './LogSignIn/LogSignIn';

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
    }
  
  render()
  {
    return (
      <Connection />
	  //<LogSignIn/>
    );
  }
	
}

export default App;
