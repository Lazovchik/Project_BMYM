
//return true if the item's mail is the mail entered by the user
export default function filterMail(item)
{
  return item.email === localStorage.getItem('mail');
}

//find the id with the maximum value in users
export function findMaxId(tab)
{
    var tabId = [];

    tab.map( unit =>
        tabId.push(unit.id));

    return arrayMax(tabId);    
}
//code find there : https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
/* function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }; */
  
function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };
//return the database name with the type passed as argument
export function getDbType(type)
{
  var database = '';
  switch(type){

    case 'user' : 
      database = 'users';
      break;
    case 'card' : 
      database = 'cards';
      break;
    case 'transfer' : 
      database = 'transfers';
      break;
    case 'payin' : 
      database = 'payins';
      break;
    case 'payout' : 
      database = 'payouts';
      break;
    default : 
      break;
  }
  return database;
}
//add a new object to the database specified by type
export function addObject(newObj, type)
{
  const database = getDbType(type);
  //import users from storage
  var newTab = JSON.parse(localStorage.getItem(database));
  //add it to the array
  newTab.push(newObj);
  //delete the precedent occurence it the local storage
  localStorage.removeItem(database);
  //place the new table users
  localStorage.setItem(database, JSON.stringify(newTab));
}
//return true if the item's id is the id searched
export function findIndexId(item)
{
  return item.id === localStorage.getItem('searchId');
}
//return true if the item's id is not the id searched
export function notFindIndexId(item)
{
  return item.id !== localStorage.getItem('searchId');
}
//return true if the item's user_id is the user_id searched
export function findUserId(item)
{
  const searchUserId = localStorage.getItem('searchUserId');

  if(localStorage.getItem('searchType')!== 'transfer')
  {
    return item.user_id === searchUserId;
  }
  else
    {
      if(item.debited_wallet_id === searchUserId )
        return true;
      else if(item.credited_wallet_id === searchUserId)
        return true;
      else
        return false; 
    }
}
//card code have special formats, apply this format to a number
export function cardNumberFormat(number){
      
  number = number.substr(-4);
  //if the format of the number is not correct, stop the operation
  if(typeof(parseInt(number)) === typeof(int) || parseInt(number)/1000 < 1)
  {
    alert('Incorrect card number format');
    return false;
  }
  return number;
}

