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
	const { data, total } = req.body;
	const { tradeId, clientId } = req.query;
	if (!tradeId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del comercio" });
	if (!clientId)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el id del cliente" });
	if (!data)
		return res.status(400).json({ Error: "La lista de productos esta vacía" });
	if (!total)
		return res
			.status(400)
			.json({ Error: "No se recibió el monto total de la compra" });
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
		phone,
		epagos,
		deliveryZone
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
	if (!deliveryZone)
		return res.status(400).json({ Error: "No se ha recibido el tipo de pago" });
	next();
};

const validateProduct = (req, res, next) => {
	const { name, category, description, price, image } = req.body;

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
	if (!category)
		return res.status(400).json({ Error: "No se ha recibido la categoría" });
	next();
};

const validateCategory = (req, res, next) => {
	const { category } = req.body;

	if (!category)
		return res.status(400).json({ Error: "No se ha recibido el nombre de la categoria" });	
	next();
};

const validateDeliveryZone = (req, res, next) => {
	const { deliveryZone } = req.body;

	if (!deliveryZone)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la zona" });
	next();
};

const validateCategoryProduct = (req, res, next) => {
	const { productCategory } = req.body;

	if (!productCategory)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la categoria" });
	next();
};

const validateSubcategory = (req, res, next) => {
	const { subcategory } = req.body;
	const { category } = req.query;
	if (!subcategory)
		return res
			.status(400)
			.json({ Error: "No se ha recibido el nombre de la subcategoria" });
	if (!category)
		return res.status(400).json({ Error: "No se ha recibido la categoría" });
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

const validateLoginTrade = (req, res, next) => {
	const {username, password} = req.body
	if (!username) return res.status(400).json({ Error: "No se ha recibido el usuario" });
	if (!password) return res.status(400).json({ Error: "No se ha recibido la constraseña" });
	next()
}

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
	validateLoginTrade
};
