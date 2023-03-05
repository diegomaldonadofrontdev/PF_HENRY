const { trades } = require("../Auxiliares/comerciantes");
const { searchTradesByCategory, searchTradesBySubCategory } = require("../Controllers/tradesController");

let comercios = [];
for (let i = 0; i < trades.length; i++) {
  trades[i].comercios.map((t) => comercios.push(t));
}

let products = [];
for (let i = 0; i < comercios.length; i++) {
  comercios[i].productos.map((p) => products.push(p));
}

const getAllProducts = () => {
  return products;
};

const searchProdcutByName = (name) => {
  return products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
};

const searchProductByNameAndCat = (name, category) => {
  const categoryFilter = searchProductByCat(category);
  return categoryFilter.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
};

const searchProductByNameAndCatAndSC = (name, category, subcategory) => {
  const filter = searchProductByCatAndSC(category, subcategory);
  return filter.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
};

const searchProductByCatAndSC = (category, subcategory) => {
  const tradesByCatAndSC = searchTradesBySubCategory(category, subcategory)
  const productsfilter = []
  for (let i = 0; i < tradesByCatAndSC.length; i++) {
    for (let j = 0; j < tradesByCatAndSC[i].productos.length; j++) {
      productsfilter.push(tradesByCatAndSC[i].productos[j])
    }    
  }
  return productsfilter
};

const searchProductByCat = (category) => {
  const tradesByCategory = searchTradesByCategory(category)
  const productsfilter = []
  for (let i = 0; i < tradesByCategory.length; i++) {
    for (let j = 0; j < tradesByCategory[i].productos.length; j++) {
      productsfilter.push(tradesByCategory[i].productos[j])
    }    
  }
  return productsfilter;
};

const getProductById = (id) => {
  const productsById = products.filter((p) => p.id == id);
  return productsById;
};

module.exports = {
  getAllProducts,
  searchProdcutByName,
  searchProductByNameAndCat,
  searchProductByNameAndCatAndSC,
  searchProductByCatAndSC,
  searchProductByCat,
  getProductById,
};
