const { trades } = require("../Auxiliares/comerciantes");

let comercios = []
for (let i = 0; i < trades.length; i++) {
  comercios = [...comercios, trades[i].comercios]
}

const getAllProducts = () => {
  return products;
};

const searchProductByNameAndSC = (trade, subcategory) => {
  const result = comercios.filter(t => t.commerceName === trade)
  result.length 
  ? result.filter(t => t.subcategory === subcategory) 
  : "No fue posible encontrar el comercio que buscaba!"
}

const searchProdcutByName = (name) => {
  const productsByName = comercios.filter(p => p.name.toLowerCase === name.toLowerCase);
  return productsByName;
};

const searchProductBySubcategory = (subcategory) => {
  const productsByCategory = comercios.filter(p => p.subcategory === subcategory);
  return productsByCategory;
};

const getProductById = (id) => {
  const productsById = comercios.filter((p => p.id) === id);
  return productsById;
};

module.exports = {
  getAllProducts,
  searchProdcutByName,
  searchProductBySubcategory,
  getProductById,
  searchProductByNameAndSC
};
