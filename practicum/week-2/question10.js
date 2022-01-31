/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  var num = n.toString();
  var min = 10;
  var max = -1;
  for(var i = 0;i<num.length;i++){
  	if(num[i] < min){
    	min = num[i];
    }
    if(num[i] > max){
    	max = num[i];
    }
  }
  return (max - min);
};
