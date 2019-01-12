/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let temp = 100;
  while(temp > 40) {
    temp = (rand7()-1) * 7 + rand7();
  }
  return temp %10+1;
};

function rand7() {
  return Math.ceil(Math.random()*7);
}