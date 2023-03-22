const mercadopago = require("mercadopago");
mercadopago.configure({ access_token: "TEST-1066540883101610-030911-deb7dfe78a0cb28c3c9cddfe554a4054-753764477" })

const products = [
    {
        id: 111,
        name: "pizza",
        category: "comida",
        description: "pizza extra grande",
        price: 5000,
        image: "https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png",
        rating: 5,
        stock: 1
    },
    {
        id: 222,
        name: "hamburguesa",
        category: "comida",
        description: "hamburguesa triple carne",
        price: 15000,
        image: "https://img2.freepng.es/20180328/vlq/kisspng-cheeseburger-bacon-hamburger-wrap-hot-dog-bacon-5abba6a0b0b5c8.9053149315222473287238.jpg",
        stock: 1
    },
]

const paymentsHandler = (req, res) => { // ok.

    const { name } = req.body;
    let searhProduct = products.find(p => p.name === name);

    let preference = {
        items: [
            {
                id: searhProduct.id,
                title: searhProduct.name,
                current_id: 'ARS',
                picture_url: searhProduct.image,
                category_id: 'art',
                quantity: searhProduct.stock,
                unit_price: searhProduct.price
            }
        ],
        back_urls: {
            success: 'http://localhost:3000/payments',
            failure: '',
            pending: '',
        },
        auto_return: 'approved',
        binary_mode: true
    }
    mercadopago.preferences.create(preference)
        .then((response) => res.status(200).send({ response }))
        .catch((error) => res.status(400).send({ error: error.message }))
}

const getProducts = (req, res) => { // ok.
    try {
        if(!products.length) return res.status(404).json({message: "No se encontraron productos"})
        return res.status(200).json(products)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    paymentsHandler,
    getProducts
};