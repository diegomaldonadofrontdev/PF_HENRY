const {Router} = require ("express");
const {
    
} = require("../handlers/")
const { validateProducts, validateUsers } = require("../middlewares/")

const tradesRouter = Router();

// GET
tradesRouter.get("/products", getProductsHandler)
tradesRouter.get("/products/:id", getProductHandler)
tradesRouter.get("/users", getUsersHandler)
tradesRouter.get("/membership", getMembershipHandler)

// POST
tradesRouter.post("/products", validateProducts, createProductHandler)
tradesRouter.post("/users", validateUsers, createProductHandler)

//DELETE
// PUT
// OPTIONS


module.exports = tradesRouter;