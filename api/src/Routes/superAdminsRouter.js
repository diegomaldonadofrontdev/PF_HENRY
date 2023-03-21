const { Router } = require("express");
const {
  tradesInDbHandlers,
  productsInDbHandlers,
} = require("../Handlers/superAdminsHandler");
const { postProductCategoryHandler } = require("../Handlers/productsHandler");
const {
  postCategoryHandler,
  postTradeHandler,
  putTradeHandler,
  deleteTradeHandler,
  getTradeHandler,
  getTradeByNameHandler,
  postSubcategoryHandler
} = require("../Handlers/tradesHandler");
const {
  validateCategory,
  validateTrade,
  validateCategoryProduct,
  validateSubcategory,
  validateDeliveryZone
} = require("../Middlewares/validate");

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
// Eliminar comercio
superAdminsRouter.delete("/deleteTrade/:id", deleteTradeHandler); // OK
// Buscar comercios
superAdminsRouter.get("/trades/search", getTradeByNameHandler); // 
superAdminsRouter.get("/trades/search/:id", getTradeHandler); //
// Crear nueva categoria
superAdminsRouter.post("/newCategory", validateCategory, postCategoryHandler); // OK
// Crear nueva subcategoría
superAdminsRouter.post("/newSubcategory", validateSubcategory, postSubcategoryHandler); // OK
// Crear nueva deliveryZone
superAdminsRouter.post("/newDeliveryZone", validateDeliveryZone, postSubcategoryHandler); // OK

// PRODUCTOS
// Crear productos
// Deshabilitar productos
// Modificar productos
// Eliminar productos
// Buscar productos
// Crear nueva categoría
superAdminsRouter.post("/newCategoryProducts", validateCategoryProduct, postProductCategoryHandler); // OK

// PEDIDOS
// Buscar pedidos por orden
// Eliminar pedido
// Filtrado por comercio + recuento y total ganado
// Filtrado por comercio y por fecha
// Link que apunte a la data del usuario

// REVIEWS
// Ver reviews
// Eliminar reviews
// Deshabilitar reviews

// CLIENTES
// Modificar cliente
// Deshabilitar cliente (banneo)
// Historial de compras
// Eliminar

module.exports = superAdminsRouter;
