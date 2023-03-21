// const { trades } = require("../Auxiliares/comercios");
const { getAllTrades } = require("../Controllers/tradesController");
const Trade = require("../models/Trades");
const Product = require("../models/Products");
const ProductCategories = require("../models/ProductCategory");

// GETS
// [{producto buscado}]
const getProductById = async (id) => {
	// FUNCIONANDO 12/03
	try {
		const productById = await Product.findById(id);
		if (productById !== null) {
			return productById;
		} else return [];
	} catch (error) {
		return error.message;
	}
};

// [Todos los prodcutos del comercio]
const getAllProducts = async (tradeId) => {
	// FUNCIONANDO 12/03
	try {
		const allProductsOfTrade = await Product.find({
			tradeId: tradeId,
			active: true,
		});
		if (allProductsOfTrade.length) {
			return allProductsOfTrade;
		} else
			return `Vaya! Parece que el comercio no tiene ningún producto en este momento!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los productos de un comercio que coinciden con la categoria del producto]
const searchByProductCat = async (tradeId, productCategory) => {
	// FUNCIONANDO 12/03
	try {
		const allProductsOfTrade = await Product.find({
			tradeId: tradeId,
			category: productCategory,
		});
		if (allProductsOfTrade.length) {
			return allProductsOfTrade;
		} else
			return `Vaya! Parece que el comercio no tiene ningún producto de la categoría ${productCategory}!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los productos de un comercio que incluyen en su nombre el nombre enviado]
const searchByName = async (tradeId, productName) => {
	// FUNCIONANDO 12/03
	try {
		const allProductsOfTrade = await Product.find({ tradeId: tradeId });
		if (allProductsOfTrade.length) {
			return allProductsOfTrade.filter((p) =>
				p.name.toLowerCase().includes(productName.toLowerCase())
			);
		} else
			return `Vaya! Parece que no hay productos con el nombre ${productName}!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los productos de un comercio que coinciden con la categoria del producto e incluyen el nombre]
const searchByNameAndPoductCat = async (
	tradeId,
	productCategory,
	productName
) => {
	// FUNCIONANDO 12/03
	try {
		const allProductsOfTrade = await Product.find({
			tradeId: tradeId,
			category: productCategory,
		});
		if (allProductsOfTrade.length) {
			return allProductsOfTrade.filter((p) =>
				p.name.toLowerCase().includes(productName.toLowerCase())
			);
		} else
			return `Vaya! Parece que no hay productos con el nombre ${productName}!`;
	} catch (error) {
		return error.message;
	}
};

// [Todas las categorias de productos existentes del comercio]
const getAllProductsCategories = async (tradeId) => {
	// FUNCIONANDO 12/03
	try {
		const allProductsOfTrade = await Product.find(
			{ tradeId: tradeId },
			"category"
		);
		if (allProductsOfTrade.length) {
			const categoriesRepeat = [];
			allProductsOfTrade.map((p) => categoriesRepeat.push(p.category));
			return [...new Set(categoriesRepeat)];
		} else
			return `Vaya! Parece que hubo un problema al buscar en la base de datos!`;
	} catch (error) {
		return error.message;
	}
};

// POSTS
const createProduct = async (tradeId, body) => {
	// FUNCIONANDO
	try {
		const { id, ...rest } = body;
		const newProduct = new Product(rest);
		newProduct.tradeId = tradeId;
		await newProduct.save();
		return newProduct;
	} catch (error) {
		return error.message;
	}
};

const createProductCategory = async (productCat) => {
	try {
		const newCategory = new ProductCategories(productCat);
		await newCategory.save();
		return true;
	} catch (error) {
		return error.message;
	}
};

// PUTS
const updateProduct = async (productId, body) => {
	try {
		console.log(body);
		const productUpdate = await Product.findByIdAndUpdate(productId, body);
		if (productUpdate) return true;
		return false;
	} catch (error) {
		return error.message;
	}
};

// DELETE
const deleteProduct = async (productId) => {
	// PROBAR
	try {
		const productDeleted = await Product.deleteOne({ _id: productId });
		return true;
	} catch (error) {
		return error.message;
	}
};

module.exports = {
	searchByNameAndPoductCat,
	searchByProductCat,
	searchByName,
	getAllProducts,
	getProductById,
	createProduct,
	getAllProductsCategories,
	createProductCategory,
	updateProduct,
	deleteProduct,
};
