/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var num1 = 0;
    var num2 = 1;

    while (n > 0) {
        var temp = num2;
        num2 += num1;
        num1 = temp;
        n -= 1;
    }
    return num1;
};