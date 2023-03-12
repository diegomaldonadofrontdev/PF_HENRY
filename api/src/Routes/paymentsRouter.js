const { Router } = require("express");
// const { validateTestUser } = require("../Middlewares/validate");
const { paymentsHandler, getProducts } = require("../Handlers/paymentsHandler")

const paymentsRouter = Router();

paymentsRouter.get("/", getProducts)
paymentsRouter.post("/", paymentsHandler)

module.exports = paymentsRouter;