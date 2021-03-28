/*
https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => 
    distanceToPump <= mpg * fuelLeft ? true : false;


console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);


/*

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  const b = mpg;
  const c = fuelLeft;
  const a = distanceToPump;
  
  if (a <= b * c) {
    return true;
  }
  if (a > b * c) {
    return false;
  }
};

*/


/*

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    
    
    if (fuelLeft * mpg >= distanceToPump)
    return true;
    if (fuelLeft * mpg < distanceToPump)
    return false;

}     

*/

/*

zeroFuel = (_,__,___) => ___*__>=_

*/