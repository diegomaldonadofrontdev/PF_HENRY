const { getTrades } = require("../actions/getTrades");
const { getTradesCategories } = require("../actions/getTradesCategory");
const { getClient } = require("../actions/getClient");
const { getSubCategories } = require("../actions/getTradesSubCategories");
const { getDeliveryZones } = require("../actions/getDeliveryZones");
const { handlerTradesFilter } = require("../actions/handlerTradesFilters");
const { getTradesFilter } = require("../actions/getTradesFilters");
const { getAllProducts } = require("../actions/getAllProducts");
const { postPayment } = require("../actions/postPayment");
const { deleteItemCart } = require("../actions/deleteItemCart");
const { getReviews } = require("../actions/getReviews");
const { getEpagos } = require("../actions/getEpagos");
const { commerceRegister } = require("../actions/commerceRegister");
const { postReview } = require("../actions/postReview");
const { getProductById } = require("../actions/getProductById");
const { getTradesByName } = require("../actions/getTradesByName");
const { getUsers } = require("../actions/getUsers");
const { postProduct } = require("../actions/postProduct");
const { setCarrito } = require("../actions/setCarrito");
const { filterCategoryCommerce } = require("../actions/filterCategoryCommerce");
const { createCarritos } = require("../actions/createCarritos");

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
};
