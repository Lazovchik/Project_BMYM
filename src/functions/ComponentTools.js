import React from 'react';
import filterMail, {findMaxId, findIndexId, findUserId, addObject, getDbType, notFindIndexId, cardNumberFormat} from './FunctionTools'
//datepicker source : https://reactdatepicker.com/#example-custom-input
import DatePicker from "react-datepicker";

//search the combo mail/ pw in the db and alert on the status of the connection
export default function IsInDb(mail, pw){

  localStorage.setItem('mail', mail);
  const users = JSON.parse(localStorage.getItem('users'));
  //find the adress of the user in the db
  var indexOfuser = users.findIndex(filterMail);
  indexOfuser = users[indexOfuser].id;
  //detect if it exists
  if (indexOfuser !== -1)
  {
    if (users[indexOfuser].password === pw)
      {
        alert('Bienvenue !');
        localStorage.removeItem('mail');
        return indexOfuser;
      }
      else
      {
        alert('mauvais mdp !');
        localStorage.removeItem('mail');
        return false;
      }
  }
  else
  {
    alert('adresse non connue !');
    localStorage.removeItem('mail');
    return false;
  }

}
//just a test function
export function trout(){
  return(
  <div > Hey, <br /> I'm a trout. 
    </div>
    );
}
export function makeDatePicker(date, onChangeFunc){
		
  return (
    <DatePicker
    selected = {date}
    onChange={onChangeFunc}
    dateFormat="MM/yy"
    showMonthYearPicker
    isClearable
    />
  );
};
//show all users in local storage
export function showUsers(){
  var users = JSON.parse(localStorage.getItem('users'));
  return(
    <div>
      <h2>Users</h2>
      ----------------------------------------------------------------------------------------------------------
      {users.map( user =>
        <p key ={user.id}>  Id: {user.id}, {user.first_name} {user.last_name}, montant du portefeuille: {user.balance}, pays: {user.origin}   
        <br /> identifiants de connexion : {user.email}  mdp :{user.password}  {user.is_admin === 'false' ? <i>compte normal</i> : <b>compte admin</b>}
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//show all cards in local storage
export function showCards(){
  var cards = JSON.parse(localStorage.getItem('cards'));
  return(
    <div>
      <h2>Cards</h2>
      ----------------------------------------------------------------------------------------------------------
      {cards.map( card =>
        <p key ={card.id}>  Id: {card.id}, userId: {card.user_id}, 4 digits : {card.last_4}, brand: {card.brand}, expiration date: {card.expired_at}
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//show all cards in local storage
export function showTransfers(){
  var transfers = JSON.parse(localStorage.getItem('transfers'));
  return(
    <div>
      <h2>transfers</h2>
      ----------------------------------------------------------------------------------------------------------
      {transfers.map( transfer =>
        <p key ={transfer.id}>  Id: {transfer.id}, debited wallet id: {transfer.debited_wallet_id}, credited wallet id : {transfer.credited_wallet_id}, amount: {transfer.amount}
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//show all payins in local storage
export function showPayinsOuts(type){
  
  const database = getDbType(type);
  var pays = JSON.parse(localStorage.getItem(database));
  return(
    <div>
      <h2>{database}</h2>
      ----------------------------------------------------------------------------------------------------------
      {pays.map( pays =>
        <p key ={pays.id}>  Id: {pays.id}, userId: {pays.user_id}, amount : {pays.amount}
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//create a new user and add it to db 
export function createUser(fname, lname, nemail, npw, nadmin, nOrigin, nStreet, nCity, nPhone){

  //find actual max Id and increment it
  const users = [...JSON.parse(localStorage.getItem('users'))];
  var newId =  findMaxId(users) ;
  newId++;
  //create new user object
  var newUser = {
    id: JSON.stringify(newId),
      first_name : fname,
      last_name: lname,
      email: nemail,
      password: npw,
      is_admin: nadmin,
      balance: 0,
      origin: nOrigin,
      street: nStreet,
      city: nCity,
      phone: nPhone
  };
  addObject(newUser, 'user');

  return newId;
}
//create a new card and add it to db 
export function createCard(nUser_id, number, nBrand, nExpired_at){
  //find actual max Id and increment it
  const cards = [...JSON.parse(localStorage.getItem('cards'))];
  var newId =  findMaxId(cards) ;
  newId++;
  //change the card number
  if(number !== '')
  {
    number = cardNumberFormat(number)
    if( number === false)
      return false;
  }
  else
    return false;

  //change the brand
  if(nBrand === '')
    return false;

  //change the expiration date
  if(nExpired_at === '')
    return false;
  //create new user object
  var newCard = {
      id: JSON.stringify(newId),
      user_id : JSON.stringify(nUser_id),
      last_4: number,
      brand: nBrand,
      expired_at: nExpired_at
  };
  addObject(newCard, 'card');
  return true;
}
//create a new card and add it to db 
export function createTransfer(nDebited_wallet_id, nCredited_wallet_id, nAmount){

  //find actual max Id and increment it
  const transfers = [...JSON.parse(localStorage.getItem('transfers'))];
  var newId =  findMaxId(transfers) ;
  newId++;
  //create new user object
  var newTransfer = {
      id: JSON.stringify(newId),
      debited_wallet_id : nDebited_wallet_id,
      credited_wallet_id: nCredited_wallet_id,
      amount: nAmount
  };
  addObject(newTransfer, 'transfer');
  updateUserBalance(-nAmount ,nDebited_wallet_id);
  updateUserBalance(nAmount ,nCredited_wallet_id);
}
//create a new payin and add it to db 
export function createPayinOut(nUser_id, nAmount, type){

  const database = getDbType(type);
  //find actual max Id and increment it
  const pays = JSON.parse(localStorage.getItem(database));
  var newId =  findMaxId(pays) ;
  newId++;
  //create new user object
  var newPay = {
      id: newId,
      user_id : nUser_id,
      amount: nAmount
  };
  addObject(newPay, type);
}
//delete the object with the id and type specified
export function deleteObject(id, type)
{
  var database = '';
  var tabFiltered = [];
  var tab = [];
  //used temporary as global variable
  localStorage.setItem('searchId', id);
  database = getDbType(type);
  //if no database was found, return null
  if(database === '')
  return null;
  //get the database 
  tab = JSON.parse(localStorage.getItem(database));
  tabFiltered = tab.filter(notFindIndexId);
  //set the new tab
  localStorage.setItem(database, JSON.stringify(tabFiltered));
  //remove the global variable
  localStorage.removeItem('searchId');
}
//return an objet which id and type is specified in parameter 
export function getObjetById(id, type){
  
  var tab = [];
  //used temporary as global variable
  localStorage.setItem('searchId', id);
  var index;
  var object = {};
  var database = '';

  database = getDbType(type);
  //if no database was found, return null
  if(database === '')
    return null;
  //get the database 
  tab = JSON.parse(localStorage.getItem(database));
    index = tab.findIndex(findIndexId);
    if(index === -1)
    {
      console.log('didn t find the '+ type +' id');
      return null;
    }
    object =  tab[index];

  localStorage.removeItem('searchId');
  return object;
}
//return a tab which contains all objets relative to a user_id and a type
export function getTabByUserId(userId, type){
  
  var tab = [];
    //used temporary as global variables

  localStorage.setItem('searchUserId', userId);
  localStorage.setItem('searchType', type);

  var tabFiltered = [];
  var database = '';
  database = getDbType(type);

  //if no database was found, return null
  if(database === '')
    return null;
    //get the database 
  tab = JSON.parse(localStorage.getItem(database));
    tabFiltered = tab.filter(findUserId);
    if(tabFiltered.length === 0)
    {
      console.log('didn t find any '+ type +' for user id:' + userId);
      return null;
    }
  
  localStorage.removeItem('searchUserId');
  localStorage.removeItem('searchType');
  return tabFiltered;
}
//return the last transfer made by or to the user
export function getLastTransfer(userId){

  //get tab will all transfers did by or to the user
  const transferTab = getTabByUserId(userId, 'transfer');
  
  //find the highest id (so the most recent) and return the transfer asociated
  if(transferTab !== null)
  {
    console.log(transferTab);

    return getObjetById(parseInt(findMaxId(transferTab)), 'transfer');
  }
  else 
    return null;
}
//do a payin/out in the user wallet 
export function doPayInOut(amount, type){

  //get the Id of the user who is connected
  const userId = parseInt(localStorage.getItem('user'));
  //if no user is set, stop the function
  if(isNaN(userId))
  {
    return false;
  }
  else{
    if(type === 'payout')
      amount = -amount;
    
    createPayinOut(userId, amount, type);
    return updateUserBalance(amount, userId);
  }
}
//update a user balance by adding amount
export function updateUserBalance(amount, userId){
  var user = getObjetById(userId, 'user');
  const balance = parseInt(user.balance)+ parseInt(amount);
    user.balance = JSON.stringify(balance);
    console.log(balance)
    deleteObject(userId, 'user');
    addObject(user, 'user');
    return true;
}
//update a card in the bdd 
export function updateCard(cardId, number, nBrand, expirationDate){

  //exemple of use : updateCard(0, ' 1644','any', new Date());
  //get the card
  const card = getObjetById(cardId, 'card');
  //if no card is not found, stop the function
  if(card === null)
  {
    return false;
  }
  else{
    //change the card number
    if(number !== '')
    {
      number = cardNumberFormat(number)
      if( number !== false)
        card.last_4 = number
    }

    //change the brand
    if(nBrand !== '')
      card.brand = nBrand;

    //change the expiration date
    if(expirationDate !== '')
      card.expired_at = expirationDate;

    deleteObject(cardId, 'card');
    addObject(card, 'card');
    return true;
  }
  
}
//update a user in the bdd 
export function updateUser( first_name, last_name,
   email, password, origin, street, city, phone ){

  //get the Id of the user who is connected
  const userId = parseInt(localStorage.getItem('user'));
  //exemple of use : updateCard(0, ' 1644','any', new Date());
  //get the card
  const user = getObjetById(userId, 'user');
  //if no card is not found, stop the function
  if(user === null)
  {
    return false;
  }
  else{
    //change the first_name
    if(first_name !== '')
      user.first_name = first_name;
      //change the last_name
    if(last_name !== '')
      user.last_name = last_name;
      //change the email
    if(email !== '')
      user.email = email;
      //change the password
    if(password !== '')
      user.password = password;
      //change the origin
    if(origin !== '')
      user.origin = origin;
      //change the street
    if(street !== '')
      user.street = street;
     //change the city
    if(city !== '')
      user.city = city;
    //change the phone
    if(phone !== '')
      user.phone = phone;

    deleteObject(userId, 'user');
    addObject(user, 'user');
    return true;
  }
  
}
//format for a credit card date
export function formatDate(date){
  const year = JSON.stringify(date.getFullYear()).substr(-2);
  const month = date.getMonth() > 8 ?  date.getMonth()+1 : '0' + (date.getMonth()+1);
  return month + "/" + year;
 }

