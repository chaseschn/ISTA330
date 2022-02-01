/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
  var median = 0;
  if(input.length % 2 == 0){
     median = (input[input.length/2 -1] + input[(input.length/2)]) / 2;
   } else {
     median = input[Math.floor(input.length / 2)];
   }
    return median;
};
