import React from 'react';
import filterMail, {findMaxId, findIndexId, findUserId, addUser, getDbType, notFindIndexId} from './FunctionTools'

//search the combo mail/ pw in the db and alert on the status of the connection
export default function IsInDb(mail, pw){

  localStorage.setItem('mail', mail);
  const users = JSON.parse(localStorage.getItem('users'));
  //find the adress of the user in the db
  const indexOfuser = users.findIndex(filterMail)
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
//show all users in local storage
export function showUsers(){
  var users = JSON.parse(localStorage.getItem('users'));
  return(
    <div>
      <h2>Users</h2>
      ----------------------------------------------------------------------------------------------------------
      {users.map( user =>
        <p key ={user.id}>  Id: {user.id} {user.first_name} {user.last_name} {user.is_admin === 'false' ? <i>compte normal</i> : <b>compte admin</b>}  
        <br /> identifiants de connexion : {user.email}  mdp :{user.password}  
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
        <p key ={card.id}>  Id: {card.id} userId: {card.user_id} 4 digits : {card.last_4} brand: {card.brand} expiration date: {card.expired_at}
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//create a new user and add it to db 
export function createUser(fname, lname, nemail, npw, nadmin){

  //find actual max Id and increment it
  const users = [...JSON.parse(localStorage.getItem('users'))];
  var newId =  findMaxId(users) ;
  newId++;
  //create new user
  var newUser = {
    id: newId,
      first_name : fname,
      last_name: lname,
      email: nemail,
      password: npw,
      is_admin: nadmin
  };
  addUser(newUser);
}
//delete the data with the id and type specified
export function deleteData(id, type)
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
  console.log(tabFiltered);
  return tabFiltered;
}
//do a payin/out in the user wallet (inOut >= 0 = in, < 0 = out)
export function doPayInOut(amount,inOut){

  //get the Id of the user who is connected
  const userId = parseInt(localStorage.getItem('user'));
  console.log(userId); 

  //if no user is set, stop the function
  if(isNaN(userId))
  {
    return false;
  }
  else{

    if(inOut < 0)
      amount = -amount;
    const user = getObjetById(userId, 'user');
    user.balance = String(parseInt(user.balance)+ amount);
    deleteData(userId, 'user');
    addUser(user);
  }
  
}
