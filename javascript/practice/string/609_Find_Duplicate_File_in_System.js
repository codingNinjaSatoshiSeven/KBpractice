/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  let contentsToPaths = {};
  for(let i = 0; i < paths.length; i++) {
    let contents = paths[i].split(" ");
    for( let i = 1; i < contents.length; i++) {
      let fileAndContent = contents[i].split("(");
      if(contentsToPaths[fileAndContent[1]]) {
        contentsToPaths[fileAndContent[1]].push(contents[0]+ '/'+ fileAndContent[0]);
      } else {
        let list = [];
        list.push(contents[0]+ '/'+ fileAndContent[0]);
        contentsToPaths[fileAndContent[1]] = list;
      }
    }
  }
  let result = [];
  for (let key in contentsToPaths) {
    if (contentsToPaths[key].length > 1) {
      result.push(contentsToPaths[key]);
    }
  }
  return result;
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]));