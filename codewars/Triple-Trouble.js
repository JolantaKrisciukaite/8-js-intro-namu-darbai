
/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
*/

function tripleTrouble(one, two, three) {
    let result = '';
    one = one.split('');
    two = two.split('');
    three = three.split('');
    
    for (let i = 0; i < one.length; i++) {
      result += one[i] + two[i] + three[i];
    }
    return result;
  }


console.log(tripleTrouble("this","test","lock"), '->', "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), '->', "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), '->', "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), '->', "LexLuthor");