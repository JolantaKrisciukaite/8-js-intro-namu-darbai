/*
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
*/

// acc - accumulator (argumentas)
// cur - currentValue (argumentas)


const arrayMadness = (a, b) => {

    return a.reduce((acc, cur) => 
    acc + (cur ** 2), 0) > b.reduce((acc, cur) => 
    acc + (cur ** 3), 0);

  };


console.log(arrayMadness([4,5,6],[1,2,3]), '->', true);
console.log(arrayMadness([5,6,7],[4,5,6]), '->', false);
console.log(arrayMadness([4,5,6],[3,4,5]), '->', false);
console.log(arrayMadness([3,4,5],[2,3,4]), '->', false);
console.log(arrayMadness([2,3,4],[1,2,3]), '->', false);
console.log(arrayMadness([1,2,3],[0,1,2]), '->', true);
console.log(arrayMadness([5,3,2,4,1],[15]), '->', false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), '->', false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), '->', false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), '->', true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), '->', false);

/*

function arrayMadness(a, b) {

    let sum1 = 0;
    let sum2 = 0;
    for (let i =0, {length} = a; i < length; ++i)
    {
        sum1 += a[i]**2;
    }
    for (let i =0, {length} = b; i < length; ++i)
    {
        sum2 += b[i]**3;
    }
    return sum1 > sum2;
}


function arrayMadness(a, b) {
  let sum1=0;
  let sum2=0;
  for (let n of a) {
    sum1 += n*n;
  }
  for (let n of b) {
    sum2 += n*n*n; //Math.pow is still longer than that.
  }
  return (sum1 > sum2);
}


function arrayMadness(a, b) {
  var value, i
  var sum = 0
  
  for (i = 0; i < a.length; i++) {
    value = a[i]
    sum += value * value  
  }
  
  for (i = 0; i < b.length; i++) {
    value = b[i]
    sum -= value * value * value
  }
  
  return sum > 0
}

*/
  