const {
	searchTradeById,
	searchTradesByFilters,	
	getAllCategories,
	getSubCategories,
	getDeliveryZones,
	createTrades,
	createCategory,
	confirmEmail,
	resetPasswordController,
	sendMailNewPassword,
	verifyTradeLog,
	updateTrade,
	updateSchedule
} = require("../Controllers/tradesController");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const jwt = require('jsonwebtoken');

// GET 
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

const getTradeHandler = async (req, res) => {	// FUNCIONANDO 12/03
	const { id } = req.params;
	try {
		const result = await searchTradeById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ error: `Error al buscar el comercio` });
	}
};

const getCategoriesHandler = async (req, res) => {	// FUNCIONANDO 12/03
	try {
		const categories = await getAllCategories();
		res.status(200).json(categories);
	} catch (error) {
		res.status(400).json({ error: `Error al buscar las categorias` });
	}
};

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

// POST
const postTradeHandler = async (req, res) => { // PROBAR
	const {commerceName} = req.body
	const body = req.body
	try {
		const newTrade = await createTrades(body);
		if (newTrade) 
		return res.status(200).json(`Se creo correctamente el comercio ${commerceName}`);
	} catch (error) {
		res.status(404).json({
			Error: `Error al registrar el comercio ${req.body.commerceName}`,
		});
	}
};

const postCategoryHandler = async (req, res) => {
	const {category} = req.body
	const cat = {name: category}
	try {
		await createCategory(cat);
		res.status(200).json(`Se creo la categoria correctamente ${category}`);		
	} catch (error) {
		res.status(404).json({ Error: `Error al registar la categoria ${category}` });
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

const loginTradeHandler = async (req, res) => { // FUNCIONANDO
	const {username, password} = req.body
	try {
		const verify = await verifyTradeLog(username, password)
		if (verify) res.status(200).json(verify)
	} catch (error) {
		res.status(404).json({Error: `Usuario o contraseña incorrecto`})
	}
}

// PUT

const putTradeHandler = async (req, res) => { //FUNCIONANDO
	const { tradeId } = req.params;
	const body = req.body
		try {
		const trade = await updateTrade(tradeId, body);
		if (trade) res.status(200).json(`Se actualizo el comercio`);
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
		await updateSubcategoryC(id, subcategoryUpdate);
		res.status(200).json(`Se actualizo la subcategoria`);
	} catch (error) {
		res.status(404).json(`Error al actualizar la subcategoria`);
	}
};

const confirmEmailHandler = async( req, res) => { // FUNCIONANDO
	const token = req.params.token;
	try {
		const confirm = await confirmEmail(token)
		res.status(200).json({confirm})
	} catch (error) {
		res.status(400).json({Error: "No existe ningun token"} )
	}
}

const sendMailResetPassword = async (req,res ) => { // FUNCIONANDO
	const { email } = req.body;
	console.log(email);
	try {
	  const token = jwt.sign(
		{ email: email },
		TOKEN_KEY,
		{ expiresIn: "2h" }
	  )
		console.log(token);
	  const sendMail = await sendMailNewPassword(email,token);
	  res.status(200).json(sendMail)
	} catch (error) {
	  res.status(404).json({Error: "No se ha enviado el link para resetear la contraseña" })
	}
  }
  
  const resetPassword = async (req, res) => { // FUNCIONANDO
	const { password } = req.body
	const { token } = req.params;
	console.log(token);
	console.log(password);
	
	try {
	  const reset = await resetPasswordController(password,token)
	  res.status(200).json(reset)  
  
	} catch (error) {
	  res.status(404).json({Error: "No se pudo cambiar la contraseña"})
	}
  }

module.exports = {
	getTradesHandler,
	getTradeHandler,
	getCategoriesHandler,
	getSubCategoriesHandler,
	getDeliveryZoneHandler,
	postTradeHandler,
	postCategoryHandler,
	newDeliveryZone,
	newSubcategory,
	putTradeHandler,
	updateCategory,
	updateDeliveryZone,
	updateSubcategory,
	confirmEmailHandler,
	sendMailResetPassword,
	resetPassword,
	loginTradeHandler,	
};
