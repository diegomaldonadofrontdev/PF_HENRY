const {
  searchProductsByNameAndPoductCat,
  searchProductsByProductCat,
  searchProductByName,
  searchAllProducts,
  searchProductById
} = require("../Controllers/productController");

// GET ---------> products/
const getProductsHandler = async (req, res) => {
  const { tradeId, productCategry, productName } = req.query;
  try {
    const products =
    tradeId & productCategry & productName
    ? await searchProductsByNameAndPoductCat(tradeId, productCategry, productName)
    : tradeId & productCategry
    ? await searchProductsByProductCat(tradeId, productCategry)
    : tradeId & productName
    ? await searchProductByName(tradeId, productName)
    : await searchAllProducts(tradeId)     
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el/los producto/s` });
  }
};

// GET --------> products/:id
const getProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await searchProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(404)
      .json({ error: `No se pudo mostrar el producto especificada` });
  }
};

module.exports = {
  getProductsHandler,
  getProductHandler,
};
