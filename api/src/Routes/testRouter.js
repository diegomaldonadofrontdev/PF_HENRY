const { Router } = require("express");
const {testerHandler} = require ("../Handlers/testhandler")

const clientsRouter = Router();

clientsRouter.get("/:boolean", testerHandler)

module.exports = clientsRouter