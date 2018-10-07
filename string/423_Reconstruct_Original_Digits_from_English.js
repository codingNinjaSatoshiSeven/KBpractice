/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  var map = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0,
  };
  var results = [], num= [];
  for (var i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for(var i = 0; i <=9; i++) {
    num[i] = 0;
  }
  num[0] = map['z'];
  num[2] = map['w'];
  num[4] = map['u'];
  num[6] = map['x'];
  num[8] = map['g'];
  num[3] = map['h'] - num[8];
  num[7] = map['s'] - num[6];
  num[5] = map['f'] - num[4];
  num[1] = map['o']  - num[0] - num[2] - num[4];
  num[9] = map['i']  - num[6] - num[8] - num[5];
  for(var i = 0; i < num.length; i++) {
    for (var j = 1; j <= num[i]; j++) {
      results.push(i);
    }
  }
  return results.join("");
};

console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));
console.log(originalDigits("zerozero"));
console.log(originalDigits("ereth"));