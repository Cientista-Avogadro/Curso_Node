var express = require('express');
var server = express();


server.use(express.json());

var pessoas = ['cientista', 'raul', 'genilson', 'ndonge', 'buca', 'gonçalvez', 'elio'];
//criando uma rota get users route params
server.get('/users', (req, res) => {
    return res.json(pessoas);
})


//criando uma rota get users query params
server.get('/users/:id', (req, res) => {
    let ret = req.params.id < 0 ? 0 : req.params.id <= pessoas.length ?
        res.json(pessoas[req.params.id < 0 ? 0 : req.params.id]) : res.json('usuario não encontrado');
    return ret;
})


//using method post
server.post('/users', (req, res) => {
        var name = req.body.name;
        pessoas.push(name);
        return res.json('Cadastrado com Successo');
    })
    //Criando o servidor e rodar na porta http://localhost:3000
server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');