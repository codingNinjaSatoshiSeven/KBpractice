/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  var n = deck.length;
  var index = [];
  for(var i = 0; i<n; i++) {
    index[i]  = i;
  }
  var ans = [];
  deck.sort((a,b) => {
    return a-b;
  });
  for(var i = 0; i<deck.length; i++) {
    var card = deck[i];
    var t = index.shift();
    ans[t] = card;
    if(index.length !==0) {
      var tt = index.shift();
      index.push(tt);
    }
  }
  return ans;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));