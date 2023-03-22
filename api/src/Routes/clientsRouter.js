const { Router } = require("express");
const {
	getProductsHandler,
	getProductHandler,
	getProductCategoryHandler,
} = require("../Handlers/productsHandler");
const {
	postClientHandler,
	getClientHandler,
	updateClientHandler,
	login,
	registerWhitGoogle,
	confirmEmailHandler,
	sendMailResetPassword,
	resetPassword,
} = require("../Handlers/clientsHandler");
const {
	getOrdersHandler,
	getOrderHandler,
	postNewOrderHandler,
	updateOrderHandler,
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
clientsRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/subcategories", getSubCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/deliveryZone", getDeliveryZoneHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search", getTradesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search", getProductsHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/categories", getProductCategoryHandler); // FUNCIONANDO 12/03
clientsRouter.get("/app/feedbacks", getFeedbacksHandler); // FUNCIONANDO
clientsRouter.get("/order/search", getOrdersHandler); // FUNCIONANDO
clientsRouter.get("/order/search/:orderId", getOrderHandler); // FUNCIONANDO
clientsRouter.get("/clients/search/:id", getClientHandler); // FUNCIONANDO
clientsRouter.get("/confirm-email/:token", confirmEmailHandler); // FUNCIONANDO

// POST
clientsRouter.post("/feedback", validateAppFeedback, postFeedbackHandler); // FUNCIONANDO 12/03
clientsRouter.post("/register", validateClient, postClientHandler); // FUNCIONANDO
clientsRouter.post("/order/newOrder", validateOrder, postNewOrderHandler); // FUNCIONANDO
clientsRouter.post(
	"/trades/feedback",
	validateTradeFeedback,
	postFeedbacksHandler
); // FUNCIONANDO
// LOGIN AND AUTHENTICATION
clientsRouter.post("/login", validateClientLogin postClientLogin); // OK
clientsRouter.post("/siginWhitGoogle", postRegisterClientWhitGoogle); // OK
clientsRouter.post("/resetPassword", validateResetPassword,	postSendMailResetPassword);
clientsRouter.post("/newPassword/:token", validatePassword, postResetClientPassword);

// PUT
clientsRouter.put("/update/:clientId", updateClientHandler); // FUNCIONANDO
clientsRouter.put("/order/update/:orderId", updateOrderHandler);


module.exports = clientsRouter;
