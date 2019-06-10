/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let res = [];
  if(!text) return res;
  let arr = text.split(" ");
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === first && arr[i+1] === second && arr[i+2]) {
      res.push(arr[i+2]);
    }
  }
  return res;
};

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
console.log(findOcurrences("we will we will rock you", "we", "will"));