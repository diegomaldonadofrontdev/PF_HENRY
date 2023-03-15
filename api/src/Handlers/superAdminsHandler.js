const {
    createTradesInDb,
    createProductsInDB,
    deleteProduct,
} = require("../Controllers/superAdminsController")
const {trades} = require("../Auxiliares/comercios")
const {products} = require ("../Auxiliares/products")

// POST
// La fn toma de trades los comercios y los crea en la base de datos
const tradesInDbHandlers = async (req, res) => {
try {
    const posteo = await createTradesInDb(trades)
    res.status(200).json(posteo);
} catch (error) {
    res.status(404).json({ error: `Error al cargar los comercios` })
}
}

// La fn toma los productos y los crea en la base de datos.
// es necesario asignarle en products el id del comercio al que pertenecen una vez creados los comercios
const productsInDbHandlers = async (req, res) => {
    try {
        const posteo = await createProductsInDB(products)
    res.status(200).json(posteo);
    } catch (error) {
        
    }
}

//DELETE
const deleteProductofDb = async (req, res) => {
    const {id} = req.params
    try {
        const deleted = await deleteProduct(id)
        res.status(200).json(`El comercio ${id} ${deleted.commerceName} ha sido eliminado de la base de datos`)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    tradesInDbHandlers,
    productsInDbHandlers,
    deleteProductofDb
}