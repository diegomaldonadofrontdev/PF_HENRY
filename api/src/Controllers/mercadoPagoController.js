require("dotenv").config();

const { ACCESS_TOKEN_MP } = process.env;

const mercadopago = require("mercadopago");

mercadopago.configure({ access_token: ACCESS_TOKEN_MP });

const mercadoPagoController = async (req, res) => { // ok.
	const carrito = req.body;

	const { idCommerce, idUser } = req.query;
	try {
		if (carrito.length) {
			const product = carrito.map((x) => ({
				title: x.name,
				quantity: x.cantidad,
				unit_price: x.price,
			}));

			let preference = {
				items: product,
				external_reference: `/pedidos`,
				notification_url: "https://hookb.in/VGLVqnXx0qHDrgoorlzJ",
				payment_methods: {
					excluded_payment_types: [
						{
							id: "ticket",
						},
					],
					excluded_payment_methods: [
						{
							id: "atm",
						},
					],
					installments: 1,
					default_payment_method_id: "visa",
					default_installments: 1,
				},
				back_urls: {
					success: "https://pf-henry-two.vercel.app/responsepayment/success",
					failure: "http://localhost:3000/responsepayment/failure",
					pending: "http://localhost:3000/responsepayment/pending",
				},
				auto_return: "approved",
			};

			mercadopago.preferences
				.create(preference)
				.then(function (response) {
					res.send({
						id: response.body.id,
						product: "Lista de pedidos",
						sandbox: response.body.sandbox_init_point,
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			res.status(400).send("CARRITO VACIO");
		}
	} catch {}
};

module.exports = {
	mercadoPagoController,
};
