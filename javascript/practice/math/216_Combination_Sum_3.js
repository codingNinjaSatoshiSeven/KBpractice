///TODO: REVIEW
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res = [];
  var candidates = [1,2,3,4,5,6,7,8,9];
  candidates.sort(sorting);
  bfs(0, -1, []);
  return res;

  function bfs(sum, index, tmp){
      var newTmp = null;
      if(sum === n && tmp.length === k){
          newTmp = tmp.concat();
          res.push(newTmp);
          return;
      }else if(tmp.length > k || sum > n || index + 1 >= candidates.length){
          return; //pruning
      }

      for(var i = index + 1; i < candidates.length; i++){
          newTmp = tmp.concat();
          newTmp.push(candidates[i]);
          bfs(sum + candidates[i], i, newTmp);
      }
  }
  function sorting(a, b){
      if(a > b){
          return 1;
      }else if(a < b){
          return -1;
      }else{
          return 0;
      }
  }
};

console.log(combinationSum3(3,7));