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
  postCreateProduct,
  postCreateCategoryProduct

} = require("../Controllers/productController");

const Product = require('../models/Products')

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

const newProduct = async (req,res) => {
    try {
      const createProduct = await postCreateProduct(req.body);
      if (createProduct) 
      res.status(200).json(`Se creo correctamente el producto`);
    } catch (error) {
      res.status(404).json({Error: 'Hubo un problema con el producto '})
    }

}

const newCategory = async (req,res) => {
    try {
  
      const createCategory = await postCreateCategoryProduct(req.body);
      if (createCategory) 
      res.status(200).json(`Se creo correctamente la categoria`);
    } catch (error) {
      res.status(404).json({Error: 'Hubo un problema con la categoria '})
    }

}

module.exports = {
  getProductsHandler,
  getProductHandler,
  newProduct,
  newCategory
};
