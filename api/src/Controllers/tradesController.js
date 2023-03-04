const { trades } = require("../Auxiliares/comerciantes");

const searchTradesByItem = (item) => {
  const tradesfilt = trades.filter((t) => t.item === item);
  return tradesfilt.comercios;
};

const getAllTrades = () => {
  const allTrades = trades;
  return allTrades;
};

const searchTradeById = (id) => {
  const result = [];
  for (let i = 0; i < trades.length; i++) {
    for (let j = 0; j < trades[i].comercios.length; j++) {
      if (trades[i].comercios[j].id === id) result.push(trades[i].comercios[j]);
    }
  }
  if (result.length) {
    return result;
  } else return "Lo sentimos, el comercio no está disponible.";
};

const getAllCategories = () => {
  
}

module.exports = {
  searchTradesByItem,
  getAllTrades,
  searchTradeById,
};
