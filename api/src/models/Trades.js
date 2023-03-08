const { Schema, model, Types } = require('mongoose')

const tradesSchema= Schema (
  {
    commerceName: { 
      type : String,
      require: true,
      trim: true,
    },
    
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: "Subcategorys",
    },

    description :{
      type : String,
      require: true,
    },

    userName: {
      type : String,
      require : true,
      trim: true,
    },
    email : {
      type: String,
      require: true,
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
      ref: "DeliveryZone"
    },

    products: {
      type: Schema.Types.Array,
      ref: "Products",
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