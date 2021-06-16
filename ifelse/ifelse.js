/*
    media > 6 = 'Aprovado'

    media === 6 = 'Recuperação';

    media < 6 = 'Reprovado
    '
*/

var express = require('express');
var server = express();
var nomeAluno = 'Luan Santana';

var nota1 = 8;
var nota2 = 9;
var nota3 = 7;

var media = (nota1 + nota2 + nota3) / 3;

server.use(express.json());
//route initial
server.get('/',(req,res)=>{

    if (media > 6) {
        return res.json('Olá, ' + nomeAluno +' Sua média é, ' + media + ' Aprovado');
    } else if (media === 6) {
        return res.json('Olá, ' + nomeAluno + ' Sua média é, ' + media + ' Recuperação');
    } else {
        return res.json( 'Olá, ' + nomeAluno +' Sua média é, ' + media + ' Reprovado');
    }
})


server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');
