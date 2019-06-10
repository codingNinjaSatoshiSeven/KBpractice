/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    if(!costs || costs.length === 0 || costs[0].length === 0) {
      return 0;
    }
    let diff = [];
    diff.length = costs.length;
    let sum = 0;
    for(let i = 0; i < diff.length; i++) {
      // send everybody to A, record diff
      // if sending to B instead
      sum += costs[i][0];
      diff[i] = costs[i][1] - costs[i][0];
    }
    diff.sort((a, b) => a-b);
    // sending the first N ppl with lowest costs to B
    for(let i = 0; i < diff.length/2; i++) {
      sum += diff[i];
    }
    return sum;
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));