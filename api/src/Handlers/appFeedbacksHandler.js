const {createFeedback,
    getFeedbacks,
    getFeedbacksById,
    deleteFeedback
} = require ("../Controllers/appFeedbacksController")

// GET 
const getFeedbacksHandler = async (req, res) => { // OK. 
    try {
      const feedbacks = await getFeedbacks();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(404).json({ error: `Error al importar los feedbacks de los clientes` });
    }
  };
 const getFeedbacksByIdHandler = async (req, res) => { // OK. 
  const {id} = req.params;
    try {
      const feedbacks = await getFeedbacksById(id);
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(404).json({ error: `Error al importar los feedbacks de los clientes` });
    }
  };
  
// POST 
  const postFeedbackHandler = async (req, res) => { // OK.
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
    res.status(200).json(fbDeleted);
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