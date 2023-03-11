

const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
// const validateLogin = require('../Routes/validate');
const paymentsRouter = require("./paymentsRouter");


const routes = Router();

routes.use("/trades", /*validateLogin*/ tradesRouter)
routes.use("/clients", /*validateLogin,*/ clientsRouter)
routes.use("/payments", paymentsRouter)

module.exports = routes;

