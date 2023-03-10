const {
  postFeedbackController,
  getFeedbacksController,
  postCreateClientController,
  postCreateOrder,
  getClients,
  getOrders,
  updateClientC,
  updateOrderC,
} = require("../Controllers/clientsController");



// POST -------> /feedback
const createFeedbackHandler = async (req, res) => {
  const { name, opinion, rating, image } = req.body;
  try {
    const result = postFeedbackController(name, opinion, rating, image);
    if (result)
      res.status(200).json(`Hemos registrado su comentario. Gracias ${name}!`);
  } catch (error) {
    res.status(404).json({ error: `Error al registar el comentario` });
  }
};

const getFeedbacksHandler = async (req, res) => {
  try {
    const feedbacks = await getFeedbacksController();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(404).json({ error: `Error al exportar los feedbacks de los clientess` });
  }
};

const newRegister = async (req,res) => {
  try {
    const result = await postCreateClientController(req.body)
    
    res.status(200).json(`Se ha creado el usuario ${req.body.username} exitosamente `);
  } catch (error) {
    res.status(404).json({Error: "Error al registrar usuario"});
  }
  
}

const newOrder = async (req,res) => {
  try {
  
    const order = await postCreateOrder(req.body)
    
    res.status(200).json(`Se ha creado la ordem exitosamente `);
  } catch (error) {
    res.status(404).json({Error: "Error al registrar la orden"});
  }
}

const getClientsH = async (req, res) => {
  try {
    const clients = await getClients();
    res.status(200).json( clients )
  } catch (error) {
    res.status(404).json({Error: "Error al obtener a los clientes"})
  }
}

const getOrdersH = async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200).json( orders )
  } catch (error) {
    res.status(404).json({Error: "Error al obtener las ordenes"})
  }
}

const updateClient = async(req, res) => {
  const { id } = req.params;
  const clientUpdate = {
    ...req.body,
    user: id
  }
  try {
    const client = await  updateClientC(id,clientUpdate)
    res.status(200).json(`Se actualizo el cliente`)
  } catch (error) {
    res.status(404).json(`Error al actualizar el cliente`)   
  }
}

const updateOrder = async(req, res) => {
  const { id } = req.params;
  const orderUpdate = {
    ...req.body,
    user: id
  }
  try {
    const order = await  updateOrderC(id,orderUpdate)
    res.status(200).json(`Se actualizo la orden`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la orden`)   
  }
}

module.exports = {
  createFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder,
  getOrdersH,
  getClientsH,
  updateClient,
  updateOrder
};
