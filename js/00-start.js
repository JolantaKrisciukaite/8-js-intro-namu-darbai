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


