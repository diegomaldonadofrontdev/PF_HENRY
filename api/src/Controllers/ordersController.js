const Orders = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require("../Helpers/emailCreateOrder");

const getOrdersByClient = async (clientId) => { // FUNCIONANDO
  try {
    const orders = await Orders.find(
      { clientId: clientId },      
    );
    if (orders.length) {
      console.log(orders);
      const ordersCompilated = [];
      for (let i = 0; i < orders.length; i++) {
        const trade = await Trade.findById(orders[i].tradeId, "commerceName");
        ordersCompilated.push({
          orderId: orders[i]._id,
          createdAt: orders[i].createdAt,
          commerceName: trade.commerceName,
          status: orders[i].status,
        });
      }      
      return ordersCompilated;
    } else
      return `Vaya! Parece que no tenemos pedidos registrados con su usuario!`;
  } catch (error) {
    return error.message;
  }
};

const getOrderByOrderId = async (orderId) => { // FUNCIONANDO
  try {
    console.log(orderId);
    const order = await Orders.findById(
      orderId
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

const createOrder = async (tradeId, clientId, products) => { // FUNCIONANDO, REVISAR SENDMAILORDER
  try {
    const newOrder = new Orders({ tradeId, clientId, products });
    await newOrder.save();
    if (newOrder) {
      // await sendMailOrder(newOrder.email, newOrder.products.length, newOrder.total)
      return `El pedido fue enviado al comercio. Su número de orden es ${newOrder._id}`;
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
  getOrdersByClient,
  getOrderByOrderId,
  createOrder,
};
