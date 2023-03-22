const { Router } = require("express");
const {
  getTradeHandler,
  getCategoriesHandler,  
  confirmEmailHandler,
  resetPassword,
  sendMailResetPassword,
  loginTradeHandler,
  putTradeHandler,  
} = require("../Handlers/tradesHandler");
const {
  postProductHandler,
  getProductsHandler,
  getProductHandler,
  putProductHandler,
  deleteProductHandler,
  putRestStockHandler,
  putAddStockHandler
} = require("../Handlers/productsHandler");
const {
  validateProduct,  
  validateResetPassword,
  validatePassword,
  validateLoginTrade
} = require("../Middlewares/validate");
const {
  getFeedbackHandler
} = require ("../Handlers/tradeFeedbacksHandler")
const {
  getClientHandler
} = require ("../Handlers/clientsHandler")
const {
  getOrdersHandler, 
  getActiveOrdersHandler
} = require ("../Handlers/orderHandler")

const tradesRouter = Router();

// GET
tradesRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO
tradesRouter.get("/products/search", getProductsHandler); // FUNCIONANDO
tradesRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO
tradesRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO
tradesRouter.get("/feedbacks/search/:tradeId", getFeedbackHandler); // FUNCIONANDO
tradesRouter.get("/clients/search/:id", getClientHandler);  // FUNCIONANDO
tradesRouter.get("/orders/search", getOrdersHandler); // FUNCIONANDO
tradesRouter.get("/orders/actives/:tradeId", getActiveOrdersHandler); // FUNCIONANDO
tradesRouter.get('/confirm-email/:token',confirmEmailHandler) // FUNCIONANDO

// POST 
tradesRouter.post("/newProduct/:tradeId", validateProduct, postProductHandler); // OK
tradesRouter.post("/login", validateLoginTrade, loginTradeHandler); // OK
tradesRouter.post ('/resetPassword',validateResetPassword,sendMailResetPassword);
tradesRouter.post ('/newPassword/:token',validatePassword,resetPassword);


// //DELETE
tradesRouter.delete("/products/:productId", deleteProductHandler);

// // PUT
tradesRouter.put("/products/update/:productId", putProductHandler); // OK
tradesRouter.put("/trade/update/:tradeId", putTradeHandler); // OK
tradesRouter.put('/products/reststock', putRestStockHandler)
tradesRouter.put('/products/addstock/:productId', putAddStockHandler)


module.exports = tradesRouter;
