
const a = 8;
const b = 5;

const c = 9;
const d = 8;

const e = 7;
const f = 2;

function desimeteriopaSuma(pirmas, antras) {
    const sum = (pirmas + antras) * 10;
    console.log(sum);
}

desimeteriopaSuma(a, b);
console.log('------------');

desimeteriopaSuma(c, d);
console.log('------------');

desimeteriopaSuma(e, f);
console.log('------------');


function labas(vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas}, man yra ${amzius} metai ir gyvenu ${vietovardis}.`);
}

labas('Adolfukas', 99, 'uzbekijoje');
labas('Marijonete', 205, 'tadzikojoje');
labas('Kukumaras', 9, 'kirkimuose');

console.log('------------');


function reverseStrings(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
    }
    console.log(text, '->', reverse);
}

const pirmasZodis = 'Labas rytas';
reverseStrings(pirmasZodis);

reverseStrings('Lietuva');
reverseStrings('Sedek uzu kedes');


console.log('------------');


function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }

    const average = suma / pazymiai.length;

    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

pazymiuVidurkis('Adolfukas', [10, 5, 6, 2]);
pazymiuVidurkis('Karina', [9, 8, 4, 10]);


console.log('------------');


const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Marmarete', [7, 5, 4, 3]],
    ['Karinonete', [10, 8, 6, 5]],
];

for (let i = 0; i < mokykla.length; i++) {
   const mokinys = mokykla[i];
   const name = mokinys[0];
   const marks = mokinys[1];

   pazymiuVidurkis(name, marks);
   pazymiuVidurkis(mokykla[i][0], mokykla[i][1]);
}


console.log('------------');


function daugyba(a, b) {

if (typeof a !== 'number') {
    return 'Pirmasis parametras turi buti skaiciaus tipo';
}

if (typeof b !== 'number') {
    return 'Antrasis parametras turi buti skaiciaus tipo';
}

    const rez = a * b;
    return rez;
}


console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(-44, 55), '->', -2420);
console.log(daugyba(-44, 0), '->', 0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(18, -2), '->', -36);
console.log(daugyba('trys', 'penki'));




















