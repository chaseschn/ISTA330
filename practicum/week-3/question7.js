/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function (M) {
    let matrix = [];
    for (var i = 0; i < M[0].length; i++) {
        matrix[i] = [];
    }
    for (var rows = 0; rows < M.length; rows++) {
        for (var cols = 0; cols < M[rows].length; cols++) {
            matrix[cols].push(M[rows][cols]);
        }
    }
    return matrix;
};