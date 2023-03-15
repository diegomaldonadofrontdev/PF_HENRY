const Clients = require('../models/Clients');
const Order = require('../models/Order')
const sendMail = require('../Helpers/email')
const sendMailWelcome = require('../Helpers/emailRegisterClient')
const sendMailOrder = require('../Helpers/emailCreateOrder')
const bcrypt = require('bcryptjs');




// PUTS

// DELETES




const registerClient = async (client) => {

  const { password } = client
  try {
    const clientBDD = await Clients.find({ email: client.email }, { password: 0 })

    if (!clientBDD.length) {
      const newClient = new Clients(client);
      const salt = bcrypt.genSaltSync(10);
      newClient.password = bcrypt.hashSync(password, salt)
      await newClient.save();
      await sendMail(newClient.email);
      await sendMailWelcome(newClient.email,newClient.firstname,newClient.lastname);
      const clientBDD = await Clients.find({ email: client.email }, { password: 0 })
      const dataClient = clientBDD[0]
      return dataClient
    }
    const dataClient = clientBDD[0]
    return dataClient

  } catch (error) {
    return error.message
  }



  //return true;
}

const searchClientExist = async (email) => {
  try {
    const findClient = await Clients.find({ email: email });
    if (findClient.length) return true
    return false
  } catch (error) {
    return error.message
  }
}

const searchClientById = async (id) => {
  try {
    const client = Clients.findById(id, {password:0})
    return client
  } catch (error) {
    return error.message
  }
}

const searchClient = async (email) => {
  try {
    const clientBDD = await Clients.find({ email: email }, { password: 0 })
    return clientBDD[0]
  } catch (error) {
    return error.message
  }
}
const validatePasswordClient = async (email, password) => {
  try {
    const findClient = await Clients.find({ email: email });
    const client = findClient[0];

    // VALIDAR CONTRASEÑA
    const pass = bcrypt.compareSync(password, client.password);

    if (pass) return true
    return false

  } catch (error) {
    return error.message
  }
}


const postCreateOrder = async (body) => {

  try {
    const newOrder = new Order(body);
    await newOrder.save();
    await sendMailOrder(newOrder.email,newOrder.productsOrder.length,newOrder.total)
    return true;
  } catch (error) {
    return false;
  }
}

const getClients = async () => {
  try {
    const clients = await Clients.find()
    return clients;
  } catch (error) {
    return false
  }
}

const getOrders = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    return false;
  }
}

const updateClientC = async (id, updateClient) => {
  try {
    const client = Clients.findByIdAndUpdate(id, updateClient, { new: true })
    return client;
  } catch (error) {
    return false
  }
}

const updateOrderC = async (id, updateOrder) => {
  try {
    const order = Order.findByIdAndUpdate(id, updateOrder, { new: true })
    return order;
  } catch (error) {
    return false
  }
}


module.exports = {
  searchClientById,
  registerClient,
  searchClientExist,
  validatePasswordClient,
  searchClient,
  postCreateOrder,
  getClients,
  getOrders,
  updateClientC,
  updateOrderC
}