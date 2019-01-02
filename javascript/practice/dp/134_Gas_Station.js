///TODO: REVIEW
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var total = 0, mx = -1, start = 0;
  for (var i = gas.length-1; i>=0; i--) {
    total += gas[i] - cost[i];
    if(total > mx) {
      start = i;
      mx = total;
    }
  }
  return (total < 0) ? -1: start;
};