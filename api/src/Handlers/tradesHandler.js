const {
  searchTradesByCategory,
  getAllTrades,
  searchTradeById,
  getAllCategories,
} = require("../Controllers/tradesController");

// GET ---------> /trades
const getTradesHandler = async (req, res) => {
  const { category } = req.query;
  try {
    const result = category
      ? await searchTradesByCategory(category)
      : await getAllTrades();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el rubro` });
  }
};

// GET ---------> /trades/:id
const getTradeHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await searchTradeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el comercio` });
  }
};

// GET ----------> /trades/categories
const getCategoriesHandler = async (req, res) => {  
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: `Error al buscar las categorias` });
  }
};

module.exports = {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
};
