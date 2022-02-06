
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {
    var largestSum = -99;
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j <= input.length; j++) {
            var curSum = 0;
            for(var k = i; k < j; k++) {
                curSum += input[k];
            }
            if (curSum > largestSum) {
                largestSum = curSum;
            }
            
        }
     }
     return largestSum;
    
 };
