const {
    createTradesInDb,
    createProductsInDB,
} = require("../Controllers/superAdminsController")
const {trades} = require("../Auxiliares/comercios")
const {products} = require ("../Auxiliares/products")

const tradesInDbHandlers = async (req, res) => {
try {
    const posteo = await createTradesInDb(trades)
    res.status(200).json(posteo);
} catch (error) {
    res.status(404).json({ error: `Error al cargar los comercios` })
}
}

const productsInDbHandlers = async (req, res) => {
    try {
        const posteo = await createProductsInDB(products)
    res.status(200).json(posteo);
    } catch (error) {
        
    }
}

module.exports = {
    tradesInDbHandlers,
    productsInDbHandlers
}