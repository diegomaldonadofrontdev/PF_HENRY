

const validateFeedback = (req, res, next) => {
    const { name, opinion, rating, image } = req.body;
    if (!name) return res.status(400).json({ Error: "No se ha recibido el nombre" });
    if (!opinion) return res.status(400).json({ Error: "No se ha recibido la opinion" });
    if (!rating) return res.status(400).json({ Error: "No se ha recibido la puntuación" });
    if (!image) return res.status(400).json({ Error: "No se ha recibido la imagen" });    
    next();
  };

/*
nombre
apellido
ciudad de ebtrega
direccion de entrega
mapa
telefono
imagen
mail

id del comercio
id de los productos []

*/

  const validateOrder = (req, res, next) => {
    const { name, lastName, deliveryCity, deliveryAdress, phone, email } = req.body;
    const {tradeId, products} = req.query
    if (!name) return res.status(400).json({ Error: "No se ha recibido el nombre" });
    if (!opinion) return res.status(400).json({ Error: "No se ha recibido la opinion" });
    if (!rating) return res.status(400).json({ Error: "No se ha recibido la puntuación" });
    if (!image) return res.status(400).json({ Error: "No se ha recibido la imagen" });    
    next();
  };

  module.exports = {
    validateFeedback,
    validateOrder
  }