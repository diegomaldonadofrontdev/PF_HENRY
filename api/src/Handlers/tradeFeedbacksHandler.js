const {
  getFeedbacks, 
  createFeedback,
  deleteTradeFeedback,
  updateTradeFeedback
} = require ("../Controllers/tradeFeedbacksController")


// GET 
const getFeedbackHandler = async (req, res) => { // OK.
    const {tradeId} = req.params
    try {
      const feedbacks = await getFeedbacks(tradeId);
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(404).json({ error: `Error al importar las opiniones de los clientes` });
    }
  };
  
  // POST 
  const postFeedbacksHandler = async (req, res) => { // OK.
    const { opinion, rating } = req.body;
    const { clientId, tradeId } = req.query
    try {
      const result = await createFeedback( clientId, tradeId, opinion, rating );
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: `Error al registar el comentario` });
    }
  };

  // DELETE
  const deleteTradeFeedbacksHandler = async (req, res) => { // OK
    const {feedbackId} = req.params
    try {
      const fbDeleted = await deleteTradeFeedback(feedbackId);
      res.status(200).json(fbDeleted)
    } catch (error) {
      res.status(404).json({
        Error: `Se produjo un problema al intentar eliminar el producto`,
  })
  }
}

// PUTS
const putTradeFeedbackHandler = async (req, res) => { // OK
  const {feedbackId} = req.params
  const body = req.body
	try {
		const update = await updateTradeFeedback(feedbackId, body);
		if (update) res.status(200).json(`La opinión se actualizó correctamente`);
    res.status(200).json(`No se pudo actualizar la opinión`)
	} catch (error) {
    console.log(error.message);
		res.status(404).json({ Error: `No se pudo actualizar la opinión!` });
	}
};


module.exports = {
    postFeedbacksHandler,
    getFeedbackHandler,
    deleteTradeFeedbacksHandler,
    putTradeFeedbackHandler
  }