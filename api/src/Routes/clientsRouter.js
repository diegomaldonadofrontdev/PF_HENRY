const { Router } = require("express");
// const {
//   getProductsHandler,
//   getProductHandler 
// } = require("../handlers/productsHandler");
// const {
//     createClientHandler 
// } = require("../handlers/clientsHandler");
// const {
//     createOrderHandler 
// } = require("../handlers/orderHandler");
const {getTradesHandler, getTradeHandler} = require ("../Handlers/tradesHandler")
// const { validateClients, validateOrder } = require("../middlewares/validate");


const clientsRouter = Router();

// GET
clientsRouter.get("/trades", getTradesHandler);
clientsRouter.get("/trades/:id", getTradeHandler);
// clientsRouter.get("/trades/products", getProductsHandler);
// clientsRouter.get("/products/:id", getProductHandler);

// POST
// clientsRouter.post("/client", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);



module.exports = clientsRouter;