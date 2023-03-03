const {trades} = require ("../Auxiliares/comerciantes")



const getAllProducts = () => {
  return products;
};

const searchProdcutByName = (name) => {
  const productsByName = comercios.filter(p => p.name === name);
  return productsByName;
};

const searchProductByCategory = (category) => {
  const productsByCategory = comercios.filter(p => p.category === category);
  return productsByCategory;
};

const getProductById = (id) => {
  const productsById = comercios.filter((p => p.id) === id);
  return productsById;
};

module.exports = {
  getAllProducts,
  searchProdcutByName,
};
