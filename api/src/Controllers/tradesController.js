const { trades } = require("../Auxiliares/comerciantes");

const searchTradesByItem = () => {
  const tradesfilt = trades.filter((t) => t.item === item);
  return tradesfilt;
};

const getAllTrades = () => {
  const allTrades = trades.item;
  return allTrades;
};

const searchTradeById = (id) => {
  const result = []
  const tradeById = trades.item.map(i.map((t) => t.id === id ? result.push(t) : null));
  return result;
};

module.exports = {
  searchTradesByItem,
  getAllTrades,
  searchTradeById,
};
