
/*
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
*/

const differenceInAges = (ages) => {
    ages.sort((a, b) => a - b);

    return [ages[0], ages[ages.lenght - 1], ages.pop()- ages.shift()];
}


/* 

function differenceInAges(ages){
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
  
    return [youngest, oldest, oldest - youngest];
  }

*/

