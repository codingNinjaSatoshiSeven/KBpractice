///TODO: REVIEW
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  var dr = [0, 1, 0, -1];
  var dc = [1, 0, -1, 0];
  var n = grid.length;
  var ans = 0;

  for (var r = 0; r < n; r++) {
    for( var c = 0; c < n; c++) {
      if(grid[r][c] > 0) {
        ans += 2;
        for(var k = 0; k < 4; k++) {
          var nr = r + dr[k];
          var nc = c + dc[k];
          var nv = 0;
          if(0 <= nr && nr < n && 0 <= nc && nc < n) {
            nv = grid[nr][nc];
          }
          ans += Math.max(grid[r][c]-nv,0);
        }
      }
    }
  }
  return ans;
};

console.log(surfaceArea([[1,2],[3,4]]));