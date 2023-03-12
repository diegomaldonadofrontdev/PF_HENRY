// const { trades } = require("../Auxiliares/comercios");
const {
  getAllTrades,
} = require("../Controllers/tradesController");
const Trade = require('../models/Trades')
const Product = require('../models/Products');

// [{producto buscado}]
const searchProductById = async (id) => { // FUNCIONANDO 12/03
  const productById = await Product.findById(id);
  return productById;
};

const searchAllProducts = (tradeId) => {
  const trade = searchTradeById(tradeId)
  return trade[0].productos
}

const searchProductsByProductCat = (tradeId, productCategry) => { // modificar?
  const allProductsOfTrade = searchAllProducts(tradeId)
  if (allProductsOfTrade) {
    return allProductsOfTrade.filter(p => p.category === productCategry)
  } else return `El comercio no cuenta con productos de la categoría ${productCategry}`
  
}

const searchProductByName = (tradeId, productName) => {
  const productsByTrade = searchAllProducts(tradeId)
  if (productsByTrade.length) {
    return productsByTrade.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))
  } else return `El comercio no cuenta con el producto ${productName}`
  
}

const searchProductsByNameAndPoductCat = (tradeId, productCategry, productName) => {
  const productByName = searchProductByName(tradeId, productName)
  if (productByName.length) {
    return productByName.filter(p => p.category === productCategry)
  } else return `El comercio no cuenta con el producto ${productName} en la categoría ${productCategry}`
  
}

const postCreateProduct = async (body) => {
  try {
    const productNew =  new Product(body);
    const savedProduct = await productNew.save()
    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  searchProductsByNameAndPoductCat,
  searchProductsByProductCat,
  searchAllProducts,
  searchProductById,
  postCreateProduct,
}