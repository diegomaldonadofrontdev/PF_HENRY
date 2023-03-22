const {
    createTradesInDb,
    createProductsInDB,
} = require("../Controllers/superAdminsController")
const {trades} = require("../Auxiliares/comercios")
const {products} = require ("../Auxiliares/products")

// RELLENADO DE BASE DE DATOS
// Comercios
const tradesInDbHandlers = async (req, res) => { // OK.
try {
    const posteo = await createTradesInDb(trades)
    res.status(200).json(posteo);
} catch (error) {
    res.status(404).json({ Error: error.message })
}
}
// Productos
// La fn toma los productos y los crea en la base de datos.
// es necesario asignarle en products el id del comercio al que pertenecen una vez creados los comercios
const productsInDbHandlers = async (req, res) => { // OK.
    try {
        const posteo = await createProductsInDB(products)
    res.status(200).json(posteo);
    } catch (error) {
        res.status(404).json({Error: error.message})
    }
}

// COMERCIOS
// Busqueda por nombre



module.exports = {
    tradesInDbHandlers,
    productsInDbHandlers,    
}