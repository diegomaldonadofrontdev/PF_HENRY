

const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
const validateLogin = require('../Routes/validate');


const routes = Router();

routes.use("/trades", validateLogin, tradesRouter)
routes.use("/clients", validateLogin, clientsRouter)


module.exports = routes;

