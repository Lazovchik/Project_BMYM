import React from "react";
import filterMail, {findMaxId} from './FunctionTools'


//search the combo mail/ pw in the db and alert on the status of the connection
export default function IsInDb(mail, pw){

  localStorage.setItem("mail", mail);
  const users = JSON.parse(localStorage.getItem("users"));
  //find the adress of the user in the db
  const indexOfuser = users.findIndex(filterMail)
  //detect if it exists
  if (indexOfuser !== -1)
  {
    if (users[indexOfuser].password === pw)
      {
        alert("Bienvenue !");
        localStorage.removeItem("mail");
        return indexOfuser;
      }
      else
      {
        alert("mauvais mdp !");
        localStorage.removeItem("mail");
        return false;
      }
  }
  else
  {
    alert("adresse non connue !");
    localStorage.removeItem("mail");
    return false;
  }

}
export function trout(){
  return(
  <div > Hey, <br /> I'm a trout. 
    </div>
    );
}
//show all users in local storage
export function showUsers(){
  var users = JSON.parse(localStorage.getItem("users"));
  return(
    <div>
      <h2>Users</h2>
      ----------------------------------------------------------------------------------------------------------
      {users.map( user =>
        <p key ={user.id}>  Id: {user.id} {user.first_name} {user.last_name} {user.is_admin === "false" ? <i>compte normal</i> : <b>compte admin</b>}  
        <br /> identifiants de connexion : {user.email}  mdp :{user.password}  
         <br />
        ----------------------------------------------------------------------------------------------------------</p>
        
      )}
       
    </div>
  );
}
//show all cards in local storage
export function showCards(){
  var cards = JSON.parse(localStorage.getItem("cards"));
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
//add a user to local storage "users"  
export function addUser(fname, lname, nemail, npw, nadmin){

  //find actual max Id and increment it
  const users = [...JSON.parse(localStorage.getItem("users"))];
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
  //import users from storage
  var newTab = [...JSON.parse(localStorage.getItem("users"))]
  //add it to the array
  newTab.push(newUser);
  //delete the precedent occurence it the local storage
  localStorage.removeItem("users");
  //place the new table users
  localStorage.setItem("users", JSON.stringify(newTab));
}