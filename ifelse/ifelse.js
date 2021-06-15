/*
    media > 6 = 'Aprovado'

    media === 6 = 'Recuperação';

    media < 6 = 'Reprovado
    '
*/
var nomeAluno = 'Luan Santana';

var nota1 = 8;
var nota2 = 9;
var nota3 = 7;

var media = (nota1 + nota2 + nota3) / 3;
console.log('Olá, ' + nomeAluno);

if (media > 6) {
    console.log('Sua média é, ' + media + ' Aprovado');
} else if (media === 6) {
    console.log('Sua média é, ' + media + ' Recuperação');
} else {
    console.log('Sua média é, ' + media + ' Reprovado');
}