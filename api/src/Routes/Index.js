<<<<<<< HEAD
const express = require('express');
const index = express();
const login = require('../Routes/login');


index.use(login);


module.exports = index;
=======
const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");


const routes = Router();

routes.use("/trades", tradesRouter)
routes.use("/clients", clientsRouter)


module.exports = routes;
>>>>>>> fa71414f0bb8c18b3f91182b1efdc25f18f1cee6
