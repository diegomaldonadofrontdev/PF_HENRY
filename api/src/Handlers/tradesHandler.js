const {
    getAllTradesFiltered,
    getTradesByCategory,
    getTradesBySubCategory
  } = require("../controllers/productControllers");
  
  // GET ---------> trades/
  const getAllTradesFiltered = async (req, res) => {
    
    const { category } = req.query;
    try {
      const products = name
        ? await searchProdcutByName(name)
        : category
        ? await searchProductByCategory(category)
        : await getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(404).json({ error: `Error al buscar el/los producto/s` });
    }
  };