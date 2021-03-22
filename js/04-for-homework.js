
/* 

Ciklo For panaudojimas

*/

// 1

// a

const nuo = 0;
const iki = 0;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }

} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;

console.log(ats);

console.log('------------');

// b

const nuo2 = 0;
const iki2 = 4;
let suma2 = 0;

if (nuo2 <= iki2) {
    for (let i = nuo2; i <= iki2; i++) {
        suma2 += i;
    }
    
} else {
    for (let i = iki2; i <= nuo2; i++) {
        suma2 += i;
    }
}

const ats2 = `Intervale nuo ${nuo2} iki ${iki2} suma yra ${suma2}.`;

console.log(ats2);

console.log('------------');

// c

const nuo3 = 0;
const iki3 = 100;
let suma3 = 0;

if (nuo3 <= iki3) {
    for (let i = nuo3; i <= iki3; i++) {
        suma3 += i;
    }
    
} else {
    for (let i = iki3; i <= nuo3; i++) {
        suma3 += i;
    }
}

const ats3 = `Intervale nuo ${nuo3} iki ${iki3} suma yra ${suma3}.`;

console.log(ats3);

console.log('------------');

// d

const nuo4 = 574;
const iki4 = 815;
let suma4 = 0;

if (nuo4 <= iki4) {
    for (let i = nuo4; i <= iki4; i++) {
        suma4 += i;
    }
    
} else {
    for (let i = iki4; i <= nuo4; i++) {
        suma4 += i;
    }
}

const ats4 = `Intervale nuo ${nuo4} iki ${iki4} suma yra ${suma4}.`;

console.log(ats4);

console.log('------------');

// e

const nuo5 = -50;
const iki5 = 50;
let suma5 = 0;

if (nuo5 <= iki5) {
    for (let i = nuo5; i <= iki5; i++) {
        suma5 += i;
    }
    
} else {
    for (let i = iki5; i <= nuo5; i++) {
        suma5 += i;
    }
}

const ats5 = `Intervale nuo ${nuo5} iki ${iki5} suma yra ${suma5}.`;

console.log(ats5);

console.log('------------');

// f

const nuo6 = -70;
const iki6 = 0;
let suma6 = 0;

if (nuo6 <= iki6) {
    for (let i = nuo6; i <= iki6; i++) {
        suma6 += i;
    }
    
} else {
    for (let i = iki6; i <= nuo6; i++) {
        suma6 += i;
    }
}

const ats6 = `Intervale nuo ${nuo6} iki ${iki6} suma yra ${suma6}.`;

console.log(ats6);

console.log('------------');

// 2

// a

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}

console.log(text, '-------->', reverse);

console.log('------------');

// 3

// a 

// i

const nuo7 = 0;
const iki7 = 11;
const daliklis7 = 3;
let kiekis7 = 0;

for (let i = nuo7; i <= iki7; i++) {
    if (i % daliklis7 === 0) {
        kiekis7 ++;
    }
}

const ats7 = `Skaiciu intervale tarp ${nuo7} ir ${iki7}, 
besidalijanciu be liekanos is ${daliklis7} yra ${kiekis7} vienetai.`;

console.log(ats7);

console.log('------------');

// a 

// ii

const nuo8 = 0;
const iki8 = 11;
const daliklis8 = 5;
let kiekis8 = 0;

for (let i = nuo8; i <= iki8; i++) {
    if (i % daliklis8 === 0) {
        kiekis8 ++;
    }
}

const ats8 = `Skaiciu intervale tarp ${nuo8} ir ${iki8}, 
besidalijanciu be liekanos is ${daliklis8} yra ${kiekis8} vienetai.`;

console.log(ats8);

console.log('------------');

// a 

// iii

const nuo9 = 0;
const iki9 = 11;
const daliklis9 = 7;
let kiekis9 = 0;

for (let i = nuo9; i <= iki9; i++) {
    if (i % daliklis9 === 0) {
        kiekis9 ++;
    }
}

const ats9 = `Skaiciu intervale tarp ${nuo9} ir ${iki9}, 
besidalijanciu be liekanos is ${daliklis9} yra ${kiekis9} vienetai.`;

console.log(ats9);

console.log('------------');

// b 

// i

const nuo10 = 8;
const iki10 = 31;
const daliklis10 = 3;
let kiekis10 = 0;

for (let i = nuo10; i <= iki10; i++) {
    if (i % daliklis10 === 0) {
        kiekis10 ++;
    }
}

const ats10 = `Skaiciu intervale tarp ${nuo10} ir ${iki10}, 
besidalijanciu be liekanos is ${daliklis10} yra ${kiekis10} vienetai.`;

console.log(ats10);

console.log('------------');

// b 

// ii

const nuo11 = 8;
const iki11 = 31;
const daliklis11 = 5;
let kiekis11 = 0;

for (let i = nuo11; i <= iki11; i++) {
    if (i % daliklis11 === 0) {
        kiekis11 ++;
    }
}

const ats11 = `Skaiciu intervale tarp ${nuo11} ir ${iki11}, 
besidalijanciu be liekanos is ${daliklis11} yra ${kiekis11} vienetai.`;

console.log(ats11);

console.log('------------');

// b 

// iii

const nuo12 = 8;
const iki12 = 31;
const daliklis12 = 7;
let kiekis12 = 0;

for (let i = nuo12; i <= iki12; i++) {
    if (i % daliklis12 === 0) {
        kiekis12 ++;
    }
}

const ats12 = `Skaiciu intervale tarp ${nuo12} ir ${iki12}, 
besidalijanciu be liekanos is ${daliklis12} yra ${kiekis12} vienetai.`;

console.log(ats12);

console.log('------------');

// c

// i

const nuo13 = -18;
const iki13 = -18;
const daliklis13 = 3;
let kiekis13 = 0;

for (let i = nuo13; i <= iki13; i++) {
    if (i % daliklis13 === 0) {
        kiekis13 ++;
    }
}

const ats13 = `Skaiciu intervale tarp ${nuo13} ir ${iki13}, 
besidalijanciu be liekanos is ${daliklis13} yra ${kiekis13} vienetai.`;

console.log(ats13);

console.log('------------');

// c

// ii

const nuo14 = -18;
const iki14 = -18;
const daliklis14 = 5;
let kiekis14 = 0;

for (let i = nuo14; i <= iki14; i++) {
    if (i % daliklis14 === 0) {
        kiekis14 ++;
    }
}

const ats14 = `Skaiciu intervale tarp ${nuo14} ir ${iki14}, 
besidalijanciu be liekanos is ${daliklis14} yra ${kiekis14} vienetai.`;

console.log(ats14);

console.log('------------');

// c

// iii

const nuo15 = -18;
const iki15 = -18;
const daliklis15 = 7;
let kiekis15 = 0;

for (let i = nuo15; i <= iki15; i++) {
    if (i % daliklis15 === 0) {
        kiekis15 ++;
    }
}

const ats15 = `Skaiciu intervale tarp ${nuo15} ir ${iki15}, 
besidalijanciu be liekanos is ${daliklis15} yra ${kiekis15} vienetai.`;

console.log(ats15);


