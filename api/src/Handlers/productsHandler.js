const {
  searchProductsByNameAndPoductCat,
  searchProductsByProductCat,
  searchProductByName,
  searchAllProducts,
  searchProductById,
  postCreateProduct
} = require("../Controllers/productController");

const Product = require('../models/Products')

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

const newProduct = async (req,res) => {
    try {
      const createProduct = await postCreateProduct(req.body);
      res.status(200).json(`Se creo correctamente el producto`);
    } catch (error) {
      res.status(404).json({Error: 'Hubo un problema con el producto '})
    }

}

const newCategory = async (req,res) => {
    try {
  
      const createCategory = await postCreateCategoryProduct(req.body);
      
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
