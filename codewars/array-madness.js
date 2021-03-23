/*
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
*/

function array(a, b) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return true;
        }
     }
 
     return false;
 
 }





console.log(array([4,5,6],[1,2,3]), '->', true);
console.log(array([5,6,7],[4,5,6]), '->', false);
console.log(array([4,5,6],[3,4,5]), '->', false);
console.log(array([3,4,5],[2,3,4]), '->', false);
console.log(array([2,3,4],[1,2,3]), '->', false);
console.log(array([1,2,3],[0,1,2]), '->', true);
console.log(array([5,3,2,4,1],[15]), '->', false);
console.log(array([2,5,3,4,1],[3,3,3,3,3]), '->', false);
console.log(array([1,3,5,2,4],[2,2,2,2,2,2,2,1]), '->', false);
console.log(array([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), '->', true);
console.log(array([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), '->', false);
  