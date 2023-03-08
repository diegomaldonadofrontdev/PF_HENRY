const {
  postFeedbackController,
  getFeedbacksController,
  postCreateClientController,
  postCreateOrder
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
    if (result)
    res.status(200).json(`Se ha creado el usuario ${req.body.username} exitosamente `);
  } catch (error) {
    res.status(404).json({Error: "Error al registrar usuario"});
  }
  
}

const newOrder = async (req,res) => {
  try {
  
    const order = await postCreateOrder(req.body)
    if (order)
    res.status(200).json(`Se ha creado la ordem exitosamente `);
  } catch (error) {
    res.status(404).json({Error: "Error al registrar la orden"});
  }
}

module.exports = {
  createFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder
};
