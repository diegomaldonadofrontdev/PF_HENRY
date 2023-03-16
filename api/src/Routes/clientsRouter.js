const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler,
  getProductCategoryHandler,
} = require("../handlers/productsHandler");
const {
  postClientHandler,
  getClientHandler, 
  updateClient,
  updateOrder,
  login,
  registerWhitGoogle,
  confirmEmail
} = require("../handlers/clientsHandler");
const {
  getOrdersHandler,
  getOrderHandler,
  createNewOrderHandler
} = require("../Handlers/orderHandler")
const {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getSubCategoriesHandler,
  getDeliveryZoneHandler,
} = require("../Handlers/tradesHandler");
const {
  validateFeedback,
  validateClient,
  validateOrder,
} = require("../middlewares/validate");
const {
  postFeedbackHandler,
  getFeedbacksHandler,
} = require("../Handlers/feedbacksHandler")

const clientsRouter = Router();

// GET
clientsRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/subcategories", getSubCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/deliveryZone", getDeliveryZoneHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search", getTradesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search", getProductsHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/categories", getProductCategoryHandler); // FUNCIONANDO 12/03
clientsRouter.get("/feedbacks", getFeedbacksHandler);  // FUNCIONANDO 
clientsRouter.get("/order/search", getOrdersHandler); // FUNCIONANDO
clientsRouter.get("/order/search/:orderId", getOrderHandler); // FUNCIONANDO
clientsRouter.get("/clients/search/:id", getClientHandler); // FUNCIONANDO
// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );

// POST
clientsRouter.post("/feedback", validateFeedback, postFeedbackHandler); // FUNCIONANDO 12/03
clientsRouter.post("/register", validateClient, postClientHandler); // FUNCIONANDO
clientsRouter.post("/order/newOrder", validateOrder, createNewOrderHandler); // FUNCIONANDO
// LOGIN AND AUTHENTICATION
clientsRouter.post("/login", login); // FUNCIONANDO
clientsRouter.post("/siginWhitGoogle", registerWhitGoogle); // FUNCIONANDO

// PUT
clientsRouter.put("/update-clients", updateClient);
clientsRouter.put("/update-orders", updateOrder);

// LOGIN AND AUTHENTICATION
clientsRouter.post("/login", login);
clientsRouter.post("/siginWhitGoogle", registerWhitGoogle);

// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );

// clientsRouter.post("/login", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

clientsRouter.get('/confirm-email/:token',confirmEmail)

module.exports = clientsRouter;
