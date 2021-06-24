//importando dependencia
const express = require('express');
const { get } = require('http');
const path = require('path');
const { createOphanages } = require('./pages');
const pages = require('./pages');

//iniciando bliblioteca
const server = express()
server
    //ultilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //criar uma rotas
    .get('/',pages.index)
    .get('/orphanage',pages.orphanage)
    .get('/orphanages',pages.orphanages)
    .get('/create-orphanage',createOphanages)

        //console.log(path.join(__dirname, 'views', 'index.html'))//
        //return response.sendFile(path.join(__dirname,'views','index.html'))
        //const city = req.query.city
        //return res.render('index')
    
//ligar o servidor
server.listen(5500)