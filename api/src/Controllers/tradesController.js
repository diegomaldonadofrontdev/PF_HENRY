const { trades } = require("../Auxiliares/comerciantes");

const getAllTrades = () => {
  const allTrades = trades;
  return allTrades;
};

const searchTradesByCategory = (category) => {
  const tradesfilt = trades.find((trade) => trade.category === category);
  return tradesfilt.comercios;
};

const searchTradesBySubCategory = (category, subcategory) => {
  const tradesByCategory = searchTradesByCategory(category);
  const tradesBySubcategories = tradesByCategory.filter(
    (t) => t.subcategory === subcategory
  );
  return tradesBySubcategories;
};

const searchTradesByCityAndCatAndSC = (deliveryCity, category, subcategory) => {
  const firstFilter = searchTradesBySubCategory(category, subcategory);
  return firstFilter.filter((t) => t.deliveryzone.includes(deliveryCity));
};

const searchTradesByCityAndCat = (deliveryCity, category) => {
  const firstFilter = searchTradesByCategory(category);
  return firstFilter.filter((t) => t.deliveryzone.includes(deliveryCity));
};

const searchTradesByCity = (deliveryCity) => {
  const tradeByCity = [];
  for (let i = 0; i < trades.length; i++) {
    for (let j = 0; j < trades[i].comercios.length; j++) {
      if (trades[i].comercios[j].deliveryzone.includes(deliveryCity)) {
        tradeByCity.push(trades[i].comercios[j]);
      }
    }
  }
  return tradeByCity;
};

const searchTradeById = (id) => {
  var result = [];
  for (let i = 0; i < trades.length; i++) {
    for (let j = 0; j < trades[i].comercios.length; j++) {
      if (trades[i].comercios[j].id == id) result.push(trades[i].comercios[j]);
    }
  }
  if (result.length) {
    return result;
  } else return "Lo sentimos, el comercio no está disponible.";
};

const getAllCategories = () => {
  let categories = [];
  for (let i = 0; i < trades.length; i++) {
    categories.push(trades[i].category);
  }
  return categories;
};

const getSubCategories = (category) => {
  const tradesByCategory = searchTradesByCategory(category);
  const subcategories = [];
  for (let i = 0; i < tradesByCategory.length; i++) {
    subcategories.push(tradesByCategory[i].subcategory);
  }
  return subcategories;
};

module.exports = {
  searchTradesByCityAndCatAndSC,
  searchTradesByCityAndCat,
  searchTradesByCity,
  searchTradesByCategory,
  getAllTrades,
  searchTradeById,
  getAllCategories,
  getSubCategories,
  searchTradesBySubCategory,
};
