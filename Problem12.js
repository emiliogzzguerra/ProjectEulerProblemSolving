/*The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?*/

var done = false;
var result = 0;
var evaluated = 1;
var i = 0;
var factors = [];

function getFactors(integer){
  factors = [];
  for(var i = 1; i <= Math.sqrt(integer); i++){
    if(integer%i === 0){
      factors.push(i);
      factors.push(integer/i);  
    } 
  }
  return factors;
}

while(done != true){
    if (getFactors(evaluated).length >= 500){
        console.log(evaluated);
        console.log(factors);
        console.log(Math.sqrt(evaluated));
        done = true;
    } else {
        evaluated += (2+i);
        i++;
    };
};