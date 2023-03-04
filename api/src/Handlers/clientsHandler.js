const {
    postFeedbackController
  } = require("../Controllers/clientsController");


  // POST -------> /feedback
  const createFeedbackHandler = async (req, res) => {
    const {name, opinion, rating, image} = req.body
    try {
      const result = postFeedbackController(name, opinion, rating, image)
      if (result) res.status(200).json(`Hemos registrado su comentario. Gracias ${name}!`);
    } catch (error) {
      res.status(404).json({ error: `Error al registar el comentario` });
    }
  };

  module.exports = {
    createFeedbackHandler
  }