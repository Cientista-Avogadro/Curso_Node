var express = require('express');
var server = express();

server.use(express.json());

//route initial
server.get('/',(req,res)=>{
    return res.json('Hello, World');

})

server.listen(3000);
console.log('Criando o servidor e rodar na porta 3000');