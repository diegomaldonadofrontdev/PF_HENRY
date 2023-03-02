const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler,
  createProductHandler,
} = require("../handlers/productsHandler");
const {
        getUsersHandler,
        getUserHandler,
        createUserHandler
} = require ("../Handlers/usersHandlers")
const { validateProducts, validateUsers } = require("../middlewares/validate");


const tradesRouter = Router();

// GET
tradesRouter.get("/products", getProductsHandler);
tradesRouter.get("/products/:id", getProductHandler);
tradesRouter.get("/users", getUsersHandler);
tradesRouter.get("/users/:id", getUserHandler);
tradesRouter.get("/membership", getMembershipHandler);

// POST
tradesRouter.post("/products", validateProducts, createProductHandler);
tradesRouter.post("/users", validateUsers, createUserHandler);

//DELETE
tradesRouter.delete("/users/:id", validateUsers, deleteUserHandler);
tradesRouter.delete("/products/:id", validateProducts, deleteProductHandler);

// PUT
tradesRouter.put("/users/:id", validateUsers, putUserHandler);
tradesRouter.put("/products/:id", validateProducts, putProductHandler);


module.exports = tradesRouter;
