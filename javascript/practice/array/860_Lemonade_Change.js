/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var map = {
    5: 0,
    10: 0,
    20: 0,
  };
  for(var i = 0; i < bills.length; i++) {
    var bill = bills[i];
    if(change(map, bill)) {
      map[bill]++;
    } else {
      return false;
    }
  }
  return true;
};

function change(map, bill) {
  if(bill === 20) {
    if (map[5] >=1 && map[10] >=1) {
      map[5]--;
      map[10]--;
      return true;
    } else if (map[5] >=3) {
      map[5] -=3;
      return true;
    } else {
      return false;
    }
  } else if (bill === 10) {
    if (map[5] >=1) {
      map[5]--;
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

console.log(lemonadeChange([5,5,5,10,20]));
console.log(lemonadeChange([5,5,10]));
console.log(lemonadeChange([10,10]));