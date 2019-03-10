/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  var counts = [];
  for(var i = 0; i<=N; i++) {
    counts[i] = 0;
  }
  for(var i =0; i<trust.length; i++) {
    var relation = trust[i];
    counts[relation[0]]--;
    counts[relation[1]]++;
  }
  for(var i = 1; i<=N; i++) {
    if(counts[i] === N-1) {
      return i;
    }
  }
  return -1;
};

console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3], [2,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));