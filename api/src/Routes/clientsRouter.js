const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler 
} = require("../handlers/productsHandler");
const {
    createClientHandler 
} = require("../handlers/clientsHandler");
const {
    createOrderHandler 
} = require("../handlers/orderHandler");
const { validateClients, validateOrder } = require("../middlewares/validate");


const clientsRouter = Router();

// GET
clientsRouter.get("/products", getProductsHandler);
clientsRouter.get("/products", getProductsHandler);
clientsRouter.get("/products/:id", getProductHandler);

// POST
clientsRouter.post("/client", validateClients, createClientHandler);
clientsRouter.post("/order", validateOrder, createOrderHandler);



module.exports = clientsRouter;