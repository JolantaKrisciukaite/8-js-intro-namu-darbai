
// Funkcija pavadinimu “antrasPagalDidumaSkaicius”


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
console.log(bigNumb([69, 69, 69, 69, 66, 68]), '->', 68);
console.log(bigNumb([-2, -3, -4, -1, 0]), '->', -1);
console.log(bigNumb([302, 412, 2, 8, 9, 11]), '->', 302);
console.log(bigNumb('pomidoras'));
console.log(bigNumb([]));