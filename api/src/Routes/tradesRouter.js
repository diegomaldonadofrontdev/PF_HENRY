const { Router } = require("express");
const {
  getTradeHandler,
  getCategoriesHandler,  
  confirmEmailHandler,
  resetPassword,
  sendMailResetPassword,
  loginTradeHandler
} = require("../Handlers/tradesHandler");
const {
  postProductHandler,
  postProductCategoryHandler,
  getProductsHandler,
  getProductHandler,
  updateProduct,
  updateCategoryProduct,

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
// tradesRouter.get("/membership", getMembershipHandler);

// // POST 

tradesRouter.post("/newProduct", validateProduct, postProductHandler); // FUNCIONANDO
tradesRouter.post("/login", validateLoginTrade, loginTradeHandler); // 
// tradesRouter.post("/new-delivery-zone", validateDeliveryZone, newDeliveryZone);
// tradesRouter.post("/new-subcategory", validateSubcategory, newSubcategory);

// //DELETE
// tradesRouter.delete("/users/:id", validateUsers, deleteUserHandler);
// tradesRouter.delete("/products/:id", validateProducts, deleteProductHandler);

// // PUT
// tradesRouter.put("/users/:id", validateUsers, putUserHandler);
// tradesRouter.put("/products/:id", validateProducts, putProductHandler);
// tradesRouter.put("/update-trade", updateTrade);
tradesRouter.put("/update-product", updateProduct);
// tradesRouter.put("/update-category", updateCategory);
// tradesRouter.put("/update-delivery-zone", updateDeliveryZone);
tradesRouter.put("/update-category-product", updateCategoryProduct);
// tradesRouter.put("/update-subcategory", updateSubcategory);

tradesRouter.get('/confirm-email/:token',confirmEmailHandler) // FUNCIONANDO

tradesRouter.post ('/resetPassword',validateResetPassword,sendMailResetPassword);
tradesRouter.post ('/newPassword/:token',validatePassword,resetPassword);
module.exports = tradesRouter;
