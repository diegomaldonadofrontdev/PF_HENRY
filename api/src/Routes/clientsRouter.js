const { Router } = require("express");
const {
	getProductsHandler,
	getProductHandler,
	getProductCategoryHandler,
} = require("../Handlers/productsHandler");
const {
	postClientHandler,
	getClientHandler,
	putClientHandler,
	postClientLogin,
	postRegisterClientWhitGoogle,
	getConfirmEmailHandler,
	postSendMailResetPassword,
	postResetClientPassword,
} = require("../Handlers/clientsHandler");
const {
	getOrdersHandler,
	getOrderHandler,
	postNewOrderHandler,
} = require("../Handlers/orderHandler");
const {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
	getDeliveryZoneHandler,
} = require("../Handlers/tradesHandler");
const {
	validateAppFeedback,
	validateTradeFeedback,
	validateClient,
	validateOrder,
	validateResetPassword,
	validatePassword,
	validateClientLogin
} = require("../Middlewares/validate");
const {
	postFeedbackHandler,
	getFeedbacksHandler,
} = require("../Handlers/appFeedbacksHandler");
const { postFeedbacksHandler } = require("../Handlers/tradeFeedbacksHandler");

const clientsRouter = Router();

// GET
// Obtener lista de categorias de comercios activos
clientsRouter.get("/trades/categories", getCategoriesHandler); // OK
// Obtener lista de subcategorias de las categorias de los comercios activos
clientsRouter.get("/trades/subcategories", getSubCategoriesHandler); // OK
// Obtener lista de zonas de delivery de los comercios activos (filtros por query)
clientsRouter.get("/trades/deliveryZone", getDeliveryZoneHandler); // OK
// Busca comercios activos con filtros activos combinados
clientsRouter.get("/trades/search", getTradesHandler); // OK
// Devuelve comercio completo buscado por id
clientsRouter.get("/trades/search/:id", getTradeHandler); // OK
// Busca todos los productos activos de un comercio (filtrado en front)
clientsRouter.get("/products/search", getProductsHandler); // OK
// Devuelve producto completo buscado por id
clientsRouter.get("/products/search/:id", getProductHandler); // OK
// Obtener lista de categorias de los productos activos de un comercio
clientsRouter.get("/products/categories", getProductCategoryHandler); // OK
// Devuelve todos los feedbacks hechos a la aplicación
clientsRouter.get("/app/feedbacks", getFeedbacksHandler); // OK
// Devuelve el historial de pedidos tanto para un cliente como para un comercio (id's por query)
clientsRouter.get("/order/search", getOrdersHandler); // OK
// Devuelve el detalle de un pedido
clientsRouter.get("/order/search/:orderId", getOrderHandler); // OK
// Busca cliente por id
clientsRouter.get("/clients/search/:id", getClientHandler); // OK
// Comprueba si el mail ya se encuentra registrado. Si lo encuentra, activa su verificacion y le envia un correo al cliente.
clientsRouter.get("/confirm-email/:token", getConfirmEmailHandler); // OK

// POST
// Publicar review de la aplicacion
clientsRouter.post("/feedback", validateAppFeedback, postFeedbackHandler); // OK
// Registro de clientes. Verifica si el cliente ya existe y si no, lo crea y le envia un correo.
clientsRouter.post("/register", validateClient, postClientHandler); // OK
// Hacer nuevo pedido
clientsRouter.post("/order/newOrder", validateOrder, postNewOrderHandler); // OK
// Publicar una review de un comercio
clientsRouter.post("/trades/feedback", validateTradeFeedback, postFeedbacksHandler); // OK
// LOGIN AND AUTHENTICATION
clientsRouter.post("/login", validateClientLogin, postClientLogin); // OK
clientsRouter.post("/siginWhitGoogle", postRegisterClientWhitGoogle); // OK
clientsRouter.post("/resetPassword", validateResetPassword,	postSendMailResetPassword);
clientsRouter.post("/newPassword/:token", validatePassword, postResetClientPassword);

// PUT
// Actualizar un cliente (mi perfil)
clientsRouter.put("/update/:clientId", putClientHandler); // OK



module.exports = clientsRouter;
