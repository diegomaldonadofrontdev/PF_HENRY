const validateAppFeedback = (req, res, next) => {
	const { name, opinion, rating } = req.body;
	const { clientId } = req.query;
	if (!name)
		return res.status(400).json({ Error: "No se ha recibido el nombre" });
	if (!opinion)
		return res.status(400).json({ Error: "No se ha recibido la opinion" });
	if (!rating)
		return res.status(400).json({ Error: "No se ha recibido la puntuación" });
	if (!clientId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del cliente" });
	next();
};

const validateTradeFeedback = (req, res, next) => {
	const { opinion, rating } = req.body;
	const { clientId, tradeId } = req.query;
	if (!tradeId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del comercio" });
	if (!opinion)
		return res.status(400).json({ Error: "No se ha recibido la opinion" });
	if (!rating)
		return res.status(400).json({ Error: "No se ha recibido la puntuación" });
	if (!clientId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del cliente" });
	next();
};

const validateOrder = (req, res, next) => {
	const { products } = req.body;
	const { tradeId, clientId } = req.query;
	if (!tradeId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del comercio" });
	if (!clientId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del cliente" });
	if (!products)
		return res.status(400).json({ Error: "La lista de productos esta vacía" });	
	next();
};

const validateClient = (req, res, next) => {
	const {
		firstname,
		lastname,
		email,
		password,
		country,
		city,
		address,
		phone,
	} = req.body;
	if (!firstname)
		return res.status(400).json({ Error: "No se ha recibido el nombre" });
	if (!lastname)
		return res.status(400).json({ Error: "No se ha recibido el apellido" });
	if (!email)
		return res.status(400).json({ Error: "No se ha recibido el email" });
	if (!password)
		return res.status(400).json({ Error: "No se ha recibido la contraseña" });
	if (!country)
		return res.status(400).json({ Error: "No se ha recibido el pais" });
	if (!city)
		return res.status(400).json({ Error: "No se ha recibido la ciudad" });
	if (!address)
		return res.status(400).json({ Error: "No se ha recibido la direccion" });
	if (!phone)
		return res.status(400).json({ Error: "No se ha recibido el telefono" });
	next();
};

const validateTrade = (req, res, next) => {
	const {
		commerceName,
		category,
		subcategory,
		description,
		userName,
		email,
		password,
		province,
		city,
		address,
	} = req.body;
	if (!commerceName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre del comercio" });
	if (!category)
		return res
			.status(400)
			.json({ Error: "No se ha recibido la categoría del comercio" });
	if (!subcategory)
		return res
			.status(400)
			.json({ Error: "No se ha recibido la subcategoría del comercio" });
	if (!description)
		return res
			.status(400)
			.json({ Error: "No se ha recibido la descripcion del comercio" });
	if (!province)
		return res.status(400).json({ Error: "No se ha recibido el tipo de pago" });
	if (!city)
		return res.status(400).json({ Error: "No se ha recibido la ciudad" });
	if (!address)
		return res.status(400).json({ Error: "No se ha recibido la direccion" });
	if (!phone)
		return res.status(400).json({ Error: "No se ha recibido el telefono" });
	if (!userName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de usuario" });
	if (!password)
		return res.status(400).json({ Error: "No se ha recibido la contraseña" });
	if (!email)
		return res.status(400).json({ Error: "No se ha recibido el email" });
	if (!epagos)
		return res.status(400).json({ Error: "No se ha recibido el tipo de pago" });
	next();
};

const validateProduct = (req, res, next) => {
	const { name, description, price, image, status } = req.body;

	if (!name)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre del producto" });
	if (!description)
		return res
			.status(400)
			.json({ Error: "No se ha recibido la descripcion del producto" });
	if (!price)
		return res.status(400).json({ Error: "No se ha recibido el precio" });
	if (!image)
		return res.status(400).json({ Error: "No se ha recibido la imagen" });
	if (!status)
		return res.status(400).json({ Error: "No se ha recibido el estatus" });
	next();
};

const validateCategory = (req, res, next) => {
	const { categoryName, status } = req.body;

	if (!categoryName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la categoria" });
	if (!status)
		return res.status(400).json({ Error: "No se ha recibido el estatus" });
	next();
};

const validateDeliveryZone = (req, res, next) => {
	const { deliveryZoneName, status } = req.body;

	if (!deliveryZoneName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la zona" });
	if (!status)
		return res.status(400).json({ Error: "No se ha recibido el estatus" });
	next();
};

const validateCategoryProduct = (req, res, next) => {
	const { categoryName, status } = req.body;

	if (!categoryName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la categoria" });
	if (!status)
		return res.status(400).json({ Error: "No se ha recibido el estatus" });
	next();
};

const validateSubcategory = (req, res, next) => {
	const { subcategoryName, status } = req.body;

	if (!subcategoryName)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la subcategoria" });
	if (!status)
		return res.status(400).json({ Error: "No se ha recibido el estatus" });
	next();
};

const validateResetPassword = (req, res, next) => {
	const { email } = req.body;

	if (!email)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el correo electronico" });

	next();
};

const validatePassword = (req, res, next) => {
	const { password } = req.body;

	if (!password)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el correo electronico" });

	next();
};

module.exports = {
	validateAppFeedback,
	validateTradeFeedback,
	validateOrder,
	validateClient,
	validateTrade,
	validateProduct,
	validateCategory,
	validateDeliveryZone,
	validateCategoryProduct,
	validateSubcategory,
	validateResetPassword,
	validatePassword,
};
