import React, { Component } from 'react';
import logo from './logo.svg';
import Connection from './functional/Connection';
import Inscription from './functional/Inscription'
import users from './data/databases/users.json';
import cards from './data/databases/cards.json';
import LogSignIn from './LogSignIn/LogSignIn';

import './App.css';

class App extends Component {
	
	constructor(props)
    {
      super(props);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('cards', JSON.stringify(cards));
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
