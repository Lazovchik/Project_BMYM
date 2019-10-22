import React from 'react';


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
function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  
  function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };
//return true if the item's id is the id searched
export function findIndexId(item)
{
  return item.id === localStorage.getItem('searchId');
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