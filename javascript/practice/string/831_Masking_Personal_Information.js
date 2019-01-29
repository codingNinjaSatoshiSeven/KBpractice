/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  var atIndex = S.indexOf('@');
  if(atIndex >=0) {
    // email
    return (S.substring(0,1)+ "*****"+ S.substring(atIndex-1)).toLowerCase();
  } else {
    // phone
    var digits = S.replace(/\D+/g, "");
    var local = "***-***-"+ digits.substring(digits.length-4);
    if(digits.length === 10) {
      return local;
    }
    var ans ="+";
    for(var i = 0; i<digits.length -10; i++) {
      ans+="*";
    }
    return ans+ "-"+local;
  }
};

console.log(maskPII("LeetCode@LeetCode.com"));
console.log(maskPII("AB@qq.com"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("86-(10)12345678"));