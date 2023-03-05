const { Router } = require("express");
// const {
//   getProductsHandler,
//   getProductHandler
// } = require("../handlers/productsHandler");
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
} = require("../Handlers/tradesHandler");
const { validateFeedback } = require("../middlewares/validate");

const clientsRouter = Router();

// GET
clientsRouter.get("/trades", getTradesHandler);
clientsRouter.get("/trades/:id", getTradeHandler);
clientsRouter.get("/categories", getCategoriesHandler);
clientsRouter.get("/feedbacks", getFeedbacksHandler);


// POST
clientsRouter.post("/feedback", validateFeedback, createFeedbackHandler);
// clientsRouter.post("/client", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

module.exports = clientsRouter;
