/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  var n = heaters.length, j = 0, res = 0;
  houses.sort((a,b) => {
    return a-b;
  });
  heaters.sort((a,b) => {
    return a-b;
  });
  for(var i = 0 ; i < houses.length; i++) {
    var cur = houses[i];
    while(j<n-1 && Math.abs(heaters[j+1]-cur) <=Math.abs(heaters[j]-cur)) {
      j++;
    }
    res = Math.max(res, Math.abs(heaters[j] - cur));
  }
  return res;
};

console.log(findRadius([1,2,3], [2]));