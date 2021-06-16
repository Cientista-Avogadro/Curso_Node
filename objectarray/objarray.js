var express = require('express');
var server = express();

server.use(express.json());

var pessoa1 = {
    nome: 'cientista avogadro',
    email: 'cientistsavogadro2019@gmail.com',
    idade: 20
}

var pessoa2 = {
    nome: 'cientista fenix',
    email: 'cientistsavogadro2020@outlook.com',
    idade: 20
}

var pessoas = [];

server.get('/',(req,res)=>{
    pessoas.push(pessoa1);
    pessoas.push(pessoa2);
    return res.json(pessoas);
})


server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');