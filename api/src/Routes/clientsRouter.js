const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler
} = require("../handlers/productsHandler");
const {
  createFeedbackHandler,
  getFeedbacksHandler,
} = require("../handlers/clientsHandler");
// const {
//     createOrderHandler
// } = require("../handlers/orderHandler");
const {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getSubCategoriesHandler
} = require("../Handlers/tradesHandler");
const { validateFeedback } = require("../middlewares/validate");

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
// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );
// clientsRouter.post("/login", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

module.exports = clientsRouter;
