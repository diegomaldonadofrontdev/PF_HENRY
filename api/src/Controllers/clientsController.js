const feedbacks = [];
const Clients = require('../models/Clients');
const Order = require('../models/Order')
const Feedback = require('../models/Feedback')
const sendMail = require('../Helpers/email')


const bcrypt = require('bcryptjs');

const createFeedback = (clientId, body) => {  
  try {
    const newClient = new Clients(body)
    newClient.clientId = clientId
    newClient.save()
    return `Hemos`
  } catch (error) {
    
  }
};

const getFeedbacksController = () => {
    return feedbacks
}

const postCreateClientController = async (body) => {

  const { password } = body
  
  try {
    newClient = new Clients( body);
  
    const salt = bcrypt.genSaltSync(10);
    newClient.password = bcrypt.hashSync(password,salt)
    
    await newClient.save();
    
    sendMail("Bienvenido, gracias por registrarte");
    
      
  } catch (error) {
    return false
  }


  //return true;
}

const postCreateOrder = async (body) => {
  
  try {
    const newOrder = new Order( body);
    await newOrder.save();
    return true;
  } catch (error) {
    return false;
  }
}

const getClients = async() => {
  try {
    const clients = await Clients.find()
    return clients;
  } catch (error) {
    return false
  }
}

const getOrders = async() => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    return false;
  }
}

const updateClientC = async (id, updateClient) => {
  try {
    const client = Clients.findByIdAndUpdate(id,updateClient,{new: true})
    return client;
  } catch (error) {
    return false
  }
}

const updateOrderC = async (id, updateOrder) => {
  try {
    const order = Order.findByIdAndUpdate(id,updateOrder,{new: true})
    return order;
  } catch (error) {
    return false
  }
}


module.exports = {
    createFeedback,
    getFeedbacksController,
    postCreateClientController,
    postCreateOrder,
    getClients,
    getOrders,
    updateClientC,
    updateOrderC
}