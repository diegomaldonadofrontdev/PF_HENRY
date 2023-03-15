const Clients = require('../models/Clients');
const Order = require('../models/Order')
const sendMail = require('../Helpers/email')
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
      sendMail("Bienvenido, gracias por registrarte");
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

const findClient = async (email) => {
  try {
    const findClient = await Clients.find({ email: email });
    if (findClient.length) return true
    return false
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

const searchClient = async (email) => {
  try {
    const clientBDD = await Clients.find({ email: email }, { password: 0 })
    return clientBDD[0]
  } catch (error) {
    return error.message
  }
}

const postCreateOrder = async (body) => {

  try {
    const newOrder = new Order(body);
    await newOrder.save();
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
  registerClient,
  findClient,
  validatePasswordClient,
  searchClient,
  postCreateOrder,
  getClients,
  getOrders,
  updateClientC,
  updateOrderC
}