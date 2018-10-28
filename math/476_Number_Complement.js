///TODO: REVIEW
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var flag = false;
  for (var i = 31; i >=0; i--) {
    // take 1 and left shift i, fill right with 0. 1<< 1 = 2 1 <<2 =4
    // if bitwise of num and 1 shift by i is not all zero
    // aka first num bit that is not 0, then flag to true;
    if (num & (1 << i)) flag = true;
    if(flag) {
      // flip the bit of num in i
      // if num(i) === 0 then it's flipped to 1
      // if num(i) === 1 then it's flipped to 0
      // it's a important strategy to use XOR with mask to flip bit
      num = num ^ (1<< i);
    }
  }
  return num;
};

console.log(findComplement(5));
console.log(findComplement(1));