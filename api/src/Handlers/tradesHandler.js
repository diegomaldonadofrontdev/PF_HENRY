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
  deleteTrade,
  searchTradeByName,
  createSubcategory,
  updateTrades,
  createDeliveryZone,
  deleteCaegory,
  deleteSubcategory,
  deleteDeliveryZone,
  getCategories,
  getAllSubcategories
} = require("../Controllers/tradesController");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const jwt = require("jsonwebtoken");

// GET
const getTradesHandler = async (req, res) => {  // OK
  const def = "default";
  const { deliveryZone, category, subcategory, epagos } = req.query;
  try {
    let tradesFilter = {};
    if (deliveryZone && deliveryZone !== def)
      tradesFilter.deliveryZone = deliveryZone;
    if (category && category !== def) tradesFilter.category = category;
    if (subcategory && subcategory !== def)
      tradesFilter.subcategory = subcategory;
    if (epagos && epagos !== def) tradesFilter.epagos = epagos;
    tradesFilter.active = true;
    const tradesFiltered = await searchTradesByFilters(tradesFilter);
    res.status(200).json(tradesFiltered);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar los comercios` });
  }
};

const getTradeHandler = async (req, res) => {  // OK
  const { id } = req.params;
  try {
    const result = await searchTradeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: `Error al buscar el comercio` });
  }
};

const getTradeByNameHandler = async (req, res) => { // OK
    const {name} = req.query
    try {
        const find = await searchTradeByName(name)
		res.status(200).json(find)		
    } catch (error) {
        res.status(404).json({Error: error.message})
    }
}

const getCategoriesHandler = async (req, res) => { // OK
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: `Error al buscar las categorias` });
  }
};

const getCategoryHandler = async (req, res) => {
  try {
    const categories = await getCategories()
    res.status(200).json(categories)
  } catch (error) {
    
  }
}

const getSubCategoriesHandler = async (req, res) => { // OK
  const { category } = req.query;
  try {
    const subcategories = await getSubCategories(category);
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(400).json({ error: `Error al buscar las subcategorias` });
  }
};

const getSubcategoryHandler = async (req, res) => {
  const {category} =req.query
  try {
    const subcategories = await getAllSubcategories(category)
    res.status(200).json(subcategories)
  } catch (error) {
    
  }
}

const getDeliveryZoneHandler = async (req, res) => { // OK
  try {
    const deliveryZones = await getDeliveryZones();
    res.status(200).json(deliveryZones);
  } catch (error) {
    res.status(404).json({
      error: `Ocurrió un error al obtener la lista de zonas de delivery`,
    });
  }
};

const getConfirmEmailHandler = async (req, res) => { // OK
  const token = req.params.token;
  try {
    const confirm = await confirmEmail(token);
    res.status(200).json({ confirm });
  } catch (error) {
    res.status(400).json({ Error: "No existe ningun token" });
  }
};

// POST
const postTradeHandler = async (req, res) => {  // OK
  const { commerceName } = req.body;
  const body = req.body;
  try {
    const newTrade = await createTrades(body);
    if (newTrade)
      return res
        .status(200)
        .json(`Se creo correctamente el comercio ${commerceName}`);
  } catch (error) {
    res.status(404).json({
      Error: `Error al registrar el comercio ${req.body.commerceName}`,
    });
  }
};

const postCategoryHandler = async (req, res) => { // OK
  const { category } = req.body;
  const cat = { name: category };
  try {
    await createCategory(cat);
    res.status(200).json(`Se creo la categoria correctamente ${category}`);
  } catch (error) {
    res
      .status(404)
      .json({ Error: `Error al registar la categoria ${category}` });
  }
};

const postSubcategoryHandler = async (req, res) => { // OK
	const { category } = req.query
	const { subcategory } = req.body
	const subCat = { category, name: subcategory }
  try {
    const createSubcat = await createSubcategory(subCat);
    res
      .status(200)
      .json(createSubcat);
  } catch (error) {
    res.status(404).json({ Error: "Error al registar la subcategoría" });
  }
};

const postDeliveryZoneHandler = async (req, res) => {
  const {deliveryZone} = req.body
  const deliZone = {name: deliveryZone}
  try {
    const create = await createDeliveryZone(deliZone)
    res.status(200).json(create)
  } catch (error) {
    res.status(404).json({Error: `Error al crear la zona de delivery`})
  }
}

const postLoginTradeHandler = async (req, res) => { // OK
  const { username, password } = req.body;
  try {
    const verify = await verifyTradeLog(username, password);
    if (verify) res.status(200).json(verify);
  } catch (error) {
    res.status(404).json({ Error: `Usuario o contraseña incorrecto` });
  }
};

const postSendMailResetPassword = async (req, res) => { // ?
  const { email } = req.body;
  console.log(email);
  try {
    const token = jwt.sign({ email: email }, TOKEN_KEY, { expiresIn: "2h" });
    console.log(token);
    const sendMail = await sendMailNewPassword(email, token);
    res.status(200).json(sendMail);
  } catch (error) {
    res
      .status(404)
      .json({ Error: "No se ha enviado el link para resetear la contraseña" });
  }
};
const postResetPassword = async (req, res) => { // ?
  const { password } = req.body;
  const { token } = req.params;
  console.log(token);
  console.log(password);

  try {
    const reset = await resetPasswordController(password, token);
    res.status(200).json(reset);
  } catch (error) {
    res.status(404).json({ Error: "No se pudo cambiar la contraseña" });
  }
};

// PUT
const putTradeHandler = async (req, res) => { // OK
  const { tradeId } = req.params;
  const body = req.body;
  try {
    const trade = await updateTrade(tradeId, body);
    if (trade) res.status(200).json(`Se actualizo el comercio`);
  } catch (error) {
    res.status(404).json(`Error al actualizar el comercio`);
  }
};

const putTradesHandler = async (req, res) => { // OK
	try {
		const update = await updateTrades(req.body)
    if (update) res.status(200).json(update)
	} catch (error) {
		res.status(404).json({Error: error.message})
	}
}

// DELETE
const deleteTradeHandler = async (req, res) => { // OK
	const {id} = req.params
  try {
    const tradeDeleted = await deleteTrade(id);
    res.status(200).json(tradeDeleted)
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const deleteCategoryHandler = async (req, res) => { // OK
  const {category} = req.body
  try {
    const deleted = await deleteCaegory(category)
    res.status(200).json(deleted)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}
const deleteSubcategoryHandler = async (req, res) => { // OK
  const {subcategory} = req.body
  try {
    const deleted = await deleteSubcategory(subcategory)
    res.status(200).json(deleted)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}
const deleteDeliveryZoneHandler = async (req, res) => { // OK
  const {deliveryZone} = req.body
  try {
    const deleted = await deleteDeliveryZone(deliveryZone)
    res.status(200).json(deleted)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}

module.exports = {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getCategoryHandler,
  getSubCategoriesHandler,
  getSubcategoryHandler,
  getDeliveryZoneHandler,
  getTradeByNameHandler,
  getConfirmEmailHandler,
  postTradeHandler,
  postCategoryHandler,
  postSubcategoryHandler,
  postDeliveryZoneHandler,
  postResetPassword,
  postSendMailResetPassword,
  postLoginTradeHandler,
  putTradeHandler,
  putTradesHandler,
  deleteTradeHandler,
  deleteCategoryHandler,
  deleteSubcategoryHandler,
  deleteDeliveryZoneHandler,
};
