const Order = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require("../Helpers/emailCreateOrder");
const Clients = require("../models/Clients");
const sendMailOrderTrade = require("../Helpers/emailCreateOrderTrade");
const ObjectId = require("mongoose").ObjectId;

const getOrdersForClient = async (clientId) => {
	// FUNCIONANDO
	try {
		const orders = await Order.find({ clientId: clientId });
		const ordersCompilated = [];
		if (orders.length) {
			for (let i = 0; i < orders.length; i++) {
				const trade = await Trade.findById(orders[i].tradeId, "commerceName");
				let total = 0;
				ordersCompilated.push({
					orderId: orders[i]._id,
					createdAt: new Date(orders[i].createdAt),
					commerceName: trade.commerceName,
					status: orders[i].status,
					products: orders[i].products.map((x) => {
						total += x.cantidad * x.price;
						return x;
					}),
					total: total,
				});
			}

			return ordersCompilated;
		} else return `No se encontraron pedidos con su usuario`;
	} catch (error) {
		return error.message;
	}
};

const getOrdersForTrade = async (tradeId) => {
	try {
		const orders = await Order.find({ tradeId: tradeId });
		const ordersCompilated = [];
		if (orders.length) {
			for (let j = 0; j < orders.length; j++) {
				const client = await Clients.findById(orders[j].clientId);
				let total = 0;
				ordersCompilated.push({
					orderId: orders[j]._id,
					createdAt: orders[j].createdAt,
					client: {
						fullname: `${client.firstname} ${client.lastname}`,
						address: client.address,
						phone: client.phone,
					},
					status: orders[j].status,
					payment: orders[j].payment,
					products: orders[j].products.map((x) => {
						total += x.cantidad * x.price;
						return x;
					}),
					total: total,
				});
			}
			return ordersCompilated;
		} else return `No se encontraron pedidos para su comercio`;
	} catch (error) {
		return error.message;
	}
};

const getOrderByOrderId = async (orderId) => {
	// FUNCIONANDO
	try {
		console.log(orderId);
		const order = await Order.findById(orderId);
		const trade = await Trade.findById(
			order.tradeId,
			"commerceName image email"
		);
		const orderForClient = {
			commerceName: trade.commerceName,
			image: trade.image,
			email: trade.email,
			orderId: order._id,
			products: order.products,
			status: order.status,
			createdAt: order.createdAt,
		};
		return orderForClient;
	} catch (error) {
		return error.message;
	}
};

const searchActiveOrders = async (tradeId) => {
	try {
		const search = await Order.find({
			tradeId: tradeId,
			status: { $ne: "Entregado" },
		});
		if (search.length) return search;
		return `Todos los pedidos se encuentran en estado ENTREGADO.`;
	} catch (error) {
		return error.message;
	}
};

const createOrder = async (tradeId, clientId, products) => {
	// FUNCIONANDO
	try {
		const newOrder = new Order({ tradeId, clientId, products });
		await newOrder.save();

		const trade = await Trade.findById(newOrder.tradeId);
		const client = await Clients.findById(newOrder.clientId);

		if (newOrder) {
			await sendMailOrder(
				client.email,
				client.firstname,
				client.lastname,
				newOrder.products,
				newOrder._id
			);
			await sendMailOrderTrade(
				trade.email,
				trade.userName,
				client.firstname,
				client.lastname,
				newOrder.products,
				newOrder._id
			);
			return `El pedido fue enviado al comercio. Su número de orden es ${newOrder._id} por un total de ${newOrder.total}`;
		} else return `Vaya! Ocurrió un problema al registrar su pedido.`;
	} catch (error) {
		return error.message;
	}
};

// const updateOrderC = async (id, updateOrder) => { // <---------- putOrderHandler
//   try {
//     const order = Order.findByIdAndUpdate(id, updateOrder, { new: true })
//     return order;
//   } catch (error) {
//     return false
//   }
// }

module.exports = {
	getOrdersForClient,
	getOrdersForTrade,
	getOrderByOrderId,
	createOrder,
	searchActiveOrders,
};
