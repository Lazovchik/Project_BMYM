import React from "react";


//return true if the item's mail is the mail entered by the user
export default function filterMail(item)
{
  return item.email === localStorage.getItem("mail");
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