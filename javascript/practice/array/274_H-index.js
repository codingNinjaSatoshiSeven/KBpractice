/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a,b) => {
    return b - a;
  });
  for( var i = 0 ; i < citations.length; i++) {
    if (i >= citations[i]) return i;
  }
  return citations.length;
};

console.log(hIndex([3,0,6,1,5]));