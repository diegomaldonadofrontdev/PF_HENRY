const Orders = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require('../Helpers/emailCreateOrder')

const getOrdersByClient = async (clientId) => {
  try {
    const orders = await Orders.find(
      { clientId: clientId },
      "_id tradeId status timestamps"
    );
    if (orders.length) {
      const trade = await Trade.findById(orders.tradeId, "commerceName");
      const ordersForClient = {
        commerceName: trade.commerceName,
        status: orders.status,
        createdAt: orders.createdAt,
      };
      return ordersForClient;
    } else
      return `Vaya! Parece que no tenemos pedidos registrados con su usuario!`;
  } catch (error) {
    return error.message;
  }
};

const getOrderByOrderId = async (orderId) => {
  try {
    const order = await Orders.findById(
      orderId,
      "_id tradeId products status timestamps"
    );
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

const createOrder = async (tradeId, clientId, products) => {
    try {
        const newOrder = new Orders({tradeId, clientId, products})
        await newOrder.save()
        if (newOrder) {
            await sendMailOrder(newOrder.email,newOrder.products.length,newOrder.total)
            return `El pedido fue enviado al comercio. Su número de orden es ${newOrder._id}`
        } else return `Vaya! Ocurrió un problema al registrar su pedido.`
    } catch (error) {
        return error.message
    }
}




module.exports = {
  getOrdersByClient,
  getOrderByOrderId,
  createOrder
};
