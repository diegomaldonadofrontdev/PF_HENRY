const {  
  getProductById,
  createProduct,
  createProductCategory,
  getAllProductsCategories,
  getAllProducts,
  updateProduct
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

// GET --------> products/:id
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
const postProductHandler = async (req,res) => { // FUNCIONANDO
  const body = req.body;
  const {id} = req.params
    try {
      await createProduct(id, body);
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


const getCategoryProducts = async (req,res) => {
  try {
    const categories = await getCategoriesProducts()
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las categorias"})
  }
}

// PUT
const putProductHandler = async (req, res) => {
  const {productId} = req.params
  const body = req.body
	try {
		const update = await updateProduct(productId, body)
    if (update) res.status(200).json(`El producto se actualizó correctamente`)
	} catch (error) {
		res.status(404).json({Error: `No se pudo actualizar el producto`})
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
  postProductHandler,
  postProductCategoryHandler,
  getProductsHandler,
  getCategoryProducts,
  putProductHandler,
  updateCategoryProduct,
};
