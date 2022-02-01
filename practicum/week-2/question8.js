/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
  var newArr = []
	for(var i = 0;i<input.length;i++){
  newArr[i] = 0;
  	for(var j = 0;j<input.length;j++){
    	if(input[i] < input[j] && input[j] % 2 == 0){
      	newArr[i] += 1;
      }
    }
  }
  return newArr;
};
