const {  
  getProductById,
  createProduct,
  createProductCategory,
  getAllProductsCategories,
  getAllProducts,
  updateProduct,
  deleteProduct,
  searchProductByName,
  updateProducts,
  updateStock,
  addStock
} = require("../Controllers/productController");

// GETS
// 
const getProductsHandler = async (req,res) => { // OK.
  const {tradeId} = req.query
  try {    
    const products = await getAllProducts(tradeId);
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener los productos"})
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

const getProductCategoryHandler = async (req, res) => { // OK.
  const {tradeId} = req.query
  try {
    const categories = await getAllProductsCategories(tradeId)
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({error: `No se pudieron obtener las categorias de los productos`})
  }
}

const getCategoryProducts = async (req, res) => { // OK
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
		res.status(404).json({ Error: "Hubo un problema con el producto " });
	}
};

const postProductCategoryHandler = async (req, res) => { // OK	
	const { productCategory } = req.body;
	const productCat = { name: productCategory };
	try {
		await createProductCategory(productCat);
		res
			.status(200)
			.json(`Se creo correctamente la categoria ${productCategory}`);
	} catch (error) {
		res.status(404).json({
			Error: `Hubo un problema al crear la categoria ${productCategory}`,
		});
	}
};

// PUT
const putProductHandler = async (req, res) => { // OK.
  const {productId} = req.params
  const body = req.body
	try {
		const update = await updateProduct(productId, body);
		if (update) res.status(200).json(`El producto se actualizó correctamente`);
	} catch (error) {
		res.status(404).json({ Error: `No se pudo actualizar el producto` });
	}
};

const putProductsHandler = async (req, res) => { // OK
  const body = req.body
	try {
		const update = await updateProducts(body);
		if (update) res.status(200).json(update);
	} catch (error) {
		res.status(404).json({ Error: `No se pudo actualizar el producto` });
	}
};

const putRestStockHandler = async (req, res) => { // OK.
const products = req.body
try {
  for (let i = 0; i < products.length; i++) {
    await updateStock(products[i].id, products[i].cantidad)
  }
  res.status(200).json(`Los stocks han sido actualizados exitosamente!`)
} catch (error) {
  res.status(404).json({Error: `Error al modificar el stock`})
}
}

const putAddStockHandler = async (req, res) => { // OK.
  const {newStock} = req.body
  const {productId} = req.params
  try {   
      const update = await addStock(productId, newStock)    
    res.status(200).json(update)
  } catch (error) {
    res.status(404).json({Error: `Error al modificar el stock`})
  }
  }


// DELETE
const deleteProductHandler = async (req, res) => {	// OK.
  const {productId} = req.params
	try {
		const productDeleted = await deleteProduct(productId);
		if (productDeleted)
			res.status(200).json(`El producto se eliminó correctamente`);
	} catch (error) {
		res.status(404).json({
			Error: `Se produjo un problema al intentar eliminar el producto`,
		});
	}
};



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
  getProductByNameHandler,
  putProductsHandler,
  putRestStockHandler,
  putAddStockHandler
};
