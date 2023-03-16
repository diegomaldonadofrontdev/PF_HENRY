require('dotenv').config();
const mongoose = require('mongoose');



const connDB = () => {
  try {
    mongoose.connect(`${process.env.DB_CONN}`)
    console.log('esta conectada la base')
  } catch (error) {
    throw new Error('Problemas al conectar a la BD')
  }
}

module.exports = connDB;