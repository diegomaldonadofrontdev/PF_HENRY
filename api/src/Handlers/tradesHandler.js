const {
  searchTradesByItem,
  getAllTrades,
  searchTradeById,
} = require("../Controllers/tradesController");

// GET ---------> trades/
const getTradesHandler = async (req, res) => {
  const { item } = req.query;
  try {
    const result = item ? await searchTradesByItem(item) : await getAllTrades();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el rubro` });
  }
};

const getTradeHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await searchTradeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el comercio` });
  }
};

module.exports = {
  getTradesHandler,
  getTradeHandler,
};
