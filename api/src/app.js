const express = require('express');
const server = express();
const index = require('./Routes/Index')

server.use(express.json());
server.use('/',index);

module.exports = server;

/*
CONFIGURACION DE EXPRESS

server.use('/', routes);

*/