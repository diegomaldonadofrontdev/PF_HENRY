// const { trades } = require("../Auxiliares/comercios");
const {
  getAllTrades,
} = require("../Controllers/tradesController");
const Product = require('../models/Products');
const CategoryProduct = require('../models/CategoryProducts')

// Traemos todos los comercios mezclados
let allTrades = getAllTrades()

// Traemos todos los prodcutos mezclados
let allProducts = [];
for (let i = 0; i < allTrades.length; i++) {
  allTrades[i].productos.map(p => allProducts.push(p))
}

// // [Todos los prodcutos]
// const getAllProducts = () => {
//   return allProducts;
// };

// // [Todos los prodcutos que corresponden con la ciudad de entrega]
// const searchProductByCity = (deliveryCity) => {
//   const tradesByCity = searchTradesByCity(deliveryCity)
//   const productByCity = [];
//   for (let i = 0; i < tradesByCity.length; i++) {
//     tradesByCity[i].productos.map(t => productByCity.push(t))
//   }
//   return productByCity
// }

// // [Productos que incluyan nombre en la ciudad de entrega]
// const searchProductByCityAndName = (deliveryCity, name) => {
//   const productsByCity = searchProductByCity(deliveryCity)
//   return productsByCity.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
// }

// // [Productos que incluyan nombre en la categoria y ciudad buscada]
// const searchProductByCityAndNameAndCat = (deliveryCity, name, category) => {
//   const tradesByCityAndCat = searchTradesByCityAndCat(deliveryCity, category)

//   const productsByCityAndCat = [];
//   for (let i = 0; i < tradesByCityAndCat.length; i++) {   
//       tradesByCityAndCat[i].productos.map(p => productsByCityAndCat.push(p))
//     }  
//   return productsByCityAndCat.filter((p) =>
//     p.name.toLowerCase().includes(name.toLowerCase())
//   );
// }


// const searchProductByAll = (name, category, subcategory, deliveryCity) => {
//   const firstFilter = searchTradesByCityAndCatAndSC(
//     deliveryCity,
//     category,
//     subcategory
//   );
//   const result = [];
//   for (let i = 0; i < firstFilter.length; i++) {
//     for (let j = 0; j < firstFilter[i].productos.length; j++) {
//       result.push(firstFilter[i].productos[j]);
//     }
//   }
//   return result.filter((p) =>
//     p.name.toLowerCase().includes(name.toLowerCase())
//   );
// };

// const searchProdcutByName = (productName) => {
//   return products.filter((p) =>
//     p.name.toLowerCase().includes(productName.toLowerCase())
//   );
// };

// const searchProductByNameAndCat = (name, category) => {
//   const categoryFilter = searchProductByCat(category);
//   return categoryFilter.filter((p) =>
//     p.name.toLowerCase().includes(name.toLowerCase())
//   );
// };

// const searchProductByNameAndCatAndSC = (name, category, subcategory) => {
//   const filter = searchProductByCatAndSC(category, subcategory);
//   return filter.filter((p) =>
//     p.name.toLowerCase().includes(name.toLowerCase())
//   );
// };

// const searchProductByCatAndSC = (category, subcategory) => {
//   const tradesByCatAndSC = searchTradesBySubCategory(category, subcategory);
//   const productsfilter = [];
//   for (let i = 0; i < tradesByCatAndSC.length; i++) {
//     for (let j = 0; j < tradesByCatAndSC[i].productos.length; j++) {
//       productsfilter.push(tradesByCatAndSC[i].productos[j]);
//     }
//   }
//   return productsfilter;
// };

// const searchProductByCat = (category) => {
//   const tradesByCategory = searchTradesByCategory(category);
//   const productsfilter = [];
//   for (let i = 0; i < tradesByCategory.length; i++) {
//     for (let j = 0; j < tradesByCategory[i].productos.length; j++) {
//       productsfilter.push(tradesByCategory[i].productos[j]);
//     }
//   }
//   return productsfilter;
// };

const searchProductById = (id) => {
  const productsById = allProducts.filter((p) => p.id == id);
  return productsById;
};

const searchAllProducts = (tradeId) => {
  const trade = searchTradeById(tradeId)
  return trade[0].productos
}

const searchProductsByProductCat = (tradeId, productCategry) => { // modificar?
  const allProductsOfTrade = searchAllProducts(tradeId)
  if (allProductsOfTrade) {
    return allProductsOfTrade.filter(p => p.category === productCategry)
  } else return `El comrcio no cuenta con productos de la categoría ${productCategry}`
  
}

const searchProductByName = (tradeId, productName) => {
  const productsByTrade = searchAllProducts(tradeId)
  if (productsByTrade.length) {
    return productsByTrade.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))
  } else return `El comrcio no cuenta con el producto ${productName}`
  
}

const searchProductsByNameAndPoductCat = (tradeId, productCategry, productName) => {
  const productByName = searchProductByName(tradeId, productName)
  if (productByName.length) {
    return productByName.filter(p => p.category === productCategry)
  } else return `El comrcio no cuenta con el producto ${productName} en la categoría ${productCategry}`
  
}

module.exports = {
  searchProductsByNameAndPoductCat,
  searchProductsByProductCat,
  searchProductByName,
  searchAllProducts,
  searchProductById
}