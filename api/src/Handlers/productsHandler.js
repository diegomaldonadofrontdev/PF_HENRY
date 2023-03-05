const {
  searchProdcutByName,
  searchProductByNameAndSC,
  searchProductBySubcategory,
  getAllProducts,
  getProductById,
} = require("../Controllers/productController");

// GET ---------> products/
const getProductsHandler = async (req, res) => {
  const { name } = req.query;
  const { subcategory } = req.query;
  try {
    const products = name && subcategory
    ? await searchProductByNameAndSC(name, subcategory)
    : name
      ? await searchProdcutByName(name)
      : category
      ? await searchProductBySubcategory(subcategory)
      : await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el/los producto/s` });
  }
};

// GET --------> products/:id
const getProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
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
