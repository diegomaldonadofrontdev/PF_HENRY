

const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
const superAdminsRouter = require ("./superAdminsRouter")
const paymentsRouter = require("./paymentsRouter");
// const validateLogin = require('../Routes/validate');


const routes = Router();

routes.use("/trades", /*validateLogin*/ tradesRouter)
routes.use("/clients", /*validateLogin,*/ clientsRouter)
routes.use("/superadmins", superAdminsRouter)
routes.use("/payments", paymentsRouter)


module.exports = routes;

