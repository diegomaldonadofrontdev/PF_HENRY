const {createFeedback,
    getFeedbacks,
} = require ("../Controllers/appFeedbacksController")

// GET ------------> feedbacks
const getFeedbacksHandler = async (req, res) => {
    try {
      const feedbacks = await getFeedbacks();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(404).json({ error: `Error al importar los feedbacks de los clientes` });
    }
  };
  
  // POST -------> /feedback
  const postFeedbackHandler = async (req, res) => {
    const body = req.body;
    const { clientId } = req.query
    try {
      const result = await createFeedback(clientId, body);
      if (result)
        res.status(200).json(`Hemos registrado su comentario. Gracias ${body.name}!`);
    } catch (error) {
      res.status(404).json({ error: `Error al registar el comentario` });
    }
  };

  module.exports = {
    getFeedbacksHandler,
    postFeedbackHandler
  }