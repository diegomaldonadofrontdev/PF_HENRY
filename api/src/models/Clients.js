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
    
    profileImg: {
      type: String,
      require: false
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
      require: false,
    },

    city : {
      type: String,
      require: false,
    },

    address: {
      type: String,
      require: false
    },

    phone: {
      type: Number,
      require: false,
    },
    
    loginG: {
      type: Boolean,
      default: true,
      require: true
    },

    emailVerified : {
      type: Boolean,
      default: false,
      require: true,
    },

    active : {
      type: Boolean,
      default: false,
      require: false
    }
  }
)

module.exports = model("Clients", clientsSchema)