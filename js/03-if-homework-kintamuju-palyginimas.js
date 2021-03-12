/* Kintamuju palyginimas
*/

// 3

const palyginimoSalyga = 'Rezultatas tenkina palyginimo salyga';

if (palyginimoSalyga === 'Rezultatas tenkina palyginimo salyga') {
    console.log('Pomidoras');
}

if (palyginimoSalyga === 'Salyga nera tenkinama') {
    console.log('Bandykite dar karta');
}


console.log('------------');


if (palyginimoSalyga === 'Rezultatas tenkina palyginimo salyga') {
    console.log('Pomidoras');
} else {
    if (palyginimoSalyga === 'Salyga nera tenkinama') {
        console.log('Bandykite dar karta');
    }
}


console.log('------------');


if (palyginimoSalyga === 'Rezultatas tenkina palyginimo salyga') {
    console.log('Pomidoras');
}

if (palyginimoSalyga === 'Salyga nera tenkinama') {
    console.log('Bandykite dar karta');
}

if  (palyginimoSalyga !== 'Rezultatas tenkina palyginimo salyga' && 
    palyginimoSalyga !== 'Salyga nera tenkinama') {
    console.log('Bandykite dar karta');
}

console.log('------------');


// 1.a

const a = 20
const b = 33
const c = 18

if (a > c) {
    const ats = `${a} yra daugiau uz ${c}`;
    console.log(ats);
}

if (b > a) {
    const ats = `${b} yra daugiau uz ${a}`;
    console.log(ats);
}

if (b > c) {
    const ats = `${b} yra daugiau uz ${c}`;
    console.log(ats);
}


console.log('------------');


// 1.b

if (a < b) {
    const ats = `${a} yra maziau uz ${b}`;
    console.log(ats);
}

if (c < a) {
    const ats = `${c} yra maziau uz ${a}`;
    console.log(ats);
}

if (c < b) {
    const ats = `${c} yra maziau uz ${b}`;
    console.log(ats);
}


console.log('------------');


// 1.c

if (a !== b) {
    const ats = `${a} nera lygu ${b}`
    console.log(ats)
}

if (b !== c) {
    const ats = `${b} nera lygu ${c}`
    console.log(ats)
}

if (c !== a) {
    const ats = `${c} nera lygu ${a}`
    console.log(ats)
}


console.log('------------');


// 1.d

if (a !== b) {
    const ats = `${a} nera nelygu ${b}`
    console.log(ats)
}

if (b !== c) {
    const ats = `${b} nera nelygu ${c}`
    console.log(ats)
}

if (c !== a) {
    const ats = `${c} nera nelygu ${a}`
    console.log(ats)
}


console.log('------------');


// 1.e

if (a > c, a !== c) {
    const ats = `${a} yra daugiau uz ${c} arba ${a} nera lygu ${c}`;
    console.log(ats)
}

if (b > a, b !== a) {
    const ats = `${b} yra daugiau uz ${a} arba ${b} nera lygu ${a}`;
    console.log(ats)
}

if (b > c, b !== c) {
    const ats = `${b} yra daugiau uz ${c} arba ${b} nera lygu ${c}`;
    console.log(ats)
}


console.log('------------');


// 1.f

if (a < b, a !== b) {
    const ats = `${a} yra maziau uz ${b} arba ${a} nera lygu ${b}`;
    console.log(ats)
}

if (c < b, c !== b) {
    const ats = `${c} yra maziau uz ${b} arba ${c} nera lygu ${b}`;
    console.log(ats)
}

if (c < a, c !== a) {
    const ats = `${c} yra maziau uz ${a} arba ${c} nera lygu ${a}`;
    console.log(ats)
}


console.log('------------');

// 2 

// 2.a

const ananasas = 'ananasas';
const ananasoIlgis = ananasas.length;

console.log(ananasoIlgis);