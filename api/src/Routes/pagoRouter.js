const { Router } = require("express");
const { paymentsHandler, getProducts } =require("../Handlers/pagoHandler");

const paymentsRouter = Router();

paymentsRouter.get("/", getProducts)
paymentsRouter.post("/", paymentsHandler)

module.exports = paymentsRouter;