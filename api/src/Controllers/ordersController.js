const Orders = require("../models/Order");
const Trade = require("../models/Trades");
const sendMailOrder = require("../Helpers/emailCreateOrder");
const Clients = require('../models/Clients')
const sendMailOrderTrade = require('../Helpers/emailCreateOrderTrade');
const ObjectId = require('mongoose').ObjectId


const getOrdersByClient = async (parameter) => { // FUNCIONANDO
  try {
    const orders = await Orders.find( parameter );
    const ordersCompilated = [];
    if (orders.length && parameter.clientId) {
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
    } else if (orders.length) {
        for (let j = 0; j < orders.length; j++) {
          const client = Clients.find(orders[i].clientId, "firstName lastName")
          ordersCompilated.push({
            orderId: orders[i]._id,
            createdAt: orders[i].createdAt,
            client: orders[i].firstName + " " + orders[i].lastName
          })
        }
    }
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

    //const _idTrade = new ObjectId(tradeId)
    //const _idClient = new ObjectId(clientId)

    const trade = await Trade.findById(newOrder.tradeId)
    const client = await Clients.findById(newOrder.clientId)
    
    if (newOrder) {
        await sendMailOrder(client.email,client.firstname,client.lastname,newOrder.products,newOrder._id)
        await sendMailOrderTrade(trade.email,trade.userName,client.firstname,client.lastname,newOrder.products,newOrder._id)
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
