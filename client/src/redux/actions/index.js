// Trades
const { getTrades } = require("../actions/getTrades");
const { getTradesByName } = require("../actions/getTradesByName");
const { postNewPasswordTrades } = require('../actions/postNewPasswordTrades')
const { postSendEmailPasswordTrades }= require('../actions/postSendEmailPasswordTrades')
const { deleteTrade } = require("../actions/deleteTrade")

// Categories
const { getTradesCategories } = require("../actions/getTradesCategory");
const {getTradesCategory} = require('../actions/getTradesCategorys')
const {postSubcategory} = require('../actions/postSubcategory')

// SubCategories
const { getSubCategories } = require("../actions/getTradesSubCategories");

// Delivery Zones
const { getDeliveryZones } = require("../actions/getDeliveryZones");

// Epagos
const { getEpagos } = require("../actions/getEpagos");

// Clients
const { getClient } = require("../actions/getClient");
const { postSendEmailPassword } = require("../actions/postSendEmailPassword")
const { postNewPassword }  = require('../actions/postNewPassword')

// Users
const { getUsers } = require("../actions/getUsers");

// Products
const { getAllProducts } = require("../actions/getAllProducts");
const { getProductById } = require("../actions/getProductById");

// Reviews
const { getReviews } = require("../actions/getReviews");

// Filters
const { getTradesFilter } = require("../actions/getTradesFilters");
const { handlerTradesFilter } = require("../actions/handlerTradesFilters");
const { filterCategoryCommerce } = require("../actions/filterCategoryCommerce");

// Forms
const { commerceRegister } = require("../actions/commerceRegister");
const { postProduct } = require("../actions/postProduct");
const { postReview } = require("../actions/postReview");

// Search Product

const { fastProductSearch } = require("../actions/fastProductSearch");

// Cart
const { deleteItemCart } = require("../actions/deleteItemCart");
const { setCarrito } = require("../actions/setCarrito");
const { createCarritos } = require("../actions/createCarritos");
const { postPayment } = require("../actions/postPayment");
const {
	addAmount,
	substractAmount,
} = require("../actions/handlerAmountItemCart");

module.exports = {
	getTrades,
	getTradesCategories,
	getSubCategories,
	getAllProducts,
	getProductById,
	getClient,
	getDeliveryZones,
	getTradesFilter,
	getEpagos,
	getReviews,
	postPayment,
	postReview,
	handlerTradesFilter,
	commerceRegister,
	addAmount,
	substractAmount,
	deleteItemCart,
	getTradesByName,
	getUsers,
	setCarrito,
	filterCategoryCommerce,
	postProduct,
	createCarritos,
	fastProductSearch,
	postSendEmailPassword,
	postNewPassword,
	postNewPasswordTrades,
	postSendEmailPasswordTrades,
	getTradesCategory,
	postSubcategory,
	deleteTrade
};
