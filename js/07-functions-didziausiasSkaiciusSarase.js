// Funkcija pavadinimu “didziausiasSkaiciusSarase”


function bigNum(list) {
    if (!Array.isArray(list)) {
    return 'ERROR: pateikta netinkamo tipo reiksme';
}

    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias';
    }

    let biggest = list[0]; // jeigu sarase yra sveikieji skaiciai                
    // arba -Infinity; let i = 0 ---> jeigu sarase yra pamineta Infinity

    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}


console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum('pomidoras'));
console.log(bigNum([]));


/* 

function bigNumb(sarasas) {
    let len = sarasas.length, max = -Infinity;
    while (len--) {
      if (Number(sarasas[len]) > max) {
        max = Number(sarasas[len]);
      }
    }
    return max;
  };

*/