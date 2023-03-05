const {
  postFeedbackController,
  getFeedbacksController,
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
module.exports = {
  createFeedbackHandler,
  getFeedbacksHandler,
};
