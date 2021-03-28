/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
*/

function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}


console.log(past(0, 1, 1), '->', 61000)
console.log(past(1, 1, 1), '->', 3661000)
console.log(past(0, 0, 0), '->', 0)
console.log(past(1, 0, 1), '->', 3601000)
console.log(past(1, 0, 0), '->', 3600000)

/*

function past(h, m, s){
  let hours = h * 60 * 60 * 1000;
  let minutes = m * 60 * 1000;
  let seconds = s * 1000;
  
  return hours + minutes + seconds;
}

*/
 