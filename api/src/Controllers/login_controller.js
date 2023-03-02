const { Model1 } = require("../db");
const axios = require("axios");

const login = async (req,res) => {
    res.json({
        msg: "Ingresaste de manera correcta"
    })
}

module.exports = login;