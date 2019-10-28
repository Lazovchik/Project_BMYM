import React, { Component } from 'react';

//import databases
import users from './data/databases/users.json';
import cards from './data/databases/cards.json';
import payins from './data/databases/payins.json';
import payouts from './data/databases/payouts.json';
import transfers from './data/databases/transfers.json';

//import components
import LogIn from './Components/LogSignIn/LogIn';
import SignIn from './Components/LogSignIn/SignIn';
import NavigBar from './Components/NavigBar/NavigBar';
import HomePage from './Components/HomePage/HomePage';
import AccountPage from './Components/AccountPage/AccountPage';
import TransactionsPage from './Components/TransactionsPage/TransactionsPage';
import TransferPage from './Components/TransferPage/TransferPage';
import OperationPage from './Components/Operation/OperationPage';
import WelcomePage from './Components/others/WelcomePage';

//CSS
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Footer from './Components/others/Footer.js';

//fonctions
//import {showCards} from './functions/ComponentTools';
class App extends Component {
	
	constructor(props)
    {
      localStorage.clear();
      super(props);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('cards', JSON.stringify(cards));
      localStorage.setItem('payins', JSON.stringify(payins));
      localStorage.setItem('payouts', JSON.stringify(payouts));
      localStorage.setItem('transfers', JSON.stringify(transfers));
      this.state = {
          displayedComp : 'Home',
          startDate: new Date()
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
         <Footer />
       </div>
		);
  }
  
  changeDisplayedComp = (compName) => {
    this.setState({
      displayedComp : compName
    });
  }
  
  switchDisplayedComp(){

    if(localStorage.getItem('user') !== null)
    {
      switch(this.state.displayedComp)
      {
        case 'Home' :
              return (<HomePage onButtonClick = {this.changeDisplayedComp}/>) ;
        case 'Account' :
              return (<AccountPage onButtonClick = {this.changeDisplayedComp}/>) ;
        case 'Transactions' :
            return (<TransactionsPage/>) ;
        case 'Transfer' :
            return (<TransferPage onButtonClick = {this.changeDisplayedComp}/>) ;
        case 'PayIn' :
                return (<OperationPage onButtonClick = {this.changeDisplayedComp} type = 'payin'/>) ;
        case 'PayOut' :
                return (<OperationPage onButtonClick = {this.changeDisplayedComp} type = 'payout'/>) ;
		default :
            return '';
      }
    }
    else
      switch(this.state.displayedComp)
        {
          case 'LogIn' : 
              return (<LogIn onButtonClick = {this.changeDisplayedComp}/>) ;
          case 'SignIn' :
              return (<SignIn onButtonClick = {this.changeDisplayedComp}/>) ;
          case 'Home' :
              return (<WelcomePage onButtonClick = {this.changeDisplayedComp}/>) ;
          default :
              return '';
        }
    
  }
  
}


export default App;
