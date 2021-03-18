/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039
*/
     
    // .replace(/_/g," ");
    // g - global modifier
    // pakeiciamas netik pirmas atitikmuo, bet ir visi likę.


    function correctPolishLetters (string) {
        return string

        .replace(/ł/g, 'l')
        .replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/ź/g, 'z')
        .replace(/ż/g, 'z')

    }


console.log(correctPolishLetters
('Jędrzej Błądziński'), '->', 'Jedrzej Bladzinski');

console.log(correctPolishLetters
('Lech Wałęsa'), '->', 'Lech Walesa');

console.log(correctPolishLetters
('Maria Skłodowska-Curie'), '->', 'Maria Sklodowska-Curie');