/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/


// Jeigu nera ka susumuoti atsakymas bus 0.
// for // if


function positiveSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];   
        }
    }
    return sum;
    
}

console.log(positiveSum([1,2,3,4,5]), '->', 15);
console.log(positiveSum([1,-2,3,4,5]), '->', 13);
console.log(positiveSum([]), '-->', 0);
console.log(positiveSum([-1,-2,-3,-4,-5]), '->', 0);
console.log(positiveSum([-1,2,3,4,-5]), '->', 9);


/* 

    function positiveSum(array) {
    return array.filter(x => x >= 0).reduce((a, b) => a + b, 0);
  }

*/