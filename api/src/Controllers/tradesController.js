const { trades } = require("../Auxiliares/comerciantes");
const Trade = require('../models/Trades');
const Category = require('../models/Category');
const DeliveryZone = require('../models/DeliveryZone')
const Subcategory = require('../models/Subcategory');

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

const postCreateTrades = async (body) => {
    try {
    const newTrade = new Trade( body );
    await newTrade.save();
    return true;
    } catch (error) {
      return false;
    }
} 

const postCreateCategory = async ( body ) => {
  try {
    const newCategory = new Category( body);
    await newCategory.save();
    return true
  } catch (error) {
    return false;
  }
}

const postCreateDeliveryZone = async ( body ) => {
  try {
    const newDeliveryZone = new DeliveryZone( body );
    await newDeliveryZone.save();
    return true    
  } catch (error) {
    return false
  }
}

const postCreateSubcategory = async ( body ) => {
  try {
    const newSubcategory = new Subcategory( body );
    await newSubcategory.save();
    return true    
  } catch (error) {
    return false
  }
}

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
  postCreateTrades,
  postCreateCategory,
  postCreateDeliveryZone,
  postCreateSubcategory
};
