/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var res = [];
  for(var a=1;a<4;a++) {
    for(var b=1;b<4;b++) {
      for(var c=1;c<4;c++) {
        for(var d=1;d<4;d++) {
          if(a+b+c+d === s.length) {
            var A = parseInt(s.substr(0, a));
            var B = parseInt(s.substr(a, b));
            var C = parseInt(s.substr(a+b, c));
            var D = parseInt(s.substr(a+b+c));
            console.log(A, B, C, D);
            if (A <=255 && B <=255 && C<=255 && D <=255) {
              var t = ""+A+"."+B+"."+C+"."+D;
              if(t.length === s.length +3) res.push(t);
            }
          }
        }
      }
    }
  }
  return res;
};

console.log(restoreIpAddresses("25525511135"));