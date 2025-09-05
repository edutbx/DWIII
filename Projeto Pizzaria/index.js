//importar das libs
const express = require('express');
const fs = require('fs');
const path = require('path')

//criar endpoint (rota)
const router = express();

//cria rota "/"
router.get('/', (req,res) =>{
    fs.readFile(path.join(__dirname,'index.html'), ( err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor");
        } else{
            res.status(200).type("text/html").send(data);
        }
    });
});

//Criar a rota pizzaria
router.get('/pizzaria', (req, res) => {
    //Entrada de variáveis - através da URL
    let = sabor = req.query.sabor;
})

//Criar rota /cardapio
router.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'template', 'cardapio.html'),'utf8', (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor");
        } else {
            res.send(data);
        }
    })
})

//Criar rota /pedido
router.get('/pedido', (req, res) => {
    fs.readFile(path.join(__dirname, 'template', 'pedido.html'), 'utf8', (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor");
        } else {
            res.send(data);
        }
    })
})

//Exportação
module.exports = router;