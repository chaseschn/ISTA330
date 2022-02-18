/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
    let newArr = []
    for (var i = 0; i < n; i++) {
        var row = [1];
        for (var j = 1; j < i; j++) {
            row.push(newArr[i - 1][j - 1] + newArr[i - 1][j]);
        }
        if (i > 0) {
            row.push(1);
        }
        newArr[i] = row;
    }
    return newArr
};