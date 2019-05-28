/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let charToFreq = [];
  for( let i = 0; i < T.length; i++) {
    let c = T[i];
    charToFreq[getCharIndex(c)]  = charToFreq[getCharIndex(c)] ? charToFreq[getCharIndex(c)] + 1 : 1;
  }
  let afterString = "";
  for(let i = 0; i< S.length; i++) {
    let c = S[i];
    if(charToFreq[getCharIndex(c)] > 0) {
      let freq = charToFreq[getCharIndex(c)];
      for(let j = 0; j < freq; j++) {
        afterString += c;
      }
      charToFreq[getCharIndex(c)] = 0;
    }
  }
  for(let i = 0; i < T.length; i++) {
    let c = T[i];
    if(charToFreq[getCharIndex(c)] > 0) {
      let freq = charToFreq[getCharIndex(c)];
      for(let j = 0; j < freq; j++) {
        afterString += c;
      }
    }
    charToFreq[getCharIndex(c)] = 0;
  }
  return afterString;
};

function getCharIndex(c) {
  return c.charCodeAt(0) - 97;
}