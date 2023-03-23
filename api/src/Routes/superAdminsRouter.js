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
	getProductsByNameHandler,
	putProductsHandler,
	getproductsCategoriesHandler,
} = require("../Handlers/productsHandler");
const {
	postCategoryHandler,
	postTradeHandler,
	putTradeHandler,
	deleteTradeHandler,
	getTradeHandler,
	getTradeByNameHandler,
	postSubcategoryHandler,
	putTradesHandler,
	postDeliveryZoneHandler,
	deleteDeliveryZoneHandler,
	deleteCategoryHandler,
	deleteSubcategoryHandler,
	getCategoryHandler,
	getSubcategoryHandler,
} = require("../Handlers/tradesHandler");
const {
	validateCategory,
	validateTrade,
	validateCategoryProduct,
	validateSubcategory,
	validateDeliveryZone,
	validateProduct,
} = require("../Middlewares/validate");
const {
	getOrderHandler,
	deleteOrderHandler,
	getOrdersHandler,
	putOrderHandler,
} = require("../Handlers/orderHandler");
const {
	getAllClients,
	getClientHandler,
	putClientHandler,
	deleteClientHandler,
} = require("../Handlers/clientsHandler");
const {
	getFeedbacksHandler,
	getFeedbacksByIdHandler,
	deleteAppFeedbacksHandler,
	putFeedbackHandler,
} = require("../Handlers/appFeedbacksHandler");
const {
	getFeedbackHandler,
	deleteTradeFeedbacksHandler,
	putTradeFeedbackHandler,
} = require("../Handlers/tradeFeedbacksHandler");

const superAdminsRouter = Router();
// BASE DE DATOS
superAdminsRouter.post("/create/tradesInDb", tradesInDbHandlers); // OK
superAdminsRouter.post("/create/productsInDb", productsInDbHandlers); // OK

// COMERCIOS
superAdminsRouter.get("/trades/categories", getCategoryHandler); // OK
// Traer todas las subcategorias de cada categoria
superAdminsRouter.get("/trades/subcategories", getSubcategoryHandler); // OK
// Buscar comercios
superAdminsRouter.get("/trades/search", getTradeByNameHandler); // OK
superAdminsRouter.get("/trades/search/:id", getTradeHandler); // OK
// Crear comercios
superAdminsRouter.post("/newTrade", validateTrade, postTradeHandler); // OK
// Crear nueva categoria
superAdminsRouter.post("/newCategory", validateCategory, postCategoryHandler); // OK
// Crear nueva subcategoría
superAdminsRouter.post(
	"/newSubcategory",
	validateSubcategory,
	postSubcategoryHandler
); // OK
// Crear nueva deliveryZone
superAdminsRouter.post(
	"/newDeliveryZone",
	validateDeliveryZone,
	postDeliveryZoneHandler
); // OK
// Modificar comercios:
//	password, active, cualquier otro
superAdminsRouter.put("/updateTrade", putTradeHandler); // OK
// Modificar / Agregar una prop a todos los comercios de la base de datos
superAdminsRouter.put("/updateTrades", putTradesHandler); // OK
// Eliminar comercio
superAdminsRouter.delete("/deleteTrade/:id", deleteTradeHandler); // OK
// Eliminar categoría
superAdminsRouter.delete("/deletecategory", deleteCategoryHandler); // OK
// Eliminar subcategoría
superAdminsRouter.delete("/deletesubcategory", deleteSubcategoryHandler); // OK
// Eliminar deliveryZone
superAdminsRouter.delete("/deleteDeliveryZone", deleteDeliveryZoneHandler); // OK
// Traer todas las categorias

// PRODUCTOS
// Crear productos
superAdminsRouter.post(
	"/newProduct/:tradeId",
	validateProduct,
	postProductHandler
); // OK
// Modificar un producto
superAdminsRouter.put("/updateProduct/:productId", putProductHandler); // OK
// Modificar / Agregar una prop de todos los productos de la base de datos
superAdminsRouter.put("/updateProducts", putProductsHandler); // OK
// Eliminar productos
superAdminsRouter.delete("/deleteproduct/:productId", deleteProductHandler); // OK
// Buscar productos
superAdminsRouter.get("/products/search", getProductsByNameHandler); // OK
// Crear nueva categoría
superAdminsRouter.post(
	"/newCategoryProducts",
	validateCategoryProduct,
	postProductCategoryHandler
); // OK
// Obtener la lista de categorias de productos
superAdminsRouter.get("/products/categories", getproductsCategoriesHandler); // OK

// PEDIDOS
// Buscar pedidos por orden
superAdminsRouter.get("/orders/search", getOrderHandler); // OK
// Eliminar pedido
superAdminsRouter.delete("/deleteorder/:orderId", deleteOrderHandler); // OK
// Buscar historial de pedidos del cliente
superAdminsRouter.get("/orders/search/:clientId", getOrdersHandler); // OK
// Modificar pedidos
superAdminsRouter.put("/order/update/:orderId", putOrderHandler); // OK

// REVIEWS
// Ver reviews de la app
superAdminsRouter.get("/feedbacks/app/search", getFeedbacksHandler); // OK
// Ver una review por id
superAdminsRouter.get("/feedbacks/app/searh/:id", getFeedbacksByIdHandler);
// Eliminar reviews de la app
superAdminsRouter.delete(
	"/deletefeedbacks/app/:feedbackId",
	deleteAppFeedbacksHandler
); // OK
// Deshabilitar/Modificar reviews de la app
superAdminsRouter.put("/updatefeedback/app/:feedbackId", putFeedbackHandler); // OK
// Ver reviews de un comercio
superAdminsRouter.get("/feedbacks/trade/search/:tradeId", getFeedbackHandler); // OK
// Eliminar review de un comercio
superAdminsRouter.delete(
	"/deletefeedbacks/trade/:feedbackId",
	deleteTradeFeedbacksHandler
); // OK
// Deshabilitar/Modificar review de un comercio
superAdminsRouter.put(
	"/updatefeedback/trade/:feedbackId",
	putTradeFeedbackHandler
); // OK

// CLIENTES
// Ver todos los clientes en panel superadmin
superAdminsRouter.get("/all", getAllClients);
// Ver detalle del cliente
superAdminsRouter.get("/client/:clientId", getClientHandler); // OK
// Modificar cliente - Deshabilitar client
superAdminsRouter.put("/updateClient/:clientId", putClientHandler); // OK
// Eliminar
superAdminsRouter.delete("/deleteClient/:clientId", deleteClientHandler); // OK

module.exports = superAdminsRouter;
