

const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
const pagoRouter= require("./pagoRouter")
// const validateLogin = require('../Routes/validate');


const routes = Router();

routes.use("/trades", /*validateLogin*/ tradesRouter)
routes.use("/clients", /*validateLogin,*/ clientsRouter)
routes.use("/payments", pagoRouter)

module.exports = routes;

