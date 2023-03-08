const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler
} = require("../handlers/productsHandler");
const {
  createFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder,
  getClients,
  getOrders,
  updateClient,
  updateOrder
} = require("../handlers/clientsHandler");
// const {
//     createOrderHandler
// } = require("../handlers/orderHandler");
const {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getSubCategoriesHandler,
  

} = require("../Handlers/tradesHandler");
const { validateFeedback, validateClient, validateOrder } = require("../middlewares/validate");

const clientsRouter = Router();

// GET
clientsRouter.get("/categories", getCategoriesHandler);
clientsRouter.get("/subcategories", getSubCategoriesHandler);
clientsRouter.get("/trades/search", getTradesHandler);
clientsRouter.get("/trades/search/:id", getTradeHandler);
clientsRouter.get("/products/search", getProductsHandler);
clientsRouter.get("/products/search/:id", getProductHandler);
clientsRouter.get("/feedbacks", getFeedbacksHandler);


// POST
clientsRouter.post("/feedback", validateFeedback, createFeedbackHandler);



clientsRouter.post("/register", validateClient, newRegister);
clientsRouter.post("/new-order", validateOrder, newOrder);

clientsRouter.get('/clients',getClients)
clientsRouter.get('/orders',getOrders)

clientsRouter.put('/update-clients',updateClient);
clientsRouter.put('/update-orders', updateOrder);



// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );

// clientsRouter.post("/login", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

module.exports = clientsRouter;
