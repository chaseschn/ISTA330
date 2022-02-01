/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
  var count = 0;
	while(n > 0){
  	if(n % 4 == 0){
    	n = n / 4;
    	count++;
    } else if(n % 3 == 0){
    	n = n / 3;
      count++;
    } else {
    	n = n-1;
    	count++;
    }
  }
  return count;
};

