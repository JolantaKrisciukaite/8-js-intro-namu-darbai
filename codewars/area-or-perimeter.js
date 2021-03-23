/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
*/

// Kvadrato plotas S = a * b
// Staciakampio perimetras P = 2 * (a + b)
// Jeigu kvadratas - grazinkite plota.
// Jeigu staciakampis - grazinkite perimetra.

const areaOrPerimeter = function(l, w) {

    if (l === w) {
        return l * w;
    } else if (l !== w) {
        return (l + w) * 2;
    }
    
}
  

console.log(areaOrPerimeter(4 , 4), '->', 16);
console.log(areaOrPerimeter(6 , 10), '->', 32);
