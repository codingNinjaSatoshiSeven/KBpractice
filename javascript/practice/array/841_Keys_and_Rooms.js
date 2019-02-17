/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  var seen = [true];
  for(var i = 1; i<rooms.length;i++) {
    seen[i]= false;
  }
  var stack = [];
  stack.push(0);
  while(stack.length !== 0) {
    var node = stack.pop();
    for(var i = 0; i<rooms[node].length; i++) {
      var nei = rooms[node][i];
      if(!seen[nei]) {
        seen[nei] = true;
        stack.push(nei);
      }
    }
  }
  for(var i = 0; i<seen.length ;i++) {
    if(!seen[i]) return false;
  }
  return true;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));