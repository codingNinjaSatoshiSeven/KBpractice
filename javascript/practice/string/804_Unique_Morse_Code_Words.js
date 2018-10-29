/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  var code = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  var map = {};
  for (var i = 0; i < words.length; i++) {
    var temp = "";
    for (var j = 0; j < words[i].length; j++) {
      temp += code[words[i][j]];
    }
    map[temp] = true;
  }
  return Object.keys(map).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));