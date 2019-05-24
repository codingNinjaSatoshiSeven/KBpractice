/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  var res = 0;
  var colorCount = {};
  for (var i=0;i < answers.length; i++) {
    var ans = answers[i];
    var count = ans + 1;
    if(!colorCount[count]) {
      res += count;
      colorCount[count] = ans;
    } else {
      colorCount[count] = colorCount[count]-1;
    }
  }
  return res;
};

console.log(numRabbits([1, 1, 2]));
console.log(numRabbits([10,10,10]));
console.log(numRabbits([0,0,1,1,1]));