const { Router } = require("express");
const {
	mercadoPagoController,
} = require("../Controllers/mercadoPagoController");

const mercadoPagoRouter = Router();

mercadoPagoRouter.post("/", mercadoPagoController);

module.exports = mercadoPagoRouter;
