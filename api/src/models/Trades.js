const { Schema, model, Types } = require('mongoose')

const tradesSchema= Schema (
  {
    commerceName: { 
      type : String,
      require: true,
      trim: true,
      unique: true
    },
    
    category: {
      type: String,
      require: true
    },
    
    subcategory: {
      type: String,
      require: true,
    },

    description :{
      type : String,
      require: true,
    },

    image: {
      type: String,
      require: true
    },
    
    province: {
      type: String,
      require: true
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
    
    deliveryZone: {
      type: Schema.Types.Array,
      require: true
    },    
    
    userName: {
      type : String,
      require : true,
      trim: true,
      unique: true
    },

    password : {
      type: String,
      require: true,
      unique: true,
    },
    
    email : {
      type: String,
      require: true,
      unique: true
    },

    rating: {
      type: Number,
      require: false,
    },

    epagos: {
      type: String,
      require: true
    },

    active : {
      type: Boolean,
      default: true,
    },

    emailVerified: {
      type: Boolean,
      default: false
    }
  }
)

module.exports = model("Trades", tradesSchema)