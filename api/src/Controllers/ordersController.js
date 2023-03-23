const Order = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require("../Helpers/emailCreateOrder");
const Clients = require("../models/Clients");
const sendMailOrderTrade = require("../Helpers/emailCreateOrderTrade");
const ObjectId = require("mongoose").ObjectId;

// GETS
const getOrdersForClient = async (clientId) => {
	// OK
	try {
		const orders = await Order.find({ clientId: clientId });
		console.log(orders);
		const ordersCompilated = [];
		if (orders.length) {
			for (let i = 0; i < orders.length; i++) {
				const trade = await Trade.findById(orders[i].tradeId);
				console.log(trade);
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
	// OK
	try {
		const orders = await Order.find({ tradeId: tradeId });
		const ordersCompilated = [];
		if (orders.length) {
			for (let j = 0; j < orders.length; j++) {
				const client = await Clients.findById(orders[j].clientId);
				let total = 0;
				orders[j].products.forEach((x) => (total += x.price * x.cantidad));
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
					products: orders[j].products,
					total: total,
				});
			}
			return ordersCompilated;
		} else return [];
	} catch (error) {
		return error.message;
	}
};

const getOrderByOrderId = async (orderId) => {
	// OK
	try {
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
	// OK
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

// POSTS
const createOrder = async (tradeId, clientId, products) => {
	// OK
	try {
		const newOrder = new Order({ tradeId, clientId, products: products.data });
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
			return `El pedido fue enviado al comercio. Su número de orden es ${newOrder._id}.`;
		} else return `Vaya! Ocurrió un problema al registrar su pedido.`;
	} catch (error) {
		return error.message;
	}
};

// PUTS
const updateOrderController = async (orderId, payment, status) => {
	try {
		if (payment) {
			await Order.findByIdAndUpdate(orderId, { payment });
		}

		if (status) {
			await Order.findByIdAndUpdate(orderId, { status });
		}
		return true;
	} catch (error) {
		console.log(error);
		return false;
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

// DELETES
const deleteOrder = async (orderId) => {
	// OK
	try {
		const orderDeleted = await Order.deleteOne({ _id: orderId });
		if (orderDeleted.deletedCount !== 0) {
			return `Pedido eliminado!`;
		}
		return `No se encontró el pedido.`;
	} catch (error) {
		console.log(error.message);
		throw new Error(`Ocurrio un error al intentar eliminar el pedido`);
	}
};

module.exports = {
	getOrdersForClient,
	getOrdersForTrade,
	getOrderByOrderId,
	createOrder,
	searchActiveOrders,
	updateOrderController,
	deleteOrder,
};
