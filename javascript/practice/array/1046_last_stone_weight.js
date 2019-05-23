/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while(stones.length >1) {
    stones.sort((a, b)=> b-a);
    var a = stones.shift();
    var b = stones.shift();
    var diff = Math.abs(a-b);
    if(diff !== 0){
      stones.push(diff);
    }
  }
  return stones.length === 0 ? 0: stones[0];
};

console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([2,2]));
