/*
https://www.codewars.com/kata/5875b200d520904a04000003/solutions/javascript
*/

function enough(cap, on, wait) {
    if (on + wait <= cap) {
        return 0;
    } else if (cap - on < wait) {
        const uzimtosVietos = cap - on;
        const skirtumas = uzimtosVietos - wait;
        return -skirtumas;
    }
}     


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

  
/* 

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

  */
