const { Router } = require("express");
const {tradesInDbHandlers, productsInDbHandlers} = require("../Handlers/superAdminsHandler")

const superAdminsRouter = Router()

superAdminsRouter.post("/create/tradesInDb", tradesInDbHandlers)
superAdminsRouter.post("/create/productsInDb", productsInDbHandlers)

module.exports = superAdminsRouter