
// Funkcija pavadinimu “antrasPagalDidumaSkaicius”


function bigNum(list) {
    if (!Array.isArray(list)) {
    return 'ERROR: pateikta netinkamo tipo reiksme';
    }
    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias';
    }

    let biggest = list[0];   // arba abiejuose -Infinity
    let secondBiggest = list[0];  // jeigu bus = -1, tada ras 66, o ne 69

    for (let i = 1; i < list.length; i++) {
        const number = list[i];

        if (number > biggest) {
            secondBiggest = biggest;
            biggest = number;
        } else if (number > secondBiggest && number < biggest) {
            secondBiggest = number;
        }
    }

    return secondBiggest;
}


console.log(bigNum([1, 2, 3]), '->', 2);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 18);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([2, 4, 55, -45, 80]), '->', 55);
console.log(bigNum([3, 4, 3, 4, 58, -78]), '->', 4);
console.log(bigNum('pomidoras'));
console.log(bigNum([]));



/*  

Turi buti patikslinta salyga, kurio antro, pagal diduma, ieskome.
Ar tai bus antrasis 69 ar 66 :)

function bigNumb(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: pateikta netinkamo tipo reiksme';
    }
    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias';
    }

    let biggest = list[0]; 
    let secondBiggest = -1;

    for (let i = 0; i < list.length; i++) {
       if (list[i] > biggest) {
           secondBiggest = biggest;
           biggest = list[i];
       }

       if (list[i] > secondBiggest && list[i] < biggest) {
           secondBiggest = list[i];
       }
    }

       return secondBiggest;

}


console.log(bigNumb([1, 2, 3, 4]), '->', 3);
console.log(bigNumb([1, 2, 3]), '->', 2);
console.log(bigNumb([-5, 78, 14, 0, 18]), '->', 18);
console.log(bigNumb([69, 69, 69, 69, 66]), '->', 66);
console.log(bigNumb([-2, -3, -4, -1, 0]), '->', -1);
console.log(bigNumb([302, 412, 2, 8, 9, 11]), '->', 302);
console.log(bigNumb('pomidoras'));
console.log(bigNumb([]));

*/