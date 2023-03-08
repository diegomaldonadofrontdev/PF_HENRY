// const { trades } = require("../Auxiliares/comerciantes");
const { trades } = require("../Auxiliares/comercios");


// CATEGORIAS -> [strings de categorias sin repetir]
const getAllCategories = () => {
  return Object.keys(trades[0].categories)  
  
};

// SUBCATEGORIAS -> [strings de subcategorias sin repetir de la categoria buscada]
const getSubCategories = (category) => {
  const tradesByCategory = searchTradesByCategory(category);
  const subcategories = [];
  for (let i = 0; i < tradesByCategory.length; i++) {
    subcategories.push(tradesByCategory[i].subcategory)      
    }    
  return [... new Set(subcategories)];
};

// COMERCIOS -> [Todos los comercios de todas las categorias]
const getAllTrades = () => {
  const allTrades = []
  for (const trade in trades[0].categories) {
    trades[0].categories[trade].map(t => allTrades.push(t))
    }  
  return allTrades;
};

// COMERCIOS -> [comercios con reparto en esa ciudad]
const searchTradesByCity = (deliveryCity) => {
  const tradeByCity = [];
  for (const trade in trades[0].categories) {
    trades[0].categories[trade].map(t => t.deliveryzone.includes(deliveryCity) ? tradeByCity.push(t) : null)
  }
  return tradeByCity;
}
// COMERCIOS -> [comercios con reparto en esa ciudad y categoria seleccionada]
const searchTradesByCityAndCat = (deliveryCity, category) => {
  const tradeByCat = searchTradesByCategory(category);
  const tradesByCity = []
  for (let i = 0; i < tradeByCat.length; i++) {
    tradeByCat[i].deliveryzone.map(c => c === deliveryCity ? tradesByCity.push(tradeByCat[i]) : null)
  }
  if (tradesByCity.length) {
    return tradesByCity
  } else return `No existen comercios de ${category} con entregas en ${deliveryCity}` 
};

// COMERCIOS -> [comercios que coinciden con la búsqueda]
const searchTradesByCityAndCatAndSC = (deliveryCity, category, subcategory) => {
  const tradesByCityAndCat = searchTradesByCityAndCat(deliveryCity, category);
  const tradesBySC = tradesByCityAndCat.filter((t) => t.subcategory === subcategory)
  if (tradesBySC.length) {
    return tradesBySC
  } else return `No existen comercios de ${category+"/"+subcategory} con entregas en ${deliveryCity}`  
};

// COMERCIOS -> [comercios que coinciden con la búsqueda]
const searchProductByCityAndCatAndEpagos = (deliveryCity, category, epagos) => {
  const tradesByCityAndCat = searchTradesByCityAndCat(deliveryCity, category);
  let tradesByEpagos = tradesByCityAndCat.filter(x => x.epagos === epagos)
  
  if (tradesByEpagos.length) {
    return tradesByEpagos
  } else if (tradesByCityAndCat.length) {
    return `No existen comercios de ${category} con entregas en ${deliveryCity} con el método de pago seleccionado`
  } else return `No existen comercios de ${category} con entregas en ${deliveryCity}`
}

// COMERCIOS -> [comercios que coinciden con la búsqueda]
const searchProductosByCityAndCatAndSCCAndEpagos = (deliveryCity, category, subcategory, epagos) => {
  const tradesByCityAndCatAndSCAndEpagos = searchProductByCityAndCatAndEpagos(deliveryCity, category, epagos);
  const tradesBySC = tradesByCityAndCatAndSCAndEpagos.filter((t) => t.subcategory === subcategory)
  if (tradesBySC.length) {
    return tradesBySC
  } else if (tradesByCityAndCatAndSCAndEpagos.length) {
    return `No existen comercios del tipo ${category+"/"+subcategory} en ${deliveryCity} con el método de pago seleccionado`
  } else return `No existen comercios del tipo ${category} en ${deliveryCity} con el método de pago seleccionado` 
};

// COMERCIOS -> [{comercio que coincide con ID}]
const searchTradeById = (id) => {
  var tradeById = [];
  for (const category in trades[0].categories) {
    trades[0].categories[category].map(t => t.id == id ? tradeById.push(t) : null)
    if (tradeById.length) break     
  }
  return tradeById;
};

// [comercios de la categoria buscada]
const searchTradesByCategory = (category) => {
  return trades[0].categories[category]
};

// // [comercios de la subcategoria buscada]
// const searchTradesBySubCategory = (category, subcategory) => {
//   const tradesByCategory = searchTradesByCategory(category);
//   return tradesByCategory.filter((t) => t.subcategory === subcategory);  
// };



module.exports = {
  searchProductosByCityAndCatAndSCCAndEpagos,
  searchProductByCityAndCatAndEpagos,
  searchTradesByCityAndCatAndSC,
  searchTradesByCityAndCat,
  searchTradesByCity,  
  getAllTrades,
  searchTradeById,
  getAllCategories,
  getSubCategories,  
};
