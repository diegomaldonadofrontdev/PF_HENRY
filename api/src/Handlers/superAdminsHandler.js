const {
    postDbDataController,
} = require("../Controllers/superAdminsController")
const {trades} = require("../Auxiliares/comercios")

const data = trades

const dbDataHandlers = () => {
try {
    const posteo = postDbDataController(data)
    res.status(200).json(posteo);
} catch (error) {
    res.status(404).json({ error: `Error al cargar los comercios` })
}
}

module.exports = {
    dbDataHandlers,
}