const {
	getOrderByOrderId,
	getOrdersForClient,
	getOrdersForTrade,
	createOrder,
	searchActiveOrders,
	updateOrderController,
} = require("../Controllers/ordersController");

const getOrdersHandler = async (req, res) => {	// FUNCIONANDO
	const { clientId, tradeId } = req.query;
	let orders;
	try {
		if (clientId) {
			orders = await getOrdersForClient(clientId);
		}
		if (tradeId) {
			orders = await getOrdersForTrade(tradeId);
		}
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ Error: "Error al obtener las órdenes" });
	}
};

const getOrderHandler = async (req, res) => {
	// FUNCIONANDO
	const { orderId } = req.params;
	try {
		const order = await getOrderByOrderId(orderId);
		res.status(200).json(order);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getActiveOrdersHandler = async (req, res) => {
	const { tradeId } = req.params;
	try {
		const activeOrders = await searchActiveOrders(tradeId);
		res.status(200).json(activeOrders);
	} catch (error) {
		res.status(404).json({ Error: `Error al buscar los pedidos pendientes` });
	}
};

const postNewOrderHandler = async (req, res) => {
	// FUNCIONANDO
	const carrito = req.body;

	const { tradeId, clientId } = req.query;
	console.log("TRADEID=", tradeId);
	try {
		const newOrder = await createOrder(tradeId, clientId, carrito);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(404).json({ Error: "Error al registrar la orden" });
	}
};

const updateOrderHandler = async (req, res) => {
	const { payment, status } = req.body;
	const { orderId } = req.params;

	try {
		let resUpdate;
		if (payment) {
			resUpdate = await updateOrderController(orderId, payment, null);
		}
		if (status) {
			resUpdate = await updateOrderController(orderId, null, status);
		}
		if (resUpdate) {
			res.status(200).send("Actualizado");
		} else {
			res.status(400).send("Problemas actualizando");
		}
	} catch (error) {
		res
			.status(404)
			.json(`Problema de actualización en la orden nro ${orderId}`);
	}
};

// const putOrderHandler = async (req, res) => { // <--------- VER PARA LOS COMERCIOS, EL CLIENTE NO PUEDE ACTUALIZAR EL PEDIDO
//   const { orderId } = req.params;
//   try {
//     const order = await updateOrderC(id, req.body)
//     res.status(200).json(`Se actualizo la orden`)
//   } catch (error) {
//     res.status(404).json(`Error al actualizar la orden`)
//   }
// }

module.exports = {
	getOrdersHandler,
	getOrderHandler,
	postNewOrderHandler,
	getActiveOrdersHandler,
	updateOrderHandler,
};
