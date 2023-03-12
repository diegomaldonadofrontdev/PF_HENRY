const Product = require('../models/Products');
const {postCreateTrades} = require("./tradesController")



const createTradesInDb = async (trades) => {
    try {
        for (let i = 0; i < trades.length; i++) {            
          await postCreateTrades(trades[i])
        }   
        console.log("Comercios cargados!");
        return `Los comercios se cargaron correctamente`;
      } catch (error) {
        return error.message;
      }
    }

const createProduct = async (product) => {
  const newProduct =  new Product(product);
  await newProduct.save()
}

const createProductsInDB = async (products) => {
try {
  for (let i = 0; i < products.length; i++) {
    await createProduct(products[i])
  }
  console.log("Productos cargados!");
  return `Los productos se cargaron correctamente`;
} catch (error) {
  return error.message;
}
}

    module.exports = {
      createTradesInDb,
      createProductsInDB
    }