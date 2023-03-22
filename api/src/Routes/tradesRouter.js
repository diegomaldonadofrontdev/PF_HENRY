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
// Verifica si el correo se encuentra en la base y si está verificado. Si no lo está, lo verifica.
tradesRouter.get('/confirm-email/:token', getConfirmEmailHandler) // OK

// POST
// Publicar nuevo producto
tradesRouter.post("/newProduct/:tradeId", validateProduct, postProductHandler); // OK
// Authentication
tradesRouter.post("/login", validateLoginTrade, postLoginTradeHandler); // OK
tradesRouter.post ('/resetPassword',validateResetPassword,postSendMailResetPassword);
tradesRouter.post ('/newPassword/:token',validatePassword,postResetPassword);


//DELETE
// Elimina un producto
tradesRouter.delete("/products/:productId", deleteProductHandler);

// PUT
// Actualizar un producto. Recibe un objeto con lo que se desea modificar ejemplo {price: 300, active: true}
tradesRouter.put("/products/update/:productId", putProductHandler); // OK
// Actualizar datos del comercio
tradesRouter.put("/trade/update/:tradeId", putTradeHandler); // OK
// Resta el stock de un producto (recibe carrito.data)
tradesRouter.put('/products/reststock', putRestStockHandler)
// Suma stock. Recibe el numero a sumar.
tradesRouter.put('/products/addstock/:productId', putAddStockHandler)


module.exports = tradesRouter;
