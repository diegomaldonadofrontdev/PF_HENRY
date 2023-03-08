const {Schema, model} = require('mongoose');

const productsSchema = Schema(
    {
      name: {
        type: String,
        require: true,
        trim: true,
      },
      category: {
        type: Schema.Types.Array,
        ref: "CategoryProducts",
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
        require: true
      },
      stock : {
        type: Number,
        require: false,
      }

      
    }
)

module.exports = model("Products",productsSchema);