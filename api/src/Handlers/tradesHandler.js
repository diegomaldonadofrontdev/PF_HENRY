const {
	searchTradesByCategory,
	searchTradesBySubCategory,
	getAllTrades,
	searchTradeById,
	getAllCategories,
	getSubCategories,
} = require("../Controllers/tradesController");

// GET ---------> /trades/search
const getTradesHandler = async (req, res) => {
	const { category } = req.query;
	const { subcategory } = req.query;
	try {
		const result =
			category && subcategory
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

module.exports = {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
};
