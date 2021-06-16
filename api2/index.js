var express = require('express');
var server = express();


server.use(express.json());

var pessoas = ['cientista', 'raul', 'genilson', 'ndonge', 'buca', 'gonçalvez', 'elio'];

//route initial
server.get('/',(req,res)=>{
    return res.json('Api On');
})

//criando uma rota get users route params
server.get('/users', (req, res) => {
    return res.json(pessoas);
})

//criando uma rota get users query params


server.get('/users/id/:id', (req, res) => {
    let ret = req.params.id < 0 ? 0 : req.params.id <= pessoas.length ?
        res.json(pessoas[req.params.id < 0 ? 0 : req.params.id]) : res.json('usuario não encontrado');
    return ret;
})


server.get('/users/nome/:nome', (req, res) => {
    return isNULLorWhitespace(req.params.nome) ?
        res.json('valor null ou whitespace') :
        res.json(pessoas.indexOf(req.params.nome));
});

function isNULLorWhitespace(str) {
    if (str == null || str == "")
        return true;
}

//using method post
server.post('/users', (req, res) => {
    if (!isNULLorWhitespace(req.params.name)) {
        pessoas.push(req.params.name);
        return res.json('Cadastrado com Successo');
    } else
        return res.json('não cadastrado valor null ou whitespace');

})


//Criando o servidor e rodar na porta http://localhost:3000
server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');