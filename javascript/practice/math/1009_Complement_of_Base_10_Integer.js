/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  var st = Number(N).toString(2);
  var a = [];
  for (let i = 0; i <st.length; i++) {
    if (st[i]=== '0') {
      a.push('1');
    } else {
      a.push('0');
    }
  }
  return parseInt(a.join(''),2);
};

console.log(bitwiseComplement(5));