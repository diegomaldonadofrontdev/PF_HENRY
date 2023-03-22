const {
	getOrderByOrderId,
	getOrdersForClient,
	getOrdersForTrade,
	createOrder,
	searchActiveOrders,
	updateOrderController,
	deleteOrder
} = require("../Controllers/ordersController");


// GETS
const getOrdersHandler = async (req, res) => {	// OK
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

const getOrderHandler = async (req, res) => {	// OK
	const { orderId } = req.params;
	try {
		const order = await getOrderByOrderId(orderId);
		res.status(200).json(order);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getActiveOrdersHandler = async (req, res) => { // OK
	const { tradeId } = req.params;
	try {
		const activeOrders = await searchActiveOrders(tradeId);
		res.status(200).json(activeOrders);
	} catch (error) {
		res.status(404).json({ Error: `Error al buscar los pedidos pendientes` });
	}
};


// POSTS
const postNewOrderHandler = async (req, res) => {	// OK
	const carrito = req.body;
	const { tradeId, clientId } = req.query;
	try {
		const newOrder = await createOrder(tradeId, clientId, carrito);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(404).json({ Error: "Error al registrar la orden" });
	}
};


// PUTS
const putOrderHandler = async (req, res) => { // ?
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


// DELETES
const deleteOrderHandler = async (req, res) => { // OK
	const {orderId} = req.params
	try {
		const orderDeleted = await deleteOrder(orderId)
		res.status(200).json(orderDeleted)
	} catch (error) {
		res.status(400).json({Error: error.message})
	}
}

module.exports = {
	getOrdersHandler,
	getOrderHandler,
	postNewOrderHandler,
	getActiveOrdersHandler,
	putOrderHandler,
	deleteOrderHandler
};
