/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let cat = [0,0,0,0,0,0,0,0,0,0]
    for (var i = 1; i <= n; i++) {
        if (i < 10) {
            cat[i - 1] = 1;
        } else {
            cat[(((i - (i % 10)) / 10) + (i % 10)) - 1] += 1;

        }
    }
    var most = cat[0];
    for (var j = 0; j < cat.length; j++) {
        if (cat[j] > most) {
            most = cat[j];
        }
    }
    var count = 0;
    for (var j = 0; j < cat.length; j++) {
        if (cat[j] == most) {
            count++;
        }
    }
    return count;
};