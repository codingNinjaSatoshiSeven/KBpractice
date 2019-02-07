/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  var lo = 1, hi = 1000000000;
  while(lo < hi) {
    var mi = Math.floor((lo+hi)/2);
    if(!possible(piles, H, mi)) {
      lo = mi +1;
    } else {
      hi = mi;
    }
  }
  return lo;
};

function possible(piles, H, K) {
  var time = 0;
  for(var i = 0; i< piles.length; i++) {
    var p = piles[i];
    time +=Math.floor((p-1) / K) +1;
  }
  return time <=H;
}

console.log(minEatingSpeed([3,6,7,11], 8));