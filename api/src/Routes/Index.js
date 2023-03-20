const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
const superAdminsRouter = require("./superAdminsRouter");
const mercadoPagoRouter = require("./mercadoPagoRouter");
const tradeBossRouter = require("./tradeBossRouter");
// const validateLogin = require('../Routes/validate');

const routes = Router();

routes.use("/trades", tradesRouter);
routes.use("/clients", clientsRouter);
routes.use("/superadmins", superAdminsRouter);
routes.use("/payment", mercadoPagoRouter);
routes.use("/tradeboss", tradeBossRouter);

module.exports = routes;
