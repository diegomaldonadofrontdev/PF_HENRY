const {Schema,model} = require('mongoose');


const clientsSchema= Schema (
  {
    firstname: { 
      type : String,
      require: true,
      trim: true,
    },

    lastname: {
      type: String,
      require: true,
      trim: true,
    },   

    email : {
      type: String,
      require: true,
      unique: true,
    },

    password : {
      type: String,
      require: true,
    },

    country : {
      type: String,
      require: true,
    },

    city : {
      type: String,
      require: true,
    },

    address: {
      type: String,
      require: true
    },

    phone: {
      type: Number,
      require: true,
    },
    
    status : {
      type: Boolean,
      default: true,
      require: true
    }
  }
)

module.exports = model("Clients", clientsSchema)