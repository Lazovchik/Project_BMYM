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
import HomePage from './HomePage/HomePage';
import AccountPage from './AccountPage/AccountPage';
import './App.css';

class App extends Component {
	
	constructor(props)
    {
      //localStorage.clear();
      super(props);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('cards', JSON.stringify(cards));
      localStorage.setItem('payins', JSON.stringify(payins));
      localStorage.setItem('payouts', JSON.stringify(payouts));
      localStorage.setItem('transfers', JSON.stringify(transfers));
      this.state = {
          displayedComp : 'Home'
      };
    }
    
    
	render(){
		return(
			<div className = 'App'>
				<div>
					  <NavigBar onButtonClick = {this.changeDisplayedComp}/>
				</div>
				<div>
					{this.switchDisplayedComp()}
				</div>
				<div>
					<AccountPage/>	
				</div>
          {/* <footer className ="footer-distributed fixed-bottom">

        <div class="footer-right">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

        <div class="footer-left">

          <p class="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
            ·
            <a href="#">Pricing</a>
            ·
            <a href="#">About</a>
            ·
            <a href="#">Faq</a>
            ·
            <a href="#">Contact</a>
          </p>

          <p>Company Name &copy; 2015</p>
        </div>

      </footer>
        */}
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
      case 'Home' :
          if(localStorage.getItem('user') !== null)
            return (<HomePage onButtonClick = {this.changeDisplayedComp}/>) ;
          else
            return '';
      case 'Account' :
          return ('') ;
      case 'Transactions' :
          return ('') ;
      case 'Transfer' :
          return ('') ;
      case 'AddCard' :
          return ('') ;
      default :
          return '';
    }
  }
}


export default App;
