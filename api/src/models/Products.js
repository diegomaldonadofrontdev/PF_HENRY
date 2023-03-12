const {Schema, model} = require('mongoose');

const productsSchema = Schema(
    {
      tradeId: {
        type: String,
        require: true
      },

      name: {
        type: String,
        require: true,        
        // trim: true,
      },

      category: {
        type: String,        
        require: true,
      },

      description: {
        type: String,
        require: true,
      },

      price : {
        type: Number,
        require: true,
      },

      image : {
        type: String,
        require: true,
      },

      rating : {
        type: Number,
        require: false
      },
      
      stock : {
        type: Number,
        require: false,
      }

      
    }
)

module.exports = model("Products",productsSchema);