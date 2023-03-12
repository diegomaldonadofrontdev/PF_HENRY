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

// [Todos los prodcutos del comercio]
const searchAllProducts = async (tradeId) => { // FUNCIONANDO 12/03
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade
    } else return `Vaya! Parece que el comercio no tiene ningún producto en este momento!`
  } catch (error) {
    return error.message
  }  
}

// [Todos los productos de un comercio que coinciden con la categoria del producto]
const searchByProductCat = async (tradeId, productCategory) => { // FUNCIONANDO 12/03
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId, category: productCategory})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade
    } else return `Vaya! Parece que el comercio no tiene ningún producto de la categoría ${productCategory}!`      
  } catch (error) {
    return error.message
  }  
}

// [Todos los productos de un comercio que incluyen en su nombre el nombre enviado]
const searchByName = async (tradeId, productName) => { // FUNCIONANDO 12/03
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))
    } else return `Vaya! Parece que no hay productos con el nombre ${productName}!`
  } catch (error) {
    return error.message
  }
  
}

// [Todos los productos de un comercio que coinciden con la categoria del producto e incluyen el nombre]
const searchByNameAndPoductCat = async (tradeId, productCategory, productName) => { // FUNCIONANDO 12/03
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId, category: productCategory})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))
    } else return `Vaya! Parece que no hay productos con el nombre ${productName}!`      
  } catch (error) {
    return error.message
  }  
}

// [Todas las categorias de productos existentes del comercio]
const getAllProductsCategories = async (tradeId) => { // FUNCIONANDO 12/03
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId}, "category")
    if (allProductsOfTrade.length) {
      const categoriesRepeat = []
      allProductsOfTrade.map(p => categoriesRepeat.push(p.category))
      return [...new Set(categoriesRepeat)]
    } else return `Vaya! Parece que hubo un problema al buscar en la base de datos!`    
  } catch (error) {
    return error.message
  }

}

const postCreateProduct = async (id, body) => { //*
  try {
    const newProduct =  new Product(body);
    newProduct.tradeId = id
    await newProduct.save()
    // const addNewProdcut = await Trade.findByIdAndUpdate({ _id : id }, {$push:{ products: productNew }})
    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  searchByNameAndPoductCat,
  searchByProductCat,
  searchByName,
  searchAllProducts,
  searchProductById,
  postCreateProduct,
  getAllProductsCategories
}