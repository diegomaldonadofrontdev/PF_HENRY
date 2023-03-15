const Trade = require("../models/Trades");
// const Category = require("../models/Category");
// const DeliveryZone = require("../models/DeliveryZone");
// const Subcategory = require("../models/Subcategory");
// const Products = require("../models/Products");
// const { trades } = require("../Auxiliares/comerciantes");
// const { trades } = require("../Auxiliares/comercios");
const bcrypt = require("bcryptjs");

// GET COMERCIOS
// [Todos los comercios de todas las categorias]
const getAllTrades = async () => {
	// OK FUNCIONANDO 12/03
	const alltrades = await Trade.find();
	if (alltrades.length) {
		return alltrades;
	} else return `Ocurrió un error: No hay comercios en nuestra Base de Datos`;
};

// [Todos los comercios con reparto en la ciudad especificada]
const searchByZone = async (deliveryZone) => {
	// OK FUNCIONANDO 12/03
	try {
		const tradesFound = await Trade.find({ deliveryZone: deliveryZone });
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los comercios con reparto en la zona y de la categoria especificada]
const searchByZoneAndCat = async (deliveryZone, category) => {
	// OK FUNCIONANDO 12/03
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

// [Todos los comercios con reparto en la zona, de la categoria y tipo de pago especificado]
const searchByZoneAndCatAndEpagos = async (deliveryZone, category, epagos) => {
	// OK FUNCIONANDO 12/03
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

// [Todos los comercios con reparto en la zona, de la categoria y subcategoria especificada]
const searchByZoneAndCatAndSC = async (deliveryZone, category, subcategory) => {
	// OK FUNCIONANDO 12/03
	try {
		const tradesFound = await Trade.find({
			deliveryZone: deliveryZone,
			category: category,
			subcategory: subcategory,
		});
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los comercios con todos los filtros activados]
const searchTradesByAll = async (
	deliveryZone,
	category,
	subcategory,
	epagos
) => {
	// OK FUNCIONANDO 12/03

	try {
		let obj = {};
		if (deliveryZone && deliveryZone !== "default") {
			obj.deliveryZone = deliveryZone;
		}
		if (category && category !== "default") {
			obj.category = category;
		}
		if (subcategory && subcategory !== "default") {
			obj.subcategory = subcategory;
		}
		if (epagos && epagos !== "default") {
			obj.epagos = epagos;
		}
		const tradesFound = await Trade.find(obj);

		if (tradesFound.length) {
			console.log(tradesFound);
			return tradesFound;
		} else return [];
	} catch (error) {
		return error.message;
	}
};

// [El comercio que corresponde con el ID]
const searchTradeById = async (id) => {
	// FUNCIONANDO 12/03
	try {
		const tradeById = await Trade.findById(id);
		if (tradeById) {
			return tradeById;
		} else return `Vaya! Ocurrió un problema al acceder al comercio!`;
	} catch (error) {
		return error.message;
	}
};

// [Lista de categorias sin repetir para poder mapear en un select en el front]
const getAllCategories = async () => {
	// FUNCIONANDO 12/03
	try {
		const allTrades = await Trade.find({}, "category");
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

// [Lista de subcategorias sin repetir que corresponden a la categoria seleccionada]
const getSubCategories = async (category) => {
	// FUNCIONANDO 12/03
	try {
		const allTrades = await Trade.find({ category: category }, "subcategory");
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

// [Lista de zonas de delivery disponibles] [{deliveryZone: []}, {deliveryZone: []}]
const getDeliveryZones = async () => {
	// FUNCIONANDO 12/03
	try {
		const allTrades = await Trade.find({}, "deliveryZone");
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

//GET
// .metodo({filtro}, {lo que quiero mostrar(actualizar, eliminar, postear)})
// .update({filtro}, {$set:{propiedad a agregar: [{}]}})
// .update({_id:req.params},{$push:{product}} ) <---- agregar product al comercio
// .find({"propenlaquequierobuscar":"valor a buscar"}) <--- para filtrar por categoria por ejemplo
// .find({array:"valor a buscar"}) <--- para filtrar por deliveryzone por ejemplo
// const getDeliveryZone = async () => {
//   try {
//     const deliveryZones = await DeliveryZone.find();
//     return deliveryZones;
//   } catch (error) {
//     return false;
//   }
// };

// const getSubCategoriesController = async () => {
//   try {
//     const subcategories = await Subcategory.find();
//     return subcategories;
//   } catch (error) {
//     return;
//   }
// };

// const updateTradeC = async (id, trade) => {
//   try {
//     const updateTrade = Trade.findByIdAndUpdate(id, trade, { new: true });
//     return updateTrade;
//   } catch (error) {
//     return false;
//   }
// };
// const updateCategoryC = async (id, category) => {
//   try {
//     const updateCategory = Category.findByIdAndUpdate(id, category, {
//       new: true,
//     });
//     return updateCategory;
//   } catch (error) {
//     return false;
//   }
// };
// const updateDeliveryC = async (id, delivery) => {
//   try {
//     const updateDelivery = DeliveryZone.findByIdAndUpdate(id, delivery, {
//       new: true,
//     });
//     return updateDelivery;
//   } catch (error) {
//     return false;
//   }
// };

// const updateSubcategoryC = async (id, subcategory) => {
//   try {
//     const subcategory = Subcategory.findByIdAndUpdate(id, subcategory, {
//       new: true,
//     });
//     return subcategory;
//   } catch (error) {
//     return false;
//   }
// };

// // CATEGORIAS -> [strings de categorias sin repetir]
// const getAllCategories = async () => {  // Fusionada Emi
//   const categories = await Trade.find();
//   if (categories.length) {
//     const categoriesRepeats = [];
//     categories.map((t) => categoriesRepeats.push(t.category));
//     return [...new Set(categoriesRepeats)];
//   }
//   return `No se pudo recuperar la lista de categorias.`;
// };

// // SUBCATEGORIAS -> [strings de subcategorias sin repetir de la categoria buscada]
// const getSubCategories = async (category) => {  // Readecuada
//   const allTradesByCategory = await searchTradesByCategory(category);
//   const allSubcategoriesRepeats = [];
//   if (allTradesByCategory) {
//     allTradesByCategory.map((t) => allSubcategoriesRepeats.push(t.subcategory));
//     return [...new Set(allSubcategoriesRepeats)];
//   }
//   return `No se pudo recuperar la lista de subcategorias.`;
// };

// // [comercios de la categoria buscada]
// const searchTradesByCategory = async (category) => {  // Readecuada Emi
//   const allTradesByCategory = await Trade.find({ category: category });
//   if (allTradesByCategory.length) return allTradesByCategory;
//   return `No se encontraron comercios para la categoría ${category}`;
// };

// // COMERCIOS -> [comercios con reparto en esa ciudad]
// const searchTradesByZone = async (zone) => {  // Readecuada Emi
//   const alltrades = getAllTrades();
//   if (alltrades.length) {
//     const tradesByZone = alltrades.filter((t) => t.deliveryZone.includes(zone));
//     if (tradesByZone.length) {
//       return tradesByZone;
//     }
//     return `No se pudieron filtrar los comercios con delivery en ${zone}`;
//   }
//   return `No se pudieron recuperar los comercio de la base de datos`;
// };

// // COMERCIOS -> [comercios con reparto en esa ciudad y categoria seleccionada]
// const searchTradesByZoneAndCat = async (zone, category) => {            // Readecuada Emi
//   const tradeByZone = await searchTradesByZone(zone);
//   if (tradeByZone.length) {
//     const tradesByCat = tradeByZone.filter((t) => t.category === category);
//     if (tradesByCat.length) {
//       return tradesByCat;
//     }
//     return `No se pudieron filtrar los comercios con delivery en ${zone}`;
//   }
//   return tradeByZone;
// };

// // COMERCIOS -> [comercios que coinciden con la búsqueda]
// const searchTradesByZoneAndCatAndSC = async (zone, category, subcategory) => {  // Readecuada Emi
//   const tradesByZoneAndCat = await searchTradesByZoneAndCat(zone, category);
//   if (tradesByZoneAndCat.length) {
//     const tradesBySC = tradesByZoneAndCat.filter(
//       (t) => t.subcategory === subcategory
//     );
//     if (tradesBySC.length) {
//       return tradesBySC
//     }
//     return `No se pudieron filtrar los comercios con delivery en ${zone}`
//   }
//   return tradesByZoneAndCat
// };

// // COMERCIOS -> [comercios que coinciden con la búsqueda]
// const searchProductByZoneAndCatAndEpagos = (zone, category, epagos) => {
//   const tradesByCityAndCat = searchTradesByCityAndCat(deliveryCity, category);
//   let tradesByEpagos = tradesByCityAndCat.filter((x) => x.epagos === epagos);

//   if (tradesByEpagos.length) {
//     return tradesByEpagos;
//   } else if (tradesByCityAndCat.length) {
//     return `No existen comercios de ${category} con entregas en ${deliveryCity} con el método de pago seleccionado`;
//   } else
//     return `No existen comercios de ${category} con entregas en ${deliveryCity}`;
// };

// // COMERCIOS -> [comercios que coinciden con la búsqueda]
// const searchProductosByCityAndCatAndSCCAndEpagos = (deliveryCity, category, subcategory, epagos) => {
//   const tradesByCityAndCatAndSCAndEpagos = searchProductByCityAndCatAndEpagos(deliveryCity, category, epagos);
//   const tradesBySC = tradesByCityAndCatAndSCAndEpagos.filter((t) => t.subcategory === subcategory);
//   if (tradesBySC.length) {
//     return tradesBySC;
//   } else if (tradesByCityAndCatAndSCAndEpagos.length) {
//     return `No existen comercios del tipo ${
//       category + "/" + subcategory
//     } en ${deliveryCity} con el método de pago seleccionado`;
//   } else
//     return `No existen comercios del tipo ${category} en ${deliveryCity} con el método de pago seleccionado`;
// };

// // COMERCIOS -> [{comercio que coincide con ID}]
// const searchTradeById = (id) => {
//   var tradeById = [];
//   for (const category in trades[0].categories) {
//     trades[0].categories[category].map((t) =>
//       t.id == id ? tradeById.push(t) : null
//     );
//     if (tradeById.length) break;
//   }
//   return tradeById;
// };

// // [comercios de la subcategoria buscada]
// const searchTradesBySubCategory = (category, subcategory) => {
//   const tradesByCategory = searchTradesByCategory(category);
//   return tradesByCategory.filter((t) => t.subcategory === subcategory);
// };
//POST
const postCreateTrades = async (body) => {
	const { password } = body;
	try {
		newTrade = new Trade(body);

		const salt = bcrypt.genSaltSync(10);
		newTrade.password = bcrypt.hashSync(password, salt);
		await newTrade.save();

		return `Èl comercio se registró correctamente`;
	} catch (error) {
		return error.message;
	}
};

// const postCreateCategory = async (body) => {
//   try {
//     const newCategory = new Category(body);
//     await newCategory.save();
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// const postCreateDeliveryZone = async (body) => {
//   try {
//     const newDeliveryZone = new DeliveryZone(body);
//     await newDeliveryZone.save();
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// const postCreateSubcategory = async (body) => {
//   try {
//     const newSubcategory = new Subcategory(body);
//     await newSubcategory.save();
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

module.exports = {
	getAllTrades,
	searchByZone,
	searchByZoneAndCat,
	searchByZoneAndCatAndSC,
	searchByZoneAndCatAndEpagos,
	searchTradesByAll,
	searchTradeById,
	postCreateTrades,
	getAllCategories,
	getSubCategories,
	getDeliveryZones,
};
