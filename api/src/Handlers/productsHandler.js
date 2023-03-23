const {  
  getProductById,
  getCategoriesProducts,
  getAllProductsCategories,
  getAllProducts,
  searchProductByName,
  createProduct,
  createProductCategory,
  updateProduct,
  updateProducts,
  updateStock,
  addStock,
  deleteProduct,
  searchProductsByName
} = require("../Controllers/productController");

// GETS
// 
const getProductsHandler = async (req,res) => { // OK.
  const {tradeId} = req.query
  try {    
    const products = await getAllProducts(tradeId);
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}

// GET 
const getProductHandler = async (req, res) => { // OK.
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(404)
      .json({ error: error.message });
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

const getProductsByNameHandler = async (req, res) => { // 
  const {name} = req.query
  try {
      const find = await searchProductsByName(name)
      res.status(200).json(find)
  } catch (error) {
      res.status(404).json({Error: error.message})
  }
}

const getProductCategoryHandler = async (req, res) => { // OK.
  const {tradeId} = req.query
  try {
    const categories = await getAllProductsCategories(tradeId)
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}

const getproductsCategoriesHandler = async (req, res) => { // OK
	try {
		const categories = await getCategoriesProducts();
		res.status(200).json(categories);
	} catch (error) {
		res.status(404).json({ Error: "Error al obtener las categorias" });
	}
};

//POST
const postProductHandler = async (req, res) => {	// OK.
	const body = req.body;
	const { tradeId } = req.params;
	try {
		const product = await createProduct(tradeId, body);
		res.status(200).send(product);
	} catch (error) {
		res.status(404).json({ Error: error.message });
	}
};

const postProductCategoryHandler = async (req, res) => { // OK	
	const { productCategory } = req.body;
	const productCat = { name: productCategory };
	try {
		const newCat = await createProductCategory(productCat);
		res.status(200).json(newCat);
  	} catch (error) {
		res.status(404).json({Error: error.message});
	}
};

// PUT
const putProductHandler = async (req, res) => { // OK.
  const {productId} = req.params
  const body = req.body
	try {
		const update = await updateProduct(productId, body);
		res.status(200).json(update);
	} catch (error) {
		res.status(404).json({ Error: error.message });
	}
};

const putProductsHandler = async (req, res) => { // OK
  const body = req.body
	try {
		const update = await updateProducts(body);
		res.status(200).json(update);
	} catch (error) {
		res.status(404).json({ Error: error.message });
	}
};

const putRestStockHandler = async (req, res) => { // OK.
const products = req.body
try {
  for (let i = 0; i < products.length; i++) {
    const descount = await updateStock(products[i].id, products[i].cantidad)
    if(!descount) res.status(200).json(`Uno o mas productos no se actualizaron.`)
  }
  res.status(200).json(`Los stocks han sido actualizados exitosamente!`)
} catch (error) {
  res.status(404).json({Error: error.message})
}
}

const putAddStockHandler = async (req, res) => { // OK.
  const {newStock} = req.body
  const {productId} = req.params
  try {   
      const update = await addStock(productId, newStock)    
    res.status(200).json(update)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
  }


// DELETE
const deleteProductHandler = async (req, res) => {	// OK.
  const {productId} = req.params
	try {
		const productDeleted = await deleteProduct(productId);		
			res.status(200).json(productDeleted);
	} catch (error) {
		res.status(404).json({Error: error.message});
	}
};



module.exports = {
  getProductsHandler,
  getProductHandler,
  getProductCategoryHandler,
  postProductHandler,
  postProductCategoryHandler,
  getProductsHandler,
  getproductsCategoriesHandler,
  putProductHandler,  
  deleteProductHandler,
  getProductByNameHandler,
  putProductsHandler,
  putRestStockHandler,
  putAddStockHandler,
  getProductsByNameHandler
};
