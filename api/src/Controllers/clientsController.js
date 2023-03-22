const Clients = require('../models/Clients');
const sendMail = require('../Helpers/email')
const sendMailWelcome = require('../Helpers/emailRegisterClient')
const sendMailOrder = require('../Helpers/emailCreateOrder')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const sendMailReset = require('../Helpers/emailResetPassword');
const sendMailResetSuccess = require('../Helpers/emailResetPasswordSucces')

// GETS CONTROLLERS
const searchClientExist = async (email) => { // FUNCIONANDO
  try {
    const findClient = await Clients.find({ email: email });
    if (findClient.length) return true
    return false
  } catch (error) {
    return error.message
  }
}

const searchClientById = async (id) => { // FUNCIONANDO
  try {
    const client = Clients.findById(id, { password: 0 })
    if (client !== null) {
      return client
    } else return []
  } catch (error) {
    return error.message
  }
}

const searchClient = async (email, password) => { // OK
  try {
    const clientBDD = await Clients.find({ email: email }, { password: 0 })

    const validate = validatePasswordClient(email, password);

    if (validate) {
      return clientBDD[0]
    } else {
      return "Usuario o contraseña incorrectos"
    }


  } catch (error) {
    return error.message
  }
}

const confirmEmail = async (token) => { // OK
  try {
    const payload = jwt.verify(token, TOKEN_KEY)

    let email = payload.email;

    const client = await Clients.findOne({ email });

    if (!client) return "No se encontro el usuario"
    if (client.emailVerified) return "El correo ya se encuentra registrado"

    client.emailVerified = true;
    await client.save()
    await sendMailWelcome(client.email, client.firstname, client.lastname);
    return "El correo electronico ha sido verificado"

  } catch (error) {
    return "Token invalido";
  }
}

// POSTS CONTROLLERS
const registerClient = async (client, token) => { // OK

  const { password } = client
  try {
    const clientBDD = await Clients.find({ email: client.email }, { password: 0 })

    if (!clientBDD.length) {
      const newClient = new Clients(client);
      const salt = bcrypt.genSaltSync(10);
      newClient.password = bcrypt.hashSync(password, salt)
      await newClient.save();
      await sendMail(newClient.email, token);
      const clientBDD = await Clients.find({ email: client.email }, { password: 0 })
      const dataClient = clientBDD[0]
      return dataClient
    }
    return false
  } catch (error) {
    return error.message
  }
}

const registerClientPerGoogle = async (client, token) => { // OK

  const { password } = client
  try {
    const clientBDD = await Clients.find({ email: client.email }, { password: 0 })

    if (!clientBDD.length) {
      const newClient = new Clients(client);
      const salt = bcrypt.genSaltSync(10);
      newClient.password = bcrypt.hashSync(password, salt)
      await newClient.save();
      await sendMail(newClient.email, token);
      const clientBDD = await Clients.find({ email: client.email }, { password: 0 })
      const dataClient = clientBDD[0]
      return dataClient
    }
    const dataClient = clientBDD[0]
    return dataClient
    // return false

  } catch (error) {
    return error.message
  }
}

const validatePasswordClient = async (email, password) => { // OK
  try {
    const findClient = await Clients.find({ email: email });
    const client = findClient[0];

    // VALIDAR CONTRASEÑA
    const pass = bcrypt.compareSync(password, client.password);

    if (pass) {
      return { password: password }
    } else {
      return "Contraseña incorrecta"
    }

  } catch (error) {
    return error.message
  }
}

const sendMailNewPassword = async (email, token) => { // ?
  try {
    await sendMailReset(email, token)
    return "Se ha enviado el link a tu email"
  } catch (error) {
    return "Error al enviar el email"
  }
}

const resetPasswordController = async (password, token) => { // ?
  try {
    const payload = jwt.verify(token, TOKEN_KEY)

    let email = payload.email;

    const salt = bcrypt.genSaltSync(10);
    const client = await Clients.findOne({ email })

    let newPassword = bcrypt.hashSync(password, salt)

    client.password = newPassword;

    await client.save();
    await sendMailResetSuccess(client.email, client.firstname, client.lastname);

    return "Se actulizo la contraseña"
  } catch (error) {
    return "No se ha encontrado al cliente"
  }
}

// PUTS CONTROLLERS
const updateClient = async (clientId, body) => { // FUNCIONANDO
  try {
    const client = await Clients.findByIdAndUpdate(clientId, body, { new: true })
    if (client) return client;
    return `Vaya! No fue posible actualizar sus datos!`
  } catch (error) {
    return error.message
  }
}

// DELETES CONTROLLERS
const deleteClient = async (id) => {
  try {
    const clientDeleted = await Clients.deleteOne({ _id: id })
    console.log(clientDeleted);
    if (clientDeleted.deletedCount !== 0) {
      return `Cliente eliminado!`
    } return `No se encontró el cliente.`
  } catch (error) {
    throw new Error(error.message)
  }
}



module.exports = {
  searchClientById,
  registerClient,
  registerClientPerGoogle,
  searchClientExist,
  validatePasswordClient,
  searchClient,
  updateClient,
  confirmEmail,
  sendMailNewPassword,
  resetPasswordController,
  deleteClient
}