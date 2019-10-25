import React, { Component } from 'react';

//import databases
import users from './data/databases/users.json';
import cards from './data/databases/cards.json';
import payins from './data/databases/payins.json';
import payouts from './data/databases/payouts.json';
import transfers from './data/databases/transfers.json';

//import components
import LogIn from './LogSignIn/LogIn';
import SignIn from './LogSignIn/SignIn';
import NavigBar from './NavigBar/NavigBar';
import HomePage from './HomePage/HomePage';
import AccountPage from './AccountPage/AccountPage';
import TransactionsPage from './TransactionsPage/TransactionsPage';
import TransferPage from './TransferPage/TransferPage';

//CSS
import './App.css';
//fonctions
//import {showUsers} from './functions/ComponentTools';
//datepicker source : https://reactdatepicker.com/#example-custom-input
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
       </div>
		);
  }
  
  changeDisplayedComp = (compName) => {
    this.setState({
      displayedComp : compName
    });
  }
  handleDatePicker = date => {
    this.setState({
      startDate: date
    });
    const year = JSON.stringify(date.getFullYear()).substr(-2);
    const month = date.getMonth() > 9 ?  date.getMonth()+1 : '0' + (date.getMonth()+1);
    console.log( month + "/" + year);
  };
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
          if(localStorage.getItem('user') !== null)
            return  (<AccountPage onButtonClick = {this.changeDisplayedComp}/>) ;
          else
            return '';
          
      case 'Transactions' :
          return (<TransactionsPage/>) ;
      case 'Transfer' :
          return (<TransferPage/>) ;
      case 'AddCard' :
          return ('') ;
      default :
          return '';
    }
  }
  makeDatePicker = () => {
    const CustomInput = ({ value, onClick }) => (
      <button className="btn btn-light" onClick={onClick}>
        {value}
      </button>
    );
    return (
      <DatePicker
        customInput={<CustomInput />}
        selected={this.state.startDate}
        onChange={this.handleDatePicker}
        dateFormat="MM/yy"
        showMonthYearPicker
        
      />
    );
  };
}


export default App;
