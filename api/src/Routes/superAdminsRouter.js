const { Router } = require("express");
const {dbDataHandlers} = require("../Handlers/superAdminsHandler")

const superAdminsRouter = Router()

superAdminsRouter.post("/create/dbdata", dbDataHandlers)

module.exports = superAdminsRouter