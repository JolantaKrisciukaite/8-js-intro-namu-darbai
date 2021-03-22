
/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
*/

function countSheeps(arrayOfSheep) {

    const sheepCounter = 0;

    for (let i = 0; i < sheepCounter.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheepCounter++;
        } 
    }
    return sheepCounter;
}


var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

    
console.log(countSheeps(array1) === 17, "There are 17 sheeps in total")