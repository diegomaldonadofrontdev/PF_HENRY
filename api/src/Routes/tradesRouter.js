// const { Router } = require("express");
// const { createTradeHandler } = require("../handlers/tradesHandler");
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

// const tradesRouter = Router();

// // GET
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

// //DELETE
// tradesRouter.delete("/users/:id", validateUsers, deleteUserHandler);
// tradesRouter.delete("/products/:id", validateProducts, deleteProductHandler);

// // PUT
// tradesRouter.put("/users/:id", validateUsers, putUserHandler);
// tradesRouter.put("/products/:id", validateProducts, putProductHandler);

// module.exports = tradesRouter;
