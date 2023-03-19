const { Router } = require("express");
const {tradesInDbHandlers, productsInDbHandlers} = require("../Handlers/superAdminsHandler")
const {postProductCategoryHandler} = require ("../Handlers/productsHandler")
const {postCategoryHandler, postTradeHandler} = require ("../Handlers/tradesHandler")
const {validateCategory, validateTrade, validateCategoryProduct} = require ("../Middlewares/validate")

const superAdminsRouter = Router()

superAdminsRouter.post("/create/tradesInDb", tradesInDbHandlers)
superAdminsRouter.post("/create/productsInDb", productsInDbHandlers)
superAdminsRouter.post("/newCategory", validateCategory, postCategoryHandler); // FUNCIONANDO
superAdminsRouter.post("/newTrade", validateTrade, postTradeHandler); // FUNCIONANDO
superAdminsRouter.post("/newCategoryProducts", validateCategoryProduct, postProductCategoryHandler);

module.exports = superAdminsRouter