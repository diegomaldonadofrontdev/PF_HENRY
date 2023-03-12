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

    userName: {
      type : String,
      require : true,
      trim: true,
      unique: true
    },
    email : {
      type: String,
      require: true,
      unique: true
    },
    password : {
      type: String,
      require: true,
      unique: true,
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

    deliveryZone: {
      type: Schema.Types.Array,
      require: true
    },

    products: {
      type: Schema.Types.Array,
      require: false
    },

    rating: {
      type: Number,
      require: false,
    },

    epagos: {
      type: Boolean,
      require: true
    },

    status : {
      type: Boolean,
      default: true,
      require: true
    }
  }
)

module.exports = model("Trades", tradesSchema)