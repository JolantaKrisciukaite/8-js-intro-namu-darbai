// Funkcija pavadinimu “maziausiasSkaiciusSarase”


function littleNumber(list) {
    if (!Array.isArray(list)) {
    return 'ERROR: pateikta netinkamo tipo reiksme';
}

    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias';
    }

    let smallest = list[0];    // jeigu sarase yra tik sveikieji skaiciai             

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number < smallest) {
            smallest = number;
        }
    }

    return smallest;
}


console.log(littleNumber([1]), '->', 1);
console.log(littleNumber([1, 2, 3]), '->', 1);
console.log(littleNumber([-5, 78, 14, 0, 18]), '->', -5);
console.log(littleNumber([69, 69, 69, 69, 66]), '->', 66);
console.log(littleNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -8);
console.log(littleNumber('pomidoras'));
console.log(littleNumber([]));