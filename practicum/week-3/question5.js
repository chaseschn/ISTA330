/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
    var monotonic = 1;
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (!(i <= j && input[i] <= input[j])) {
                monotonic = 0;
            }
        }
    }
    if (monotonic == 1) {
        return true;
    }
    monotonic = 1;
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (!(i <= j && input[i] >= input[j])) {
                monotonic = 0;
            }
        }
    }
    if (monotonic == 1) {
        return true;
    }
    return false;
};

console.log('hi');
console.log('Sup');