const { Router } = require("express");
const { validateTestUser } = require("../Middlewares/validate");
const {paymentsHandler, notificacion} = require("../Handlers/paymentsHandler")

const paymentsRouter = Router();

paymentsRouter.post("/create", validateTestUser, paymentsHandler)
paymentsRouter.post("/notification", notificacion)

module.exports = paymentsRouter;