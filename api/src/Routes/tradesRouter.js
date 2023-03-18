const { Router } = require("express");
const {
  getTradeHandler,
  createTradeHandler,  
  getCategoriesHandler,  
  confirmEmailHandler,
  resetPassword,
  sendMailResetPassword
} = require("../Handlers/tradesHandler");
const {
  newProduct,
  newCategory,
  getProductsHandler,
  getProductHandler,
  updateProduct,
  updateCategoryProduct,

} = require("../Handlers/productsHandler");
const {
  validateTrade,
  validateCategoryProduct,
  validateResetPassword,
  validatePassword
} = require("../Middlewares/validate");
const {
  getFeedbacksHandler
} = require ("../Handlers/tradeFeedbacksHandler")
const {
  getClientHandler
} = require ("../Handlers/clientsHandler")
const {getOrdersHandler} = require ("../Handlers/orderHandler")

const tradesRouter = Router();

// // GET
tradesRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO
tradesRouter.get("/products/search", getProductsHandler); // FUNCIONANDO
tradesRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO
tradesRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO
tradesRouter.get("/feedbacks/search/:tradeId", getFeedbacksHandler); // FUNCIONANDO
tradesRouter.get("/clients/search/:id", getClientHandler);  // FUNCIONANDO
tradesRouter.get("/orders/search", getOrdersHandler);
// tradesRouter.get("/orders/:id", getOrderHandler);
// tradesRouter.get("/membership", getMembershipHandler);

// // POST 
tradesRouter.post("/newTrade", validateTrade, createTradeHandler);
// tradesRouter.post("/users", validateUsers, createUserHandler);
// tradesRouter.post("/products", validateProducts, createProductHandler);
//tradesRouter.post("/new-trade", validateTrade, trade);
tradesRouter.post("/:id/new-product", /*validateProduct, */newProduct);
// tradesRouter.post("/new-category", validateCategory, newCategoryTrade);
// tradesRouter.post("/new-delivery-zone", validateDeliveryZone, newDeliveryZone);
tradesRouter.post("/new-category-products", validateCategoryProduct, newCategory);
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
