const { Router } = require("express");
const {
  tradesInDbHandlers,
  productsInDbHandlers,
} = require("../Handlers/superAdminsHandler");
const { 
    postProductCategoryHandler,
    postProductHandler,
    putProductHandler,
    deleteProductHandler,
    getProductByNameHandler,
    putProductsHandler
 } = require("../Handlers/productsHandler");
const {
  postCategoryHandler,
  postTradeHandler,
  putTradeHandler,
  deleteTradeHandler,
  getTradeHandler,
  getTradeByNameHandler,
  postSubcategoryHandler,
  putTradesHandler
} = require("../Handlers/tradesHandler");
const {
  validateCategory,
  validateTrade,
  validateCategoryProduct,
  validateSubcategory,
  validateDeliveryZone,
  validateProduct
} = require("../Middlewares/validate");
const {
    getOrderHandler,
    deleteOrderHandler,
    getOrdersHandler
} = require ("../Handlers/orderHandler")
const {
  getClientHandler,
  updateClientHandler,
  deleteClientHandler
} = require ("../Handlers/clientsHandler")

const superAdminsRouter = Router();
// BASE DE DATOS
superAdminsRouter.post("/create/tradesInDb", tradesInDbHandlers); // OK
superAdminsRouter.post("/create/productsInDb", productsInDbHandlers); // OK

// COMERCIOS
// Crear comercios
superAdminsRouter.post("/newTrade", validateTrade, postTradeHandler); // OK
// Modificar comercios:
//	password, active, cualquier otro
superAdminsRouter.put("/updateTrade", putTradeHandler); // OK
// Modificar / Agregar una prop a todos los comercios de la base de datos
superAdminsRouter.put("/updateTrades", putTradesHandler) // OK
// Eliminar comercio
superAdminsRouter.delete("/deleteTrade/:id", deleteTradeHandler); // OK
// Buscar comercios
superAdminsRouter.get("/trades/search", getTradeByNameHandler); // OK
superAdminsRouter.get("/trades/search/:id", getTradeHandler); // OK
// Crear nueva categoria
superAdminsRouter.post("/newCategory", validateCategory, postCategoryHandler); // OK
// Crear nueva subcategoría
superAdminsRouter.post("/newSubcategory", validateSubcategory, postSubcategoryHandler); // OK
// Crear nueva deliveryZone
superAdminsRouter.post("/newDeliveryZone", validateDeliveryZone, postSubcategoryHandler); // OK

// PRODUCTOS
// Crear productos
superAdminsRouter.post("/newProduct/:tradeId", validateProduct, postProductHandler) // OK
// Modificar un producto
superAdminsRouter.put("/updateProduct/:productId", putProductHandler) // OK
// Modificar / Agregar una prop de todos los productos de la base de datos
superAdminsRouter.put("/updateProducts", putProductsHandler) // OK
// Eliminar productos
superAdminsRouter.delete("/deleteproduct/:productId", deleteProductHandler); // OK
// Buscar productos
superAdminsRouter.get("/products/search", getProductByNameHandler); // OK
// Crear nueva categoría
superAdminsRouter.post("/newCategoryProducts", validateCategoryProduct, postProductCategoryHandler); // OK

// PEDIDOS
// Buscar pedidos por orden
superAdminsRouter.get("/orders/search", getOrderHandler); // OK
// Eliminar pedido
superAdminsRouter.delete("/deleteorder/:orderId", deleteOrderHandler); // OK
// Buscar historial de pedidos del cliente 
superAdminsRouter.get("/orders/search/:clientId", getOrdersHandler); // OK

// REVIEWS
// Ver reviews
// Eliminar reviews
// Deshabilitar reviews

// CLIENTES
// Ver detalle del cliente
superAdminsRouter.get("/client/:clientId", getClientHandler); // OK
// Modificar cliente - Deshabilitar client
superAdminsRouter.put("/updateClient/:clientId", updateClientHandler) // OK
// Eliminar
superAdminsRouter.delete("/deleteClient/:clientId", deleteClientHandler); // OK

module.exports = superAdminsRouter;
