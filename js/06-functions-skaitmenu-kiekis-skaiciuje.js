// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”


function digits(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'ERROR: pateikta netinkamo tipo reiksme';
    }
    if (isNaN(skaicius)) {   
        // arba if ('' + skaicius === 'NaN') {
        return 'ERROR: pateikta netinkamo tipo reiksme';
    }

    const tekstinisSkaicius = '' + skaicius;
    const skaitmenuKiekis = tekstinisSkaicius.length;
    
    return skaitmenuKiekis;
}


console.log(digits(5), '-->', 1 );
console.log(digits(781), '-->', 3);
console.log(digits(37060123456), '-->', 11);
console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));

