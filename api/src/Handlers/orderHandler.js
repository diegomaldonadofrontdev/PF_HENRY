const {  
  getOrderByOrderId,
  getOrdersByClient,
  createOrder,
} = require("../Controllers/ordersController");

const getOrdersHandler = async (req, res) => {
  // FUNCIONANDO
  const { clientId, tradeId } = req.query;
  // let orders = [];
  let parameter = {}
  try {
    if (clientId) parameter.clientId = clientId
    if (tradeId) parameter.tradeId = tradeId
    if (parameter === {}) res.status(200).json("Faltan parámetros para la búsqueda"); 
    const orders = await getOrdersByClient(parameter);
    res.status(200).json(parameter);    
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener las órdenes" });
  }
};

const getOrderHandler = async (req, res) => {
  // FUNCIONANDO
  const { orderId } = req.params;
  try {
    const order = await getOrderByOrderId(orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postNewOrderHandler = async (req, res) => {
  // FUNCIONANDO
  const { products } = req.body;
  const { tradeId, clientId } = req.query;
  try {
    const newOrder = await createOrder(tradeId, clientId, products);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(404).json({ Error: "Error al registrar la orden" });
  }
};

// const putOrderHandler = async (req, res) => { // <--------- VER PARA LOS COMERCIOS, EL CLIENTE NO PUEDE ACTUALIZAR EL PEDIDO
//   const { orderId } = req.params;
//   try {
//     const order = await updateOrderC(id, req.body)
//     res.status(200).json(`Se actualizo la orden`)
//   } catch (error) {
//     res.status(404).json(`Error al actualizar la orden`)
//   }
// }

module.exports = {
  getOrdersHandler,
  getOrderHandler,
  postNewOrderHandler,
};
