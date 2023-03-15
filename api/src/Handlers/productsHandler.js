const {
  searchByNameAndPoductCat,
  searchByProductCat,
  searchByName,
  searchAllProducts,
  searchProductById,
  postCreateProduct,
  getAllProductsCategories
} = require("../Controllers/productController");

const Product = require('../models/Products')

// GET ---------> products/search?tradeId=${tradeId}&productCategory=${category}&productName=${inputName}
const getProductsHandler = async (req, res) => { //FUNCIONANDO 12/03
  const { tradeId, productCategory, productName } = req.query; 
  try {
    if (!tradeId) return `No se recibió el id del comercio`
    const products =
    tradeId && productCategory && productName
    ? await searchByNameAndPoductCat(tradeId, productCategory, productName)
    : tradeId && productCategory
    ? await searchByProductCat(tradeId, productCategory)
    : tradeId && productName
    ? await searchByName(tradeId, productName)
    : await searchAllProducts(tradeId)     
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el/los producto/s` });
  }
};

// GET --------> products/:id
const getProductHandler = async (req, res) => { // FUNCIONANDO 12/03
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

// GET --------> products/categories?tradeId=${tradeId}
const getProductCategoryHandler = async (req, res) => { // FUNCIONANDO 12/03
  const {tradeId} = req.query
  try {
    const categories = await getAllProductsCategories(tradeId)
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({error: `No se pudieron obtener las categorias de los productos`})
  }
}

//POST
const newProduct = async (req,res) => {
  const body = req.body;
  const {id} = req.params
    try {
      const createProduct = await postCreateProduct(id, body);
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

// PUT
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
  getProductCategoryHandler,
  newProduct,
  newCategory,
  getProductsH,
  getCategoryProducts,
  updateProduct,
  updateCategoryProduct,

};
