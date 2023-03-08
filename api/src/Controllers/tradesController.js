// const { trades } = require("../Auxiliares/comerciantes");
const { trades } = require("../Auxiliares/comercios");


// [Todos los comercios de todas las categorias]
const getAllTrades = () => {
  const allTrades = []
  for (const trade in trades[0].categories) {
    trades[0].categories[trade].map(t => allTrades.push(t))
    }  
  return allTrades;
};

// [comercios que coinciden con la búsqueda]
const searchProductosByCityAndCatAndSCCAndEpagos = (deliveryCity, category, subcategory, epagos) => {
  const tradesByCityAndCatAndSCAndEpagos = searchProductByCityAndCatAndEpagos(deliveryCity, category, epagos);
  const tradesBySC = tradesByCityAndCatAndSCAndEpagos.filter((t) => t.subcategory === subcategory)
  tradesBySC.length
  ? tradesBySC
  : tradesByCityAndCatAndSCAndEpagos.length
  ? `No existen comercios del tipo ${category} en ${deliveryCity} con el método de pago seleccionado`
  : `No existen comercios del tipo ${category+"/"+subcategory} en ${deliveryCity} con el método de pago seleccionado`
};

// [comercios que coinciden con la búsqueda]
const searchProductByCityAndCatAndEpagos = (deliveryCity, category, epagos) => {
  const tradesByCityAndCat = searchTradesByCityAndCat(deliveryCity, category);
  const tradesByEpagos = []
  for (let i = 0; i < tradesByCityAndCat.length; i++) {
    tradesByCityAndCat[i].epagos === epagos 
    ? tradesByEpagos.push(tradesByCityAndCat[i]) 
    : null    
  }
  tradesByEpagos.length
  ? tradesByEpagos
  : tradesByCityAndCat.length
  ? `No existen comercios de ${category} con entregas en ${deliveryCity}`
  : `No existen comercios de ${category} con entregas en ${deliveryCity} con el método de pago seleccionado`  
}
 

// [comercios de la categoria buscada]
const searchTradesByCategory = (category) => {
  return trades[0].categories[category]
};

// [comercios de la subcategoria buscada]
const searchTradesBySubCategory = (category, subcategory) => {
  const tradesByCategory = searchTradesByCategory(category);
  return tradesByCategory.filter((t) => t.subcategory === subcategory);  
};

// [comercios que coinciden con la búsqueda]
const searchTradesByCityAndCatAndSC = (deliveryCity, category, subcategory) => {
  const tradesByCatAndSC = searchTradesBySubCategory(category, subcategory);
  const tradesByCity = tradesByCatAndSC.filter((t) => t.deliveryzone.includes(deliveryCity))
  tradesByCity.length
  ? tradesByCity
  : `No existen comercios de ${category+"/"+subcategory} con entregas en ${deliveryCity}`
};

// [comercios con reparto en esa ciudad y categoria seleccionada]
const searchTradesByCityAndCat = (deliveryCity, category) => {
  const tradeByCat = searchTradesByCategory(category);
  const tradesByCity = tradeByCat.filter((t) => t.deliveryzone.includes(deliveryCity));
  tradesByCity.length
  ? tradesByCity
  : `No existen comercios de ${category} con entregas en ${deliveryCity}`
  
};

// [comercios con reparto en esa ciudad]
const searchTradesByCity = (deliveryCity) => {
  const tradeByCity = [];
  for (const trade in trades[0].categories) {
    trades[0].categories[trade].map(t => t.deliveryzone.includes(deliveryCity) ? tradeByCity.push(t) : null)
    }
    return tradeByCity;
  }

// [{comercio que coincide con ID}]
const searchTradeById = (id) => {
  var tradeById = [];
  for (const category in trades[0].categories) {
    trades[0].categories[category].map(t => t.id == id ? tradeById.push(t) : null)
    if (tradeById.length) break     
  }
  return tradeById;
};

// [strings de categorias sin repetir]
const getAllCategories = () => {
  return Object.keys(trades[0].categories)  
  
};

// [strings de subcategorias sin repetir de la categoria buscada]
const getSubCategories = (category) => {
  const tradesByCategory = searchTradesByCategory(category);
  const subcategories = [];
  for (let i = 0; i < tradesByCategory.length; i++) {
    subcategories.push(tradesByCategory[i].subcategory)      
    }    
  return [... new Set(subcategories)];
};

module.exports = {
  searchProductosByCityAndCatAndSCCAndEpagos,
  searchProductByCityAndCatAndEpagos,
  searchTradesByCityAndCatAndSC,
  searchTradesByCityAndCat,
  searchTradesByCity,
  searchTradesByCategory,
  getAllTrades,
  searchTradeById,
  getAllCategories,
  getSubCategories,
  searchTradesBySubCategory,
};
