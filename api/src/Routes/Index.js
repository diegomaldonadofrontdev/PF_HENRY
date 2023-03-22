const { Router } = require("express");
const tradesRouter = require("./tradesRouter");
const clientsRouter = require("./clientsRouter");
const superAdminsRouter = require("./superAdminsRouter");
const mercadoPagoRouter = require("./mercadoPagoRouter");
const tradeBossRouter = require("./tradeBossRouter");
const testRouter = require("../Routes/testRouter")
// const validateLogin = require('../Routes/validate');

const routes = Router();

// Ruta para comercios
routes.use("/trades", tradesRouter);
// Ruta para clientes
routes.use("/clients", clientsRouter);
// Ruta para superadmins
routes.use("/superadmins", superAdminsRouter);
// Ruta Mercado Pago
routes.use("/payment", mercadoPagoRouter);
// Ruta para encargados de comercio
routes.use("/tradeboss", tradeBossRouter);
// Ruta de pruebas (Emi)
routes.use("/test", testRouter);


module.exports = routes;
