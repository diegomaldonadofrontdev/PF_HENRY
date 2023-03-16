const {
  getOrdersByClient,
  getOrderByOrderId,
  createOrder
} = require("../Controllers/ordersController");

const getOrdersHandler = async (req, res) => { // FUNCIONANDO
  const { clientId } = req.query;
  try {
    const orders = await getOrdersByClient(clientId);
    if (orders.length) res.status(200).json(orders);
    return `No se encontraron pedidos en nuestra base de datos`;
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener las ordenes" });
  }
};

const getOrderHandler = async (req, res) => { // FUNCIONANDO
  const { orderId } = req.params;
  try {
    const order = await getOrderByOrderId(orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createNewOrderHandler = async (req, res) => { // FUNCIONANDO
    const {products} = req.body
    const {tradeId, clientId} = req.query
    try {  
      const newOrder = await createOrder(tradeId, clientId, products)
      res.status(200).json(newOrder);      
    } catch (error) {
      res.status(404).json({ Error: "Error al registrar la orden" });
    }
  }

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
  createNewOrderHandler,  
};
