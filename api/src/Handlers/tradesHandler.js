const {
	getAllTrades,
	searchTradeById,
	searchTradesByFilters,	
	getAllCategories,
	getSubCategories,
	getDeliveryZones,	
	postCreateTrades
} = require("../Controllers/tradesController");

// GET ---------> /trades/search
const getTradesHandler = async (req, res) => {	// FUNCIONANDO 16/03
	const def = "default"
	const {deliveryZone, category, subcategory, epagos} = req.query
	try {
		let tradesFilter = {}
		if (deliveryZone && deliveryZone !== def) tradesFilter.deliveryZone = deliveryZone
		if (category && category !== def) tradesFilter.category = category
		if (subcategory && subcategory !== def) tradesFilter.subcategory = subcategory
		if (epagos && epagos !== def) tradesFilter.epagos = epagos
		const tradesFiltered = await searchTradesByFilters(tradesFilter)			
		res.status(200).json(tradesFiltered);
	} catch (error) {
		res.status(404).json({ error: `Error al buscar los comercios` });
	}
};

// GET ---------> /trades/search/:id
const getTradeHandler = async (req, res) => {	// FUNCIONANDO 12/03
	const { id } = req.params;
	try {
		const result = await searchTradeById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ error: `Error al buscar el comercio` });
	}
};

// GET ----------> /trades/categories
const getCategoriesHandler = async (req, res) => {	// FUNCIONANDO 12/03
	try {
		const categories = await getAllCategories();
		res.status(200).json(categories);
	} catch (error) {
		res.status(400).json({ error: `Error al buscar las categorias` });
	}
};

// GET ----------> /trades/subcategories
const getSubCategoriesHandler = async (req, res) => {	// FUNCIONANDO 12/03
	const { category } = req.query;
	try {
		const subcategories = await getSubCategories(category);
		res.status(200).json(subcategories);
	} catch (error) {
		res.status(400).json({ error: `Error al buscar las subcategorias` });
	}
};

const getDeliveryZoneHandler = async (req, res) => {	//FUNCIONANDO 12/03
	try {
		const deliveryZones = await getDeliveryZones();
		res.status(200).json(deliveryZones);
	} catch (error) {
		res.status(404).json({
			error: `Ocurrió un error al obtener la lista de zonas de delivery`,
		});
	}
};

//POST
const createTradeHandler = async (req, res) => {
	try {
		const newTrade = await postCreateTrades(req.body);		
		res
			.status(200)
			.json(`Se creo correctamente el comercio ${req.body.commerceName}`);
	} catch (error) {
		res.status(404).json({
			Error: `Error al registrar el comercio ${req.body.commerceName}`,
		});
	}
};

const newCategoryTrade = async (req, res) => {
	try {
		const createCategory = await postCreateCategory(req.body);

		res
			.status(200)
			.json(`Se creo la categoria correctamente ${req.body.categoryName}`);
	} catch (error) {
		res.status(404).json({ Error: "Error al registar la categoria" });
	}
};

const newDeliveryZone = async (req, res) => {
	try {
		const createDeliveryZone = await postCreateDeliveryZone(req.body);

		res
			.status(200)
			.json(`Se creo la zona correctamente ${req.body.deliveryZoneName}`);
	} catch (error) {
		res.status(404).json({ Error: "Error al registar la zona" });
	}
};

const newSubcategory = async (req, res) => {
	try {
		const createSubcategory = await postCreateSubcategory(req.body);

		res
			.status(200)
			.json(`Se creo la zona correctamente ${req.body.subcategoryName}`);
	} catch (error) {
		res.status(404).json({ Error: "Error al registar la zona" });
	}
};

// UPDATES
const updateTrade = async (req, res) => {
	const { id } = req.params;
	const tradeUpdate = {
		...req.body,
		user: id,
	};
	try {
		const trade = await updateTradeC(id, tradeUpdate);
		res.status(200).json(`Se actualizo el comercio`);
	} catch (error) {
		res.status(404).json(`Error al actualizar el comercio`);
	}
};

const updateCategory = async (req, res) => {
	const { id } = req.params;
	const categoryUpdate = {
		...req.body,
		user: id,
	};
	try {
		const category = await updateCategoryC(id, categoryUpdate);
		res.status(200).json(`Se actualizo la categoria`);
	} catch (error) {
		res.status(404).json(`Error al actualizar categoria`);
	}
};

const updateDeliveryZone = async (req, res) => {
	const { id } = req.params;
	const deliveryUpdate = {
		...req.body,
		user: id,
	};
	try {
		const delivery = await updateDeliveryC(id, deliveryUpdate);
		res.status(200).json(`Se actualizo la zona`);
	} catch (error) {
		res.status(404).json(`Error al actualizar la zona`);
	}
};

const updateSubcategory = async (req, res) => {
	const { id } = req.params;
	const subcategoryUpdate = {
		...req.body,
		user: id,
	};
	try {
		const subcategory = await updateSubcategoryC(id, subcategoryUpdate);
		res.status(200).json(`Se actualizo la subcategoria`);
	} catch (error) {
		res.status(404).json(`Error al actualizar la subcategoria`);
	}
};

module.exports = {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
	getDeliveryZoneHandler,
	createTradeHandler,
	newCategoryTrade,
	newDeliveryZone,
	newSubcategory,
	updateTrade,
	updateCategory,
	updateDeliveryZone,
	updateSubcategory,
};
