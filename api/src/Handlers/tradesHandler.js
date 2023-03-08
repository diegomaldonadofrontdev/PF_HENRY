const {
  searchTradesByCityAndCatAndSC,
  searchTradesByCityAndCat,
  searchTradesByCity,
  searchTradesByCategory,
  searchTradesBySubCategory,
  getAllTrades,
  searchTradeById,
  getAllCategories,
  getSubCategories,
  postCreateTrades,
  postCreateCategory,
  postCreateDeliveryZone,
  postCreateSubcategory
} = require("../Controllers/tradesController");



// GET ---------> /trades/search
const getTradesHandler = async (req, res) => {
  const { deliveryCity, category, subcategory } = req.query;
  try {
    const result =
    deliveryCity && category && subcategory
        ? await searchTradesByCityAndCatAndSC(deliveryCity, category, subcategory)
        : deliveryCity && category
        ? await searchTradesByCityAndCat(deliveryCity, category)
        : deliveryCity
        ? await searchTradesByCity(deliveryCity)
        : category && subcategory
        ? await searchTradesBySubCategory(category, subcategory)
        : category
        ? await searchTradesByCategory(category)
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



module.exports = {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
  trade,
  newCategoryTrade,
  newDeliveryZone,
  newSubcategory
};
