// const { searchProductByName } = require("../Controllers/productController");

var mercadopago = require('mercadopago');
const { CreatePreferencePayload, PreferencePayer, PreferenceBackUrl } = require("mercadopago/models/preferences/create-payload.model")

const { users } = require("./clientsHandler");
const products = [{ name: "producto1", price: "2500" }, { name: "producto2", price: "3500" }, { name: "producto3", price: "4500" }]

// mercadopago.configure({
//     access_token: 'TEST_USER_932263551'
// });
// var preference = {
//     items: []
// };

// const searchProductByName = (name) => {
//     const productsByName = allProducts.filter((p) => p.name == name);
//     if (productsByName.name) {
//         preference.items.push({
//             title: productsById.name,
//             quantity: 1,
//             unit_price: productsById.price
//         })
//     }
//     return productsById;
// };


const searchProduct = (name) => {
    const productsByName = products.find(p => p.name === name)
    if (productsByName.name) {
        preference.items.push({
            title: productsByName.name,
            quantity: 1,
            unit_price: productsByName.price
        })
    }
    return productsByName;
};

const paymentsHandler = async (req, res) => {

    mercadopago.configure({
        access_token: 'TEST-1066540883101610-030911-deb7dfe78a0cb28c3c9cddfe554a4054-753764477'
    });
    var preference = {
        items: []
    };

    const { username, password, name } = req.body;

    let product = searchProduct(name);
    let searhcUser = users.find(u => u.username === username && u.password === password);

    if (!product) res.status(404).json("No se encontro el producto");
    if (!searhcUser) res.status(404).json("No se encontro el usuario");

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.status(200).json({ global: response.body.name })
        })
        .catch((error) => {
            // In an error appears, we'll send the error.
            res.status(500).json({ global: error })
        })



}

const notificacion = (req, res) => {
    console.log(req.body);
    res.status(200).send("OK");
}

module.exports = {
    paymentsHandler,
    notificacion
}


// mercadopago.preferences.create(preference)
//     .then(function (response) {
//         res.status(200).json({ global: response.body.id })
//     })
//     .catch((error) => {
//         // In an error appears, we'll send the error.
//         res.status(500).json({ global: error })
//     })