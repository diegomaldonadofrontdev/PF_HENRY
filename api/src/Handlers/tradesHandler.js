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
  deleteCaegory,
  getCategories,
  getAllSubcategories,
  createDeliveryZone,
  deleteSubcategory,
  deleteDeliveryZone
} = require("../Controllers/tradesController");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const jwt = require("jsonwebtoken");

// GET
const getTradesHandler = async (req, res) => {  // OK.
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
    res.status(404).json({ Error: error.message });
  }
};

const getTradeHandler = async (req, res) => {
  // OK.
  const { id } = req.params;
  try {
    const result = await searchTradeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const getTradeByNameHandler = async (req, res) => {
  // OK.
  const { name } = req.query;
  try {
    if (name) {
    const find = await searchTradeByName(name);
    res.status(200).json(find);
    }
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const getCategoriesHandler = async (req, res) => {
  // OK.
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getCategoryHandler = async (req, res) => {
  //OK.
  try {
    const categories = await getCategories()
    res.status(200).json(categories)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}

const getSubCategoriesHandler = async (req, res) => {
  // OK.
  const { category } = req.query;
  try {
    const subcategories = await getSubCategories(category);
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getSubcategoryHandler = async (req, res) => {
  //OK.
  const { category } = req.query;
  try {
    const subcategories = await getAllSubcategories(category)
    res.status(200).json(subcategories)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
}

const getDeliveryZoneHandler = async (req, res) => {
  // OK.
  try {
    const deliveryZones = await getDeliveryZones();
    res.status(200).json(deliveryZones);
  } catch (error) {
    res.status(404).json({Error: error.message});
  }
};

const getConfirmEmailHandler = async (req, res) => {
  // OK.
  const token = req.params.token;
  try {
    const confirm = await confirmEmail(token);
    res.status(200).json({ confirm });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

// POST
const postTradeHandler = async (req, res) => {
  // OK.
  const body = req.body;
  try {
    const newTrade = await createTrades(body);
    res.status(200).json(newTrade);
  } catch (error) {
    res.status(404).json({Error: error.message});
  }
};

const postCategoryHandler = async (req, res) => {
  // OK.
  const { category } = req.body;
  const cat = { name: category };
  try {
    const newCat = await createCategory(cat);
    res.status(200).json(newCat);
  } catch (error) {
    res
      .status(404)
      .json({ Error: error.message });
  }
};

const postSubcategoryHandler = async (req, res) => {
  // OK.
  const { category } = req.query;
  const { subcategory } = req.body;
  const subCat = { category, name: subcategory };
  try {
    const createSubcat = await createSubcategory(subCat);
    res.status(200).json(createSubcat);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const postDeliveryZoneHandler = async (req, res) => {
  // OK.
  const { deliveryZone } = req.body;
  const deliZone = { name: deliveryZone };
  try {
    const create = await createDeliveryZone(deliZone)
    res.status(200).json(create)
  } catch (error) {
    res.status(404).json({Error: error.message})
  }
};

const postLoginTradeHandler = async (req, res) => {
  // OK.
  const { username, password } = req.body;
  try {
    const verify = await verifyTradeLog(username, password);
    res.status(200).json(verify);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const postSendMailResetPassword = async (req, res) => {
  // ok.
  const { email } = req.body;
  try {
    const token = jwt.sign({ email: email }, TOKEN_KEY, { expiresIn: "2h" });
    const sendMail = await sendMailNewPassword(email, token);
    res.status(200).json(sendMail);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const postResetPassword = async (req, res) => {
  // ok.
  const { password } = req.body;
  const { token } = req.params;
  try {
    const reset = await resetPasswordController(password, token);
    res.status(200).json(reset);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

// PUT
const putTradeHandler = async (req, res) => {
  // OK.
  const { tradeId } = req.params;
  const body = req.body;
  try {
    const trade = await updateTrade(tradeId, body);
    res.status(200).json(trade);
  } catch (error) {
    res.status(404).json({Error: error.message});
  }
};

const putTradesHandler = async (req, res) => { // OK.
	try {
		const update = await updateTrades(req.body)
    if (update) res.status(200).json(update)
	} catch (error) {
		res.status(404).json({Error: error.message})
	}
}

// DELETE
const deleteTradeHandler = async (req, res) => { // OK.
	const {id} = req.params
  try {
    const deleted = await deleteTrade(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const deleteCategoryHandler = async (req, res) => { // OK.
  const {category} = req.body
  try {
    const deleted = await deleteCaegory(category);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}

const deleteSubcategoryHandler = async (req, res) => { // OK.
  const {subcategory} = req.body
  try {
    const deleted = await deleteSubcategory(subcategory);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}

const deleteDeliveryZoneHandler = async (req, res) => { // OK.
  const {deliveryZone} = req.body
  try {
    const deleted = await deleteDeliveryZone(deliveryZone);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};


module.exports = {
  getTradesHandler,
  getTradeHandler,
  getCategoryHandler,
  getCategoriesHandler,
  getCategoryHandler,
  getSubCategoriesHandler,
  getSubcategoryHandler,
  getSubcategoryHandler,
  getDeliveryZoneHandler,
  getTradeByNameHandler,
  getConfirmEmailHandler,
  getTradeByNameHandler,
  getConfirmEmailHandler,
  postTradeHandler,
  postCategoryHandler,
  postDeliveryZoneHandler,
  postSubcategoryHandler,
  postSendMailResetPassword,
  postResetPassword,
  postLoginTradeHandler,
  putTradeHandler,
  putTradesHandler,
  putTradesHandler,
  deleteTradeHandler,
  deleteCategoryHandler,
  deleteDeliveryZoneHandler,
  deleteSubcategoryHandler,
};
