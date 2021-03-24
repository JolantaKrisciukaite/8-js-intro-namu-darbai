/*
https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
*/


function strCount(str, letter) {
    let arr = str.split("");
    let finalArr = arr.filter((char) => letter === char);
    return finalArr.length;
}


console.log(strCount('Hello', 'o'), '->', 1);
console.log(strCount('Hello', 'l'), '->', 2);
console.log(strCount('', 'z'), '->', 0);


/* 

function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter)
        count++;
    }
    
    return count;
    
}
  
*/

/*

Function strCount(str, letter){  
  
  let result = 0
 
  if(str.length === 0){
    return 0;
  } else {
    for(let count = 0; count < str.length; count++) {
        if(str[count] === letter) {
          result++
        }      
    }
    return result;
  }

}

*/