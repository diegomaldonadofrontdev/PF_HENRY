const {createFeedback,
    getFeedbacks,
    deleteFeedback,
    getFeedbacksById
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
  
  const getFeedbacksByIdHandler = async(req, res) => {
    const { id } = req.params;
    try {
      const feedback = await getFeedbacksById(id);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: `Error al importar los feedbacks de los clientes` });
    }
  }

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

  // PUTS
  const putFeedbackHandler = async () => {
    
  }

// DELETE
const deleteAppFeedbacksHandler = async (req, res) => { // OK
  const {feedbackId} = req.params
	try {
		const fbDeleted = await deleteFeedback(feedbackId);
		if (fbDeleted) res.status(200).json(`La review se eliminó correctamente`);
    res.status(200).json(`No se encontró el feedback`)
	} catch (error) {
		res.status(404).json({
			Error: `Se produjo un problema al intentar eliminar la review`
		});
	}
};


  module.exports = {
    getFeedbacksHandler,
    getFeedbacksByIdHandler,
    postFeedbackHandler,
    deleteAppFeedbacksHandler,
    putFeedbackHandler
  }