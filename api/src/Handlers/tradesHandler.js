const {
  searchProductosByCityAndCatAndSCCAndEpagos,
  searchProductByCityAndCatAndEpagos,
  searchTradesByCityAndCatAndSC,
  searchTradesByCityAndCat,
  searchTradesByCity,
  getAllTrades,
  searchTradeById,
  getAllCategories,
  getSubCategories,
  postCreateTrades,
  postCreateCategory,
  postCreateDeliveryZone,
  postCreateSubcategory,
  getTrades,
  getCategories,
  getDeliveryZone,
  getSubCategoriesController,
  updateTradeC,
  updateCategoryC,
  updateDeliveryC,
  updateSubcategoryC
} = require("../Controllers/tradesController");



// GET ---------> /trades/search
const getTradesHandler = async (req, res) => {
  const { deliveryCity, category, subcategory, epagos } = req.query;
  try {
    const result =  
    deliveryCity && category && subcategory && epagos
        ? await searchProductosByCityAndCatAndSCCAndEpagos (deliveryCity, category, subcategory, epagos)
        : deliveryCity && category && subcategory
        ? await searchTradesByCityAndCatAndSC(deliveryCity, category, subcategory)
        : deliveryCity && category && epagos
        ? await searchProductByCityAndCatAndEpagos (deliveryCity, category, epagos)
        : deliveryCity && category
        ? await searchTradesByCityAndCat(deliveryCity, category)
        : deliveryCity
        ? await searchTradesByCity(deliveryCity)        
        : await getAllTrades();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar los comercios` });
  }
};

// GET ---------> /trades/search/:id
const getTradeHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await searchTradeById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ error: `Error al buscar el comercio` });
	}
};

// GET ----------> /trades/categories
const getCategoriesHandler = async (req, res) => {
	try {
		const categories = await getAllCategories();
		res.status(200).json(categories);
	} catch (error) {
		res.status(400).json({ error: `Error al buscar las categorias` });
	}
};

// GET ----------> /trades/subcategories
const getSubCategoriesHandler = async (req, res) => {
	const { category } = req.query;
	console.log(category);
	try {
		const subcategories = await getSubCategories(category);
		res.status(200).json(subcategories);
	} catch (error) {
		res.status(400).json({ error: `Error al buscar las subcategorias` });
	}
};

//POST 
const trade = async(req,res) =>{
  try {
    const createTrades = await postCreateTrades( req.body);
    if (createTrades) 
    res.status(200).json(`Se creo correctamente el comercio ${req.body.userName}`)
  } catch (error) {
    res.status(404).json({ Error: 'Error al registrar el comercio'})
  }
}

const newCategoryTrade = async (req, res) => {
  try {
    const createCategory = await postCreateCategory( req.body );
    if(createCategory)
    res.status(200).json(`Se creo la categoria correctamente ${req.body.categoryName}`)
  } catch (error) {
    res.status(404).json({Error: "Error al registar la categoria"});
  }

}

const newDeliveryZone = async (req, res) => {
  try {
    const createDeliveryZone = await   postCreateDeliveryZone( req.body );
    if(createDeliveryZone)
    res.status(200).json(`Se creo la zona correctamente ${req.body.deliveryZoneName}`)
  } catch (error) {
    res.status(404).json({Error: "Error al registar la zona"});
  }

}

const newSubcategory = async (req, res) => {
  try {

    const createSubcategory = await postCreateSubcategory( req.body );
    if(createSubcategory)
    res.status(200).json(`Se creo la zona correctamente ${req.body.subcategoryName}`)
  } catch (error) {
    res.status(404).json({Error: "Error al registar la zona"});
  }

}

const getTradesH = async (req,res) => {
  try {
    const trades = await getTrades();
    res.status(200).json( trades)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener los comercios"})
  }
}

const getCategoriesH = async (req,res) => {
  try {
    const categories = await getCategories();
    res.status(200).json( categories)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las categorias"})
  }
}

const getDeliveryZonesH = async (req,res) => {
  try {
    const deliveryZones = await getDeliveryZone();
    res.status(200).json( deliveryZones)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las zonas"})
  }
}

const getSubCategoriesH = async (req,res) => {
  try {
    const subcategories = await getSubCategoriesController();
    res.status(200).json( subcategories)
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las subcategorias"})
  }
}

const updateTrade = async(req, res) => {
  const { id } = req.params;
  const tradeUpdate = {
    ...req.body,
    user: id
  }
  try {
    const trade = await  updateTradeC(id,tradeUpdate)
    res.status(200).json(`Se actualizo el comercio`)
  } catch (error) {
    res.status(404).json(`Error al actualizar el comercio`)   
  }
}

const updateCategory = async(req, res) => {
  const { id } = req.params;
  const categoryUpdate = {
    ...req.body,
    user: id
  }
  try {
    const category = await  updateCategoryC(id,categoryUpdate)
    res.status(200).json(`Se actualizo la categoria`)
  } catch (error) {
    res.status(404).json(`Error al actualizar categoria`)   
  }
}

const updateDeliveryZone = async(req, res) => {
  const { id } = req.params;
  const deliveryUpdate = {
    ...req.body,
    user: id
  }
  try {
    const delivery = await  updateDeliveryC(id,deliveryUpdate)
    res.status(200).json(`Se actualizo la zona`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la zona`)   
  }
}

const updateSubcategory = async(req, res) => {
  const { id } = req.params;
  const subcategoryUpdate = {
    ...req.body,
    user: id
  }
  try {
    const subcategory = await  updateSubcategoryC(id,subcategoryUpdate)
    res.status(200).json(`Se actualizo la subcategoria`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la subcategoria`)   
  }
}


module.exports = {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
  trade,
  newCategoryTrade,
  newDeliveryZone,
  newSubcategory,
  getTradesH,
  getCategoriesH,
  getDeliveryZonesH,
  getSubCategoriesH,
  updateTrade,
  updateCategory,
  updateDeliveryZone,
  updateSubcategory
};
