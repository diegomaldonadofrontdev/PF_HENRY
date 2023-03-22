const { Router } = require("express");
const {
  getTradeHandler,
  getCategoriesHandler,  
  getConfirmEmailHandler,
  postResetPassword,
  postSendMailResetPassword,
  postLoginTradeHandler,
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
// Buscar comercio por id
tradesRouter.get("/trades/search/:id", getTradeHandler); // OK
// Trae un objetos con categorias (se mapea en el front)
tradesRouter.get("/trades/categories", getCategoriesHandler); // OK
// Trae todos los productos de un comercio (id por query)
tradesRouter.get("/products/search", getProductsHandler); // OK
// Detalle de un producto
tradesRouter.get("/products/search/:id", getProductHandler); // OK
// Devuuelve todas las reviews de todos los clientes para un comercio
tradesRouter.get("/feedbacks/search/:tradeId", getFeedbackHandler); // OK
// Busca un cliente por id
tradesRouter.get("/clients/search/:id", getClientHandler);  // OK
// Busca todos los pedidos (historial) de un comercio
tradesRouter.get("/orders/search", getOrdersHandler); // OK
// Devuelve todos los pedidos que no se encuentren en status:entregado (pedidos pendientes)
tradesRouter.get("/orders/actives/:tradeId", getActiveOrdersHandler); // OK

tradesRouter.get('/confirm-email/:token', getConfirmEmailHandler) // OK

// POST 
tradesRouter.post("/newProduct/:tradeId", validateProduct, postProductHandler); // OK
tradesRouter.post("/login", validateLoginTrade, postLoginTradeHandler); // OK
tradesRouter.post ('/resetPassword',validateResetPassword,postSendMailResetPassword);
tradesRouter.post ('/newPassword/:token',validatePassword,postResetPassword);


//DELETE
tradesRouter.delete("/products/:productId", deleteProductHandler);

// PUT
tradesRouter.put("/products/update/:productId", putProductHandler); // OK
tradesRouter.put("/trade/update/:tradeId", putTradeHandler); // OK
tradesRouter.put('/products/reststock', putRestStockHandler)
tradesRouter.put('/products/addstock/:productId', putAddStockHandler)


module.exports = tradesRouter;
