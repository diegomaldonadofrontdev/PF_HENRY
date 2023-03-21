const {  
  getProductById,
  createProduct,
  createProductCategory,
  getAllProductsCategories,
  getAllProducts,
  updateProduct,
  deleteProduct,
  searchProductByName
} = require("../Controllers/productController");


// GETS
const getProductsHandler = async (req,res) => { // FUNCIONANDO
  const {tradeId} = req.query
  try {    
    const products = await getAllProducts(tradeId);
    res.status(200).json( products)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener los productos"})
  }
}

// GET 
const getProductHandler = async (req, res) => { // FUNCIONANDO
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

const getProductByNameHandler = async (req, res) => { // OK
  const {name} = req.body
  const {tradeId} = req.query
  try {
      const find = await searchProductByName(tradeId, name)
      res.status(200).json(find)
  } catch (error) {
      res.status(404).json({Error: error.message})
  }
}

const getProductCategoryHandler = async (req, res) => { // FUNCIONANDO 12/03
  const {tradeId} = req.query
  try {
    const categories = await getAllProductsCategories(tradeId)
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({error: `No se pudieron obtener las categorias de los productos`})
  }
}

const getCategoryProducts = async (req,res) => {
  try {
    const categories = await getCategoriesProducts()
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las categorias"})
  }
}

//POST
const postProductHandler = async (req,res) => { // FUNCIONANDO
  const body = req.body;
  const {tradeId} = req.params
    try {
      await createProduct(tradeId, body);
      res.status(200).json(`Se creo correctamente el producto`);
    } catch (error) {
      res.status(404).json({Error: 'Hubo un problema con el producto '})
    }

}

const postProductCategoryHandler = async (req,res) => { // 
    const {productCategory} = req.body
    const productCat = {name: productCategory}
    try {  
      await createProductCategory(productCat);
      res.status(200).json(`Se creo correctamente la categoria ${productCategory}`);
    } catch (error) {
      res.status(404).json({Error: `Hubo un problema al crear la categoria ${productCategory}`})
    }

}

// PUT
const putProductHandler = async (req, res) => { // FUNCIONANDO
  const {productId} = req.params
  const body = req.body
	try {
		const update = await updateProduct(productId, body)
    if (update) res.status(200).json(`El producto se actualizó correctamente`)
	} catch (error) {
		res.status(404).json({Error: `No se pudo actualizar el producto`})
	}
}

// DELETE
const deleteProductHandler = async (req, res) => { // PROBAR
  const {productId} = req.params
  try {
    const productDeleted = await deleteProduct(productId)
    if (productDeleted) res.status(200).json(`El producto se eliminó correctamente`)
  } catch (error) {
    res.status(404).json({Error: `Se produjo un problema al intentar eliminar el producto`})
  }
}


module.exports = {
  getProductsHandler,
  getProductHandler,
  getProductCategoryHandler,
  postProductHandler,
  postProductCategoryHandler,
  getProductsHandler,
  getCategoryProducts,
  putProductHandler,  
  deleteProductHandler,
  getProductByNameHandler
};
