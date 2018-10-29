/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var x = 0, y = 0;
  for (var i = 0; i < moves.length; i++) {
    var m = moves[i];
    switch(m) {
      case 'U': 
        y++;
        break;
      case 'D':
        y--;
        break;
      case 'L':
        x--;
        break;
      case 'R':
        x++;
        break;
      default:
        throw new Error('Invalid parameter');
    }
  }
  return x=== 0 && y === 0;
};

console.log(judgeCircle("LL"));
console.log(judgeCircle("UD"));