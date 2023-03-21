const Product = require("../models/Products");
const ProductCategories = require("../models/ProductCategory");

// GETS
// [{producto buscado}]
const getProductById = async (id) => { // OK
  try {
    const productById = await Product.findById(id);
    if (productById !== null) {
      return productById;
    } else return []
  } catch (error) {
    return error.message
  }
  
};

// [Todos los prodcutos del comercio]
const getAllProducts = async (tradeId) => { // OK
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId, active: true})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade
    } else return `Vaya! Parece que el comercio no tiene ningún producto en este momento!`
  } catch (error) {
    return error.message
  }  
}

// [Todos los productos de un comercio que coinciden con la categoria del producto]
const searchByProductCat = async (tradeId, productCategory) => { // OK
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
const searchProductByName = async (tradeId, name) => { // OK
	try {
		let productFound = await Product.find({tradeId: tradeId})    
    if (productFound.length) {
      let productCoincidence = productFound.filter((t) => t.name.toLowerCase().includes(name.toLowerCase()))
      console.log(productCoincidence);
      if (productCoincidence.length) return productCoincidence
      return `No se encontraron comercios.`
    } return `No se encontraron productos que pertenezcan al comercio.`
	} catch (error) {
		throw new Error(`Ocurrió un problema al buscar los productos.`)
	}
}

// [Todos los productos de un comercio que coinciden con la categoria del producto e incluyen el nombre]
const searchByNameAndPoductCat = async (tradeId, productCategory, productName) => { // OK
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
const getAllProductsCategories = async (tradeId) => { // OK
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

// POSTS
const createProduct = async (id, body) => { // OK
  try {
    const newProduct =  new Product(body);
    newProduct.tradeId = id
    await newProduct.save()  
    return `El producto ${body.name} se creo correctamente`
  } catch (error) {
    return error.message
  }
}

const createProductCategory = async (productCat) => { // OK
  try {
    const newCategory = new ProductCategories(productCat);    
    await newCategory.save()
	return true;
  } catch (error) {
    return error.message
  }
}

// PUTS
const updateProduct = async (productId, body) => {  // OK
  try {
    const productUpdate = await Product.findByIdAndUpdate(productId, body, { new: true })
    if (productUpdate) return true
    return false
  } catch (error) {
    return error.message
  }
}

const updateProducts = async (body) => {  // OK
  try {
    const productUpdate = await Product.updateMany({}, body)
    if (productUpdate) return `Productos actualizados`
    return `Problema al actualizar los productos`
  } catch (error) {
    return error.message
  }
}


// DELETE
const deleteProduct = async (productId) => { // OK
  try { 
    const productDeleted = await Product.deleteOne({_id: productId})
    return true
  } catch (error) {
    return error.message
  }
}

module.exports = {
  searchByNameAndPoductCat,
  searchByProductCat,
  searchProductByName,
  getAllProducts,
  getProductById,
  createProduct,
  getAllProductsCategories,
  createProductCategory,
  updateProduct,
  updateProducts,
  deleteProduct,
}
