const jwt = require("jsonwebtoken");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";

const { searchTradeBossExist,
    validatePasswordTradeBoss,
    searchTradeBoss,
    registerTradeBoss } = require("../Controllers/tradeBossController");

// GET HANDLERS 
const getTradeBossHandler = async (req, res) => {

}


// POST HANDLERS 

const loginTradeBossHandler = async (req, res) => {
    const { email, password } = req.query;

    const findEmail = await searchTradeBossExist(email);
    if (!findEmail) res.status(404).json("No existe el comerciante");

    const validate = await validatePasswordTradeBoss(email, password);
    if (!validate) res.status(404).json("Contraseña incorrecta");

    const tradeBossBDD = await searchTradeBoss(email);

    try {
        const token = jwt.sign(
            { email: tradeBossBDD.email },
            TOKEN_KEY,
            { expiresIn: "2h" }
        )
        res.status(200).json([tradeBossBDD, { token: token }])
    } catch (error) {
        res.status(400).json("Error al inciar sesion")
    }
}

const postTradeBossHandler = async (req, res) => {
    const tradeBoss = req.body;
    try {
        const token = jwt.sign(
            { email: tradeBoss.email },
            TOKEN_KEY,
            { expiresIn: "2h" }
        )
        const tradeBossBDD = await registerTradeBoss(tradeBoss)
        res.status(200).json([tradeBossBDD, { token: token }])
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const registerWhitGoogleTradeBosshandler = async (req, res) => {
    res.status(200).json("TODO OK")
}

module.exports = {
    getTradeBossHandler,
    loginTradeBossHandler,
    postTradeBossHandler,
    registerWhitGoogleTradeBosshandler
}