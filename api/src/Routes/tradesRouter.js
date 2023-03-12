const { Router } = require("express");
const {
  getTradesHandler,
} = require("../Handlers/tradesHandler");
const {
  newProduct,
  newCategory,
  getCategoryProducts,
  getProductsH,
  updateProduct,
  updateCategoryProduct,
} = require("../Handlers/productsHandler");
const {
  validateTrade,
  validateProduct,
  validateCategory,
  validateDeliveryZone,
  validateCategoryProduct,
  validateSubcategory,
} = require("../Middlewares/validate");
// const {
//   getProductsHandler,
//   getProductHandler,
//   createProductHandler,
//   deleteProductHandler,
//   putProductHandler,
// } = require("../handlers/productsHandler");
// const {
//   getUsersHandler,
//   getUserHandler,
//   createUserHandler,
//   deleteUserHandler,
//   putUserHandler,
// } = require("../Handlers/usersHandlers");
// const { validateProducts, validateUsers, validateTrades } = require("../middlewares/validate");

const tradesRouter = Router();

// // GET
tradesRouter.get("/trades/search", getTradesHandler);
tradesRouter.get("/products", getProductsH);
tradesRouter.get("/categories-products", getCategoryProducts);
// tradesRouter.get("/products", getProductsHandler);
// tradesRouter.get("/products/:id", getProductHandler);
// tradesRouter.get("/users", getUsersHandler);
// tradesRouter.get("/users/:id", getUserHandler);
// tradesRouter.get("/orders", getOrdersHandler);
// tradesRouter.get("/orders/:id", getOrderHandler);
// tradesRouter.get("/membership", getMembershipHandler);

// // POST
// tradesRouter.post("/trades", validateTrades, createTradeHandler);
// tradesRouter.post("/users", validateUsers, createUserHandler);
// tradesRouter.post("/products", validateProducts, createProductHandler);
// tradesRouter.post("/new-trade", /*validateTrade, */trade);
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



module.exports = tradesRouter;
