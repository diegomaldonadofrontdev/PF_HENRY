const {Schema,model} = require('mongoose');


const tradeBossSchema= Schema (
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

    phone: {
      type: Number,
      require: false,
    },
    
    loginG: {
      type: Boolean,
      default: false,
      require: false
    },

    emailVerified : {
      type: Boolean,
      default: false,
      require: false,
    },

    active : {
      type: Boolean,
      default: false,
      require: false
    }
  }, {timestamps: true}
)

module.exports = model("TradeBoss", tradeBossSchema)