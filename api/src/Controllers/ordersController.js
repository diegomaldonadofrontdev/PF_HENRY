const Order = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require("../Helpers/emailCreateOrder");
const Clients = require("../models/Clients");
const sendMailOrderTrade = require("../Helpers/emailCreateOrderTrade");
const ObjectId = require("mongoose").ObjectId;


const getOrdersForClient = async (clientId) => { // FUNCIONANDO
  try {
    const orders = await Order.find({clientId: clientId});    
    const ordersCompilated = [];
    if (orders.length) {
      for (let i = 0; i < orders.length; i++) {
        const trade = await Trade.findById(orders[i].tradeId, "commerceName");
        console.log(trade);
        ordersCompilated.push({
          orderId: orders[i]._id,
          createdAt: orders[i].createdAt,
          commerceName: trade.commerceName,
          status: orders[i].status,
          total: orders[i].total
        });
      }      
      return ordersCompilated;
    } else return `No se encontraron pedidos con su usuario`
  } catch (error) {
    return error.message;
  }
}

const getOrdersForTrade = async (tradeId) => {
  try {  
    const orders = await Order.find({tradeId: tradeId})   
    const ordersCompilated = []
    if (orders.length) {
      for (let j = 0; j < orders.length; j++) {
        const client = await Clients.findById(orders[j].clientId, "firstname lastname")
        ordersCompilated.push({
          orderId: orders[j]._id,
          createdAt: orders[j].createdAt,
          client: client.firstname + " " + client.lastname,
          status: orders[j].status,
          total: orders[j].total
        })
      }
      return ordersCompilated;
  } else return `No se encontraron pedidos para su comercio`
  } catch (error) {
    return error.message
  }
}

const getOrderByOrderId = async (orderId) => { // FUNCIONANDO
  try {
    console.log(orderId);
    const order = await Order.findById(
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

const createOrder = async (tradeId, clientId, products, total) => { // FUNCIONANDO
  try {
    const newOrder = new Order({ tradeId, clientId, products, total: total });
    await newOrder.save();
    console.log(newOrder.total);

    const trade = await Trade.findById(newOrder.tradeId)
    const client = await Clients.findById(newOrder.clientId)
    
    if (newOrder) {
        await sendMailOrder(client.email,client.firstname,client.lastname,newOrder.products,newOrder._id, newOrder.toal)
        await sendMailOrderTrade(trade.email,trade.userName,client.firstname,client.lastname,newOrder.products,newOrder._id, newOrder.total)
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
};
