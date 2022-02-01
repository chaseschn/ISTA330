/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
 const str = A;
 const str2 = B;
 let A1 = str.toLowerCase();
 let B1 = str2.toLowerCase();
 let count = 0;
 for (let c of str){
   for (let d of str2){
    if (c == d){
     count++;
    }
   }
  }
 return count;
};

