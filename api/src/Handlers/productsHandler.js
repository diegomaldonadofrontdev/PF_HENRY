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
  postCreateCategoryProduct,
  getProducts,
  getCategoriesProducts,
  updateProductC,
  updateCategoryProductC

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

const getProductsH = async (req,res) => {
  try {
    const products = await getProducts();
    res.status(200).json( products)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener los productos"})
  }
}

const getCategoryProducts = async (req,res) => {
  try {
    const categories = await getCategoriesProducts()
    res.status(200).json( categories)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las categorias"})
  }
}

const updateProduct = async(req, res) => {
  const { id } = req.params;
  const productUpdate = {
    ...req.body,
    user: id
  }
  try {
    const product = await  updateProductC(id,productUpdate)
    res.status(200).json(`Se actualizo El producto`)
  } catch (error) {
    res.status(404).json(`Error al actualizar el producto`)   
  }
}

const updateCategoryProduct = async(req, res) => {
  const { id } = req.params;
  const categoryProductUpdate = {
    ...req.body,
    user: id
  }
  try {
    const categoryProduct = await  updateCategoryProductC(id,categoryProductUpdate)
    res.status(200).json(`Se actualizo la categoria del producto`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la categoria del producto`)   
  }
}




module.exports = {
  getProductsHandler,
  getProductHandler,
  newProduct,
  newCategory,
  getProductsH,
  getCategoryProducts,
  updateProduct,
  updateCategoryProduct
};
