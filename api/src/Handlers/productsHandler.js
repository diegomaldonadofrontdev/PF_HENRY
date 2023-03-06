const {
  searchProductByAll,
  searchProductByCityAndNameAndCat,
  searchProductByCityAndName,
  searchProductByCity,
  searchProductByNameAndCatAndSC,
  searchProductByNameAndCat,
  searchProdcutByName,
  searchProductByCatAndSC,
  searchProductByCat,
  getAllProducts,
  getProductById,
} = require("../Controllers/productController");

// GET ---------> products/
const getProductsHandler = async (req, res) => {
  const { name, category, subcategory, deliveryCity } = req.query;
  try {
    const products =
      name && category && subcategory && deliveryCity
        ? await searchProductByAll(name, category, subcategory, deliveryCity)
        :name && category && deliveryCity
        ? await searchProductByCityAndNameAndCat(name, category, deliveryCity)
        : name && deliveryCity
        ? await searchProductByCityAndName(name, deliveryCity)
        : deliveryCity
        ? await searchProductByCity(deliveryCity)
        : name && category && subcategory
        ? await searchProductByNameAndCatAndSC(name, category, subcategory)
        : name && category
        ? await searchProductByNameAndCat(name, category)
        : name
        ? await searchProdcutByName(name)
        : category && subcategory
        ? await searchProductByCatAndSC(category, subcategory)
        : category
        ? await searchProductByCat(category)
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
