var express = require('express');
var server = express();



//route initial
server.get('/',(req,res)=>{
    return res.json('Api On');
})

//criando uma rota get 
server.get('/Teste', (req, res) => {
    var pessoa = {
        nome: 'cientista avogadro',
        email: 'cientistsavogadro2019@gmail.com',
        idade: 20
    };
    return res.json(pessoa);
})

//Criando o servidor e rodar na porta http://localhost:3000
server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');