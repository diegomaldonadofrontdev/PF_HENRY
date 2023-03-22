const Product = require("../models/Products");
const ProductCategories = require("../models/ProductCategory");
const Categories = require("../models/Categories");

// GETS
// [{producto buscado}]
const getProductById = async (id) => { // OK
  try {
    const productById = await Product.findById(id);
    if (productById) {return productById
    } else return []
  } catch (error) {
    throw new Error (`Error al buscar los productos.`)
  }  
};

// [Todos los prodcutos del comercio]
const getAllProducts = async (tradeId) => { // OK
  try {
    const allProductsOfTrade = await Product.find({tradeId: tradeId, active: true})
    if (allProductsOfTrade.length) {
      return allProductsOfTrade
    } else return `No hemos encontrado productos en el comercio.`
  } catch (error) {
    throw new Error(`Error al buscar los productos del comercio.`)
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
    const allProductsOfTrade = await Product.find({tradeId: tradeId, active:true}, "category")
    if (allProductsOfTrade.length) {
      const categoriesRepeat = []
      allProductsOfTrade.map(p => categoriesRepeat.push(p.category))
      return [...new Set(categoriesRepeat)]
    } else return `No se encontraron las categorias.`    
  } catch (error) {
    throw new Error (`Error al buscar las categorias.`)
  }
}

const getCategoriesProducts = async () => {
  try {
    const productCategories = await ProductCategories.find()
    let categoryList = []
    productCategories.forEach ((c) => categoryList.push(c.name))
    return categoryList
  } catch (error) {
    throw new Error(`Error al buscar las categorias de los productos`)
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

const updateStock = async (productId, cantidad) => { // OK
  try {
    const find = await Product.findById(productId)
    const newStock = find.stock - cantidad
    const update = await Product.findByIdAndUpdate(productId, {stock: newStock})
    if (update) return true
    return false
  } catch (error) {
    throw new Error(`Error al actualizar el stock del producto ${productId}`)
  }
}

const addStock = async (productId, newStock) => { // OK
  try {
    try {
      const find = await Product.findById(productId)
      const stock = find.stock + newStock
      const update = await Product.findByIdAndUpdate(productId, {stock: stock})
      if (update) return `Se actualizó el stock correctamente`
      return `El stock no pudo ser actualizado`
    } catch (error) {
      throw new Error(`Error al actualizar el stock del producto ${productId}`)
    }
  } catch (error) {
    
  }
}


// DELETE
const deleteProduct = async (productId) => { // OK
  try { 
    const productDeleted = await Product.deleteOne({_id: productId})
    if (productDeleted) return true
    return false
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
  getAllProductsCategories,
  getCategoriesProducts,
  createProduct,
  createProductCategory,
  updateProduct,
  updateProducts,
  deleteProduct,
  updateStock,
  addStock
}
