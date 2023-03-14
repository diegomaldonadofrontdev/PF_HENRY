

const validateFeedback = (req, res, next) => {
    const { name, opinion, rating } = req.body;
    const { clientId } = req.query
    if (!name) return res.status(400).json({ Error: "No se ha recibido el nombre" });
    if (!opinion) return res.status(400).json({ Error: "No se ha recibido la opinion" });
    if (!rating) return res.status(400).json({ Error: "No se ha recibido la puntuación" });
    if (!clientId) return res.status(400).json({ Error: "No se ha recibido el id del cliente" });
    next();
  };


  const validateOrder = (req, res, next) => {
    const { name, lastName, deliveryCity, deliveryAdress, phone, email } = req.body;
    const {tradeId, products} = req.query
    if (!name) return res.status(400).json({ Error: "No se ha recibido el nombre" });
    if (!opinion) return res.status(400).json({ Error: "No se ha recibido la opinion" });
    if (!rating) return res.status(400).json({ Error: "No se ha recibido la puntuación" });
    if (!image) return res.status(400).json({ Error: "No se ha recibido la imagen" });    
    next();
  };

  const validateClient = (req, res, next) => {
    const {firstname ,lastname, username, email, password, country, city, address, phone, status} = req.body;
    if(!firstname) return res.status(400).json({ Error: "No se ha recibido el nombre" });
    if(!lastname) return res.status(400).json({ Error: "No se ha recibido el apellido" });
    if(!username) return res.status(400).json({ Error: "No se ha recibido el nombre de usuario" });
    if(!email) return res.status(400).json({ Error: "No se ha recibido el email" });
    if(!password) return res.status(400).json({ Error: "No se ha recibido la contraseña" });
    if(!country) return res.status(400).json({ Error: "No se ha recibido el pais" });
    if(!city) return res.status(400).json({ Error: "No se ha recibido la ciudad" });
    if(!address) return res.status(400).json({ Error: "No se ha recibido la direccion" });
    if(!phone) return res.status(400).json({ Error: "No se ha recibido el telefono" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
  }

  const validateTrade = (req, res, next) => {
    const {commerceName, description, userName, email, password, country, city, address, phone, epagos, status} = req.body;
    
    if(!commerceName) return res.status(400).json({ Error: "No se ha recibido el nombre del comercio" });
    if(!description) return res.status(400).json({ Error: "No se ha recibido la descripcion del comercio" });
    if(!userName) return res.status(400).json({ Error: "No se ha recibido el nombre de usuario" });
    if(!email) return res.status(400).json({ Error: "No se ha recibido el email" });
    if(!password) return res.status(400).json({ Error: "No se ha recibido la contraseña" });
    if(!country) return res.status(400).json({ Error: "No se ha recibido el pais" });
    if(!city) return res.status(400).json({ Error: "No se ha recibido la ciudad" });
    if(!address) return res.status(400).json({ Error: "No se ha recibido la direccion" });
    if(!phone) return res.status(400).json({ Error: "No se ha recibido el telefono" });
    if(!epagos) return res.status(400).json({ Error: "No se ha recibido el tipo de pago" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();

  }

  const validateProduct = (req, res, next) => {
    const { name, description, price, image, status} = req.body;

    if(!name) return res.status(400).json({ Error: "No se ha recibido el nombre del producto" });
    if(!description) return res.status(400).json({ Error: "No se ha recibido la descripcion del producto" });
    if(!price) return res.status(400).json({ Error: "No se ha recibido el precio" });
    if(!image) return res.status(400).json({ Error: "No se ha recibido la imagen" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
  }

  const validateCategory = (req, res, next) => {
    const { categoryName, status } = req.body;
    
    if(!categoryName) return res.status(400).json({ Error: "No se ha recibido el nombre de la categoria" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
  }

  const validateDeliveryZone = (req,res,next) => {
    const { deliveryZoneName, status } = req.body;
    
    if(!deliveryZoneName) return res.status(400).json({ Error: "No se ha recibido el nombre de la zona" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
    
  }

  const validateCategoryProduct = (req,res,next) => {
    const { categoryName, status } = req.body;
    
    if(!categoryName) return res.status(400).json({ Error: "No se ha recibido el nombre de la categoria" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
    
  }

  const validateSubcategory = (req,res,next) => {
    const { subcategoryName, status } = req.body;
    
    if(!subcategoryName) return res.status(400).json({ Error: "No se ha recibido el nombre de la subcategoria" });
    if(!status) return res.status(400).json({ Error: "No se ha recibido el estatus" });
    next();
    
  }

  module.exports = {
    validateFeedback,
    validateOrder,
    validateClient,
    validateTrade,
    validateProduct,
    validateCategory,
    validateDeliveryZone,
    validateCategoryProduct,
    validateSubcategory
  }