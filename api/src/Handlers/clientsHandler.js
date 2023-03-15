const jwt = require("jsonwebtoken");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";

const {
  registerClient,
  postCreateOrder,
  searchClientById,
  getOrders,
  updateClientC,
  updateOrderC,
  searchClientExist,
  validatePasswordClient,
  searchClient,
} = require("../Controllers/clientsController");



// TERMINADO
const postClientHandler = async (req, res) => {
  const client = req.body
  try {

    const token = jwt.sign(
      { email: client.email },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )
    const clientBDD = await registerClient(client)
    // res.status(200).json({ id, ...client, token })
    res.status(200).json([clientBDD, { token: token }])
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

}

const newOrder = async (req, res) => {
  try {

    const order = await postCreateOrder(req.body)

    res.status(200).json(`Se ha creado la ordem exitosamente `);
  } catch (error) {
    res.status(404).json({ Error: "Error al registrar la orden" });
  }
}

const getClientHandler = async (req, res) => {
  const {id} = req.params
  try {
    const clients = await searchClientById(id);
    res.status(200).json(clients)
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener a los clientes" })
  }
}

const getOrdersHandler = async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders)
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener las ordenes" })
  }
}

const updateClient = async (req, res) => {
  const { id } = req.params;
  const clientUpdate = {
    ...req.body,
    user: id
  }
  try {
    const client = await updateClientC(id, clientUpdate)
    res.status(200).json(`Se actualizo el cliente`)
  } catch (error) {
    res.status(404).json(`Error al actualizar el cliente`)
  }
}

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const orderUpdate = {
    ...req.body,
    user: id
  }
  try {
    const order = await updateOrderC(id, orderUpdate)
    res.status(200).json(`Se actualizo la orden`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la orden`)
  }
}

// TERMINADO
const login = async (req, res) => {
  const { email, password } = req.body;

  const findEmail = await searchClientExist(email)
  if (!findEmail) res.status(404).json("No existe el usuario");

  const validate = await validatePasswordClient(email, password);
  if (!validate) res.status(404).json("Contraseña incorrecta")

  const clientBDD = await searchClient(email);
  try {
    const token = jwt.sign(
      { username: clientBDD.email },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )
    res.status(200).json([clientBDD, { token: token }])
  } catch (error) {
    res.status(400).json("Error al iniciar la sesion")
  }

}

// TERMINADO
const registerWhitGoogle = async (req, res) => {
  // const { firstname, lastname, email, password, loginG: true} = req.body;
  const client = req.body;

  try {

    const clientBDD = await registerClient(client)
    
    const token = jwt.sign(
      { name: client.firstname, email: client.email },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )

    res.status(200).json([clientBDD, { token: token }]);

  } catch (error) {
    res.status(400).json("Ocurrio un error en el registro!")
  }

}

module.exports = {
  postClientHandler,
  newOrder,
  getOrdersHandler,
  getClientHandler,
  updateClient,
  updateOrder,
  login,
  registerWhitGoogle
};
