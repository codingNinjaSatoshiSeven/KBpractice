/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var R = image.length, C = image[0].length;
  var color = image[sr][sc];
  if (color === newColor)return image;
  function dfs(r, c) {
    if (image[r][c] === color) {
      image[r][c] = newColor;
      if(r >=1) dfs(r-1,c);
      if(r+1<R) dfs(r+1, c);
      if(c>=1) dfs(r, c-1);
      if(c+1<C) dfs(r, c+1);
    }
  }
  dfs(sr, sc, image, color, newColor, R, C);
  return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));