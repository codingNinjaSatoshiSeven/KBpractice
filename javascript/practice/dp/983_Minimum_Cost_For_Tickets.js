/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  var memo = [];
  var dayset = new Set();
  for(var i = 0; i<days.length; i++) {
    dayset.add(days[i]);
  }
  return dp(1, memo, dayset, costs);
};

function dp(i, memo, dayset, costs) {
  if(i>365) return 0;
  if(memo[i] !== undefined) {
    return memo[i];
  }
  var ans;
  if(dayset.has(i)) {
    ans = Math.min(dp(i+1, memo, dayset, costs)+costs[0],
    dp(i+7, memo, dayset, costs)+costs[1],
    dp(i+30, memo, dayset, costs)+costs[2]);
  } else {
    ans = dp(i+1, memo, dayset, costs);
  }
  memo[i] = ans;
  return ans;
}

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));
console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]));