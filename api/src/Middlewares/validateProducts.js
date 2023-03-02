// HACEMOS LA O LAS FUNCIONES NECESARIAS PARA LAS VALIDACIONES
// DE POST ANTES DE QUE LA INFO LLEGUE A NUESTRA DB PARA PROTEGERLA

const validateSomething = (req, res, next) => {
    const { conditions } = req.body;
    if (!conditions) return res.status(400).json({ Error: "Missing title" });    
    next();
  };
  
  module.exports = {
    validateSomething
  }