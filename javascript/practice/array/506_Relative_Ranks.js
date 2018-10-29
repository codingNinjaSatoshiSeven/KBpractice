/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var rank = 4;
  var map = {};
  var sortedNums = [].slice.call(nums).sort((a,b) => b-a);
  for (var i = 0; i < sortedNums.length; i++) {
    if (i === 0) {
      map[sortedNums[i]] = 'Gold Medal';
    } else if (i === 1) {
      map[sortedNums[i]] = 'Silver Medal';
    } else if (i === 2) {
      map[sortedNums[i]] = 'Bronze Medal';
    } else {
      map[sortedNums[i]] = String(rank);
      rank++;
    }
  }
  return nums.map(score =>{
    return map[score];
  });
};


console.log(findRelativeRanks([5, 4, 3, 2, 1]));