//importar dependencia
const express = require('express');

const path = require('path');

//iniciando bliblioteca
const server = express()
server
    //ultilizando os arquivos estaticos
    .use(express.static('public'))
    //criar uma rota
    .get('/', (request, response) => {
        //console.log(path.join(__dirname, 'views', 'index.html'))//
        return response.sendFile(path.join(__dirname,'views','index.html'))
    })

//ligar o servidor
server.listen(5500);