var express = require('express');
var app = express();



//Importação dos modelos

//Configurar o servidor HTTP

//Conexão com o banco de dados MongoDB

//Instanciando modelos

//Importando as rotas

//Instanciando as rotas

//Definição da rota raíz
app.get('/teste', function(req, res){
    console.log("Recebida requisiçao do teste")
    res.send("ok");
  })

//Listener
app.listen(3001, function(){
    console.log('Servidor rodando na porta 3001');
})