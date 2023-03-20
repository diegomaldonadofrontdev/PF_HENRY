const { Router } = require("express");
const {
  getTradeHandler,
  getCategoriesHandler,  
  confirmEmailHandler,
  resetPassword,
  sendMailResetPassword,
  loginTradeHandler,
  putTradeHandler
} = require("../Handlers/tradesHandler");
const {
  postProductHandler,
  getProductsHandler,
  getProductHandler,
  putProductHandler,
} = require("../Handlers/productsHandler");
const {
  validateProduct,  
  validateResetPassword,
  validatePassword,
  validateLoginTrade
} = require("../Middlewares/validate");
const {
  getFeedbacksHandler
} = require ("../Handlers/tradeFeedbacksHandler")
const {
  getClientHandler
} = require ("../Handlers/clientsHandler")
const {
  getOrdersHandler, 
  getActiveOrdersHandler
} = require ("../Handlers/orderHandler")

const tradesRouter = Router();

// // GET
tradesRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO
tradesRouter.get("/products/search", getProductsHandler); // FUNCIONANDO
tradesRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO
tradesRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO
tradesRouter.get("/feedbacks/search/:tradeId", getFeedbacksHandler); // FUNCIONANDO
tradesRouter.get("/clients/search/:id", getClientHandler);  // FUNCIONANDO
tradesRouter.get("/orders/search", getOrdersHandler); // FUNCIONANDO
tradesRouter.get("/orders/actives/:tradeId", getActiveOrdersHandler); // FUNCIONANDO


// // POST 
tradesRouter.post("/newProduct", validateProduct, postProductHandler); // FUNCIONANDO
tradesRouter.post("/login", validateLoginTrade, loginTradeHandler); // 


// //DELETE
// tradesRouter.delete("/users/:id", validateUsers, deleteUserHandler);
// tradesRouter.delete("/products/:id", validateProducts, deleteProductHandler);

// // PUT
tradesRouter.put("/products/update/:productId", putProductHandler);
tradesRouter.put("/trade/update/:tradeId", putTradeHandler);
// tradesRouter.put("/users/:id", validateUsers, putUserHandler);
// tradesRouter.put("/products/:id", validateProducts, putProductHandler);
// tradesRouter.put("/update-category", updateCategory);
// tradesRouter.put("/update-delivery-zone", updateDeliveryZone);
// tradesRouter.put("/update-subcategory", updateSubcategory);

tradesRouter.get('/confirm-email/:token',confirmEmailHandler) // FUNCIONANDO

tradesRouter.post ('/resetPassword',validateResetPassword,sendMailResetPassword);
tradesRouter.post ('/newPassword/:token',validatePassword,resetPassword);
module.exports = tradesRouter;
