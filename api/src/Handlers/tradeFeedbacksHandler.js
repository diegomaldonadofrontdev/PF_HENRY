const {getFeedbacks, createFeedback} = require ("../Controllers/tradeFeedbacksController")


// GET 
const getFeedbacksHandler = async (req, res) => { // FUNCIONANDO
    const {tradeId} = req.params
    try {
      const feedbacks = await getFeedbacks(tradeId);
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(404).json({ error: `Error al importar las opiniones de los clientes` });
    }
  };
  
  // POST 
  const postFeedbacksHandler = async (req, res) => { // FUNCIONANDO
    const { opinion, rating } = req.body;
    const { clientId, tradeId } = req.query
    try {
      const result = await createFeedback( clientId, tradeId, opinion, rating );
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: `Error al registar el comentario` });
    }
  };


module.exports = {
    postFeedbacksHandler,
    getFeedbacksHandler
  }