const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");


const routes = Router();

routes.use("/trades", tradesRouter)
routes.use("/clients", clientsRouter)


module.exports = routes;
