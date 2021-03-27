console.log(451212);
console.log('Labas');
console.log('rytas');

const vardas = 'Jolanta';
console.log(vardas);

const pasisveikinimas = 'Labas rytas, Lietuva!';
console.log(pasisveikinimas);

const pirmasSkaicius = 7;
const antrasSkaicius = 77;

const suma = pirmasSkaicius + antrasSkaicius
console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log(mathText);

const petrasName = 'Petras';
const age = 99;

const petrasAge = petrasName + ' age is ' + age + '.';
console.log(petrasAge);

console.log('*************');

const pazymiai = [5, 7, 8, 3, 10, 6];
console.log(pazymiai);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + 
pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('Pazymiu suma:', pazymiuSuma);
console.log('Pazymiu kiekis:', pazymiuKiekis);
console.log('Pazymiu vidurkis:', pazymiuVidurkis);

console.log('*************');

const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`
    console.log(ats);
}

console.log('*************');

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('*************');
console.clear();

const e = 'labas';
const f = 9;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('*************');

const cookiesAgreed = false;

if (true) {
    console.log('ismetame sutikimo bloka....1');
}

if (!cookiesAgreed) {
    console.log('ismetame sutikimo bloka....2');
}

console.clear();

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('log in');
}

console.clear();

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);

console.clear();

const animal = 'SDGGg';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknow animal');
        break;
}


if (animal === 'dog') {
    console.log('Bark bark');
} if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknow animal');
}
    
console.log('********************');


const day = 2;

switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('ant');
        break;
    case 3:
        console.log('tre');
        break;
    case 4:
        console.log('ket');
        break;
    case 5:
        console.log('penkt');
        break;
    case 6:
        console.log('sest');
        break;
    case 7:
        console.log('sekm');
        break;
    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}


switch (day) {
    case 1: case 2: case 3: case 4: case 5:
        console.log('darbo diena');
        break;

        case 6: case 7: 
        console.log('savaitgalio diena');
        break;

    default:
        console.log('tokia diena savaiteje neegzistuoja');
}


switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;

    default: 
        console.log('tokia diena savaiteje neegzistuoja');
        break;

}


if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('tokia diena savaiteje neegzistuoja');
}


switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('nelygine diena');
        break;

    case 2:
    case 6:
        console.log('lygine diena');
        break;

    default: 
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}

console.clear();


const pirmas = 5;
const antras = 7;

let ats = '';

if (pirmas > antras) {
   ats = 'daugiau'; 
} else {
    ats = 'ne daugiau';
}

console.log(ats);


const trecias = 5;
const ketvirtas = 7;

const ats2 = trecias > ketvirtas ? 'daugiau' : 'ne daugiau';

console.log(ats2);


const penktas = 5;
const sestas = 65;

const ats3 = '';

if (penktas > sestas) {
    console.log('daugiau');
} else {
    console.log('ne daugiau');
}

console.log(ats3);


const septintas = 51;
const astuntas = 102;

const ats4 = septintas > astuntas ? 'daugiau' : 'ne daugiau';

console.log(ats4);


console.log('**********************');


const devintas =  89;
const desimtas = 555;

const ats5 = devintas > desimtas ? 'daugiau' : 'ne daugiau';

console.log(ats5);


console.log('**********************');


const pazymiai2 = [7, 10, 8, 5];

const suma3 = pazymiai2[1] + pazymiai2[2] + pazymiai2[3] + pazymiai2[4];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);


console.log('**********************');


const marks = [10, 8, 5, 6, 8];

const count = marks.length;
let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

const average = sum / count;
console.log(average);


console.log('**********************');


const abc5 = ['r', 'y', 't', 'a', 's']

let zodis5 = '';
let abcIndex = 0;

zodis5 += abc5[abcIndex];
console.log(zodis5);

abcIndex += 1;
zodis5 += abc5[abcIndex];
console.log(zodis5);

abcIndex += 1;
zodis5 += abc5[abcIndex];
console.log(zodis5);

abcIndex += 1;
zodis5 += abc5[abcIndex];
console.log(zodis5);

abcIndex += 1;
zodis5 += abc5[abcIndex];
console.log(zodis5);
















