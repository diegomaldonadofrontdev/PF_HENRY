const Trade = require("../models/Trades");
const Categories = require("../models/Categories");
const Subcategories = require ("../models/Subcategory")
const DeliveryZone = require ("../models/DeliveryZone")
const bcrypt = require("bcryptjs");
const sendMail = require('../Helpers/emailTrade')
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const jwt = require('jsonwebtoken');
const sendMailWelcome = require('../Helpers/emailRegisterTrades')
const sendMailResetSuccess = require('../Helpers/emailResetPasswordSuccesTrade')
const sendMailReset = require('../Helpers/emailResetPasswordTrades')


// GET

const getAllTrades = async () => {	// OK
	const alltrades = await Trade.find();
	if (alltrades.length) {
		return alltrades;
	} else return `Ocurrió un error: No hay comercios en nuestra Base de Datos`;
};

const searchByZone = async (deliveryZone) => {	// OK
	try {
		const tradesFound = await Trade.find({ deliveryZone: deliveryZone });
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

const searchByZoneAndCat = async (deliveryZone, category) => {	// OK
	try {
		const tradesFound = await Trade.find({
			deliveryZone: deliveryZone,
			category: category,
		});
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

const searchByZoneAndCatAndEpagos = async (deliveryZone, category, epagos) => {	// OK
	try {
		const tradesFound = await Trade.find({
			deliveryZone: deliveryZone,
			category: category,
			epagos: epagos,
		});
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

const searchTradesByFilters = async (tradesFilter) => {	// OK
	try {		
		const tradesFound = await Trade.find(tradesFilter); 
		if (tradesFound.length) {
			return tradesFound;
		} else return [];
	} catch (error) {
		return error.message;
	}
};

const searchTradeById = async (id) => {	// OK
	try {
		const tradeById = await Trade.findById(id);
		if (tradeById) {
			return tradeById;
		} else return `Vaya! Ocurrió un problema al acceder al comercio!`;
	} catch (error) {
		return error.message;
	}
};

const searchTradeByName = async (name) => { // OK
	try {
		let tradeFound = await Trade.find()
		let tradeCoincidence = tradeFound.filter((t) => t.commerceName.toLowerCase().includes(name.toLowerCase()))
		if (tradeCoincidence.length) return tradeCoincidence
		return `No se encontraron comercios`		
	} catch (error) {
		throw new Error(`Ocurrió un problema al buscar el comercio.`)
	}
}

const getAllCategories = async () => {	// OK
	try {
		const allTrades = await Trade.find({active: true}, "category");
		if (allTrades.length) {
			const categoriesRepeat = [];
			allTrades.forEach((trade) => {
				categoriesRepeat.push(trade.category);
			});
			return [...new Set(categoriesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};

const getSubCategories = async (category) => {	// OK
	try {
		const allTrades = await Trade.find({ category: category, active: true }, "subcategory");
		if (allTrades.length) {
			const subcategoriesRepeat = [];
			allTrades.forEach((trade) => {
				subcategoriesRepeat.push(trade.subcategory);
			});
			return [...new Set(subcategoriesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};

const getDeliveryZones = async () => {	// OK
	try {
		const allTrades = await Trade.find({active:true}, "deliveryZone");
		if (allTrades.length) {
			const deliveryZonesRepeat = [];
			for (let i = 0; i < allTrades.length; i++) {
				for (let j = 0; j < allTrades[i].deliveryZone.length; j++) {
					deliveryZonesRepeat.push(allTrades[i].deliveryZone[j]);
				}
			}
			return [...new Set(deliveryZonesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};

const getCategories = async () => {
	try {
		const categories = await Categories.find()
		return categories
	} catch (error) {
		throw new Error(error.message)
	}
}

const getAllSubcategories = async () => {
	try {
		const subcategories = await Subcategories.find()
		return subcategories
	} catch (error) {
		throw new Error(error.message)
	}
}


// PUTS
const updateTrade = async (tradeId, body) => { // OK
  try {
    const updateTrade = await Trade.findByIdAndUpdate(tradeId, body, { new: true });
    if (updateTrade) return true
	return false
  } catch (error) {
    return error.message;
  }
}

const updateTrades = async (body) => {  // OK
	try {
	  const tradeUpdate = await Trade.updateMany({}, body)
	  if (tradeUpdate) return `Comercios actualizados.`
	  return `Problema al actualizar los comercios.`
	} catch (error) {
	  return error.message
	}
  }

//POST
const createTrades = async (body) => { // OK
	const {password, email} = body
	try {
		const token = jwt.sign(
			{ email: email },
			TOKEN_KEY,
			{ expiresIn: "2h" }
		)
		const newTrade = new Trade(body);

		const salt = bcrypt.genSaltSync(10);
		newTrade.password = bcrypt.hashSync(password, salt);
		await newTrade.save();
		sendMail(newTrade.email,token)

		return true;
	} catch (error) {
		return error.message;
	}
};

const confirmEmail = async (token ) => { // OK
	try {
		const payload = jwt.verify(token,TOKEN_KEY)
		
		let email = payload.email;
		
		const trades = await Trade.findOne({email});
		
		if (!trades) return "No se encontro el usuario"
		if (trades.emailVerified) return "El correo ya se encuentra verificado"
		
		trades.emailVerified = true;
		await trades.save()
		await sendMailWelcome(trades.email,trades.username);
		return "El correo electronico ha sido verificado"
  
	} catch (error) {
	  return "Token invalido";
	}
  }

  const sendMailNewPassword = async (email,token) => { // ?
	try {
	  await sendMailReset(email,token)
	  return "Se ha enviado el link a tu email"
	} catch (error) {
	  return "Error al enviar el email"
	}
  }
  
  const resetPasswordController = async (password, token) => { // ?
	try {
	  const payload = jwt.verify(token,TOKEN_KEY)
	
	  let email = payload.email;
  
	  const salt = bcrypt.genSaltSync(10);
	  const trade = await Trade.findOne({email})
	  
	  let newPassword = bcrypt.hashSync(password, salt)
  
	  trade.password = newPassword;
  
	  await trade.save();
	  await sendMailResetSuccess(trade.email,trade.userName);
  
	  return "Se actulizo la contraseña"
	} catch (error) {
	  return "No se ha encontrado al cliente"
	}
  }
  

const createCategory = async (category) => { // OK
  try {
    const newCategory = new Categories(category);    
    await newCategory.save()
	return true;
  } catch (error) {
    throw new Error({Error: error.message})
  }
};

const createSubcategory = async (subCat) => { // OK
	try {
		const newSubCat = new Subcategories(subCat)
		await newSubCat.save()
		return true
	} catch (error) {
		throw new Error({Error: error.message})
	}
}

const createDeliveryZone = async (deliZone) => { // OK 
	try {
		const newDZ = new DeliveryZone(deliZone)
		newDZ.save()
		return `Se creo la deliveryZone correctamente`
	} catch (error) {
		throw new Error(`Error al crear la delivery zone`)
	}
}

const verifyTradeLog = async (username, password) => { // ?
	try {
		const existUser = await Trade.find({userName: username})
		const trade = existUser[0]
		if (existUser.length) {
			const pass = bcrypt.compareSync(password, trade.password);
    		if (pass) return trade._id
    		return false
		} return false
	} catch (error) {
		return error.message
	}
}

// DELETE
const deleteTrade = async (id) => { //OK
	try {
		const tradeDeleted = await Trade.deleteOne({_id: id})
		if (tradeDeleted.deletedCount !== 0) {
			return `Comercio eliminado!`
		} return `No se encontró el comercio.`
	} catch (error) {
		console.log(error.message);
		throw new Error(`Ocurrio un error al intentar eliminar el comercio`)
	}
}

const deleteCaegory = async (category) => {
try {
	const deleted = await Categories.findOneAndDelete({name: category})
	if (deleted) return `Se eliminó la categoría ${category}`
	return `No fue posible eliminar la categoría ${category}`
} catch (error) {
	throw new Error(`Ocurrió un error al eliminar la categoría ${category}`)
}
}

const deleteSubcategory = async (subcategory) => {
	try {
		const deleted = await Subcategories.findOneAndDelete({name: subcategory})
		if (deleted) return `Se eliminó la subcategoría ${subcategory}`
		return `No fue posible eliminar la subcategoría ${subcategory}`
	} catch (error) {
		throw new Error(`Ocurrió un error al eliminar la subcategoría ${subcategory}`)
	}
}

const deleteDeliveryZone = async (deliveryZone) => {
	try {
		const deleted = await DeliveryZone.findOneAndDelete({name: deliveryZone})
		if (deleted) return `Se eliminó la zona ${deliveryZone}`
		return `No fue posible eliminar la zona ${deliveryZone}`
	} catch (error) {
		throw new Error(`Ocurrió un error al eliminar la zona ${deliveryZone}`)
	}
}

module.exports = {
	getAllTrades,
	searchByZone,
	searchByZoneAndCat,	
	searchByZoneAndCatAndEpagos,
	searchTradesByFilters,
	searchTradeById,
	createTrades,
	createCategory,
	getAllCategories,
	getSubCategories,
	getDeliveryZones,
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
};
