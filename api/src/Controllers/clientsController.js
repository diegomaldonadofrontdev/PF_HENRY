const feedbacks = [];
const Clients = require('../models/Clients');
const Order = require('../models/Order')


const bcrypt = require('bcryptjs');

const postFeedbackController = (name, opinion, rating, image) => {  
  const newFeedback = {
    name: name,
    opinion: opinion,
    rating: rating,
    image: image,
  }
  console.log(feedbacks);
  feedbacks.push(newFeedback);
  console.log(feedbacks);
  
  if (feedbacks.length) {
    return true;
  } else return false;
};

const getFeedbacksController = () => {
    return feedbacks
}

const postCreateClientController = async (body) => {

  const { password } = body
  
  newClient = new Clients( body);
  await newClient.save();
  
  const salt = bcrypt.genSaltSync(10);
  newClient.password = bcrypt.hashSync(password,salt)
  
  return true;
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
    postFeedbackController,
    getFeedbacksController,
    postCreateClientController,
    postCreateOrder,
    getClients,
    getOrders,
    updateClientC,
    updateOrderC
}