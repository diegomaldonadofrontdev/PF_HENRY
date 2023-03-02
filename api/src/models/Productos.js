import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      category: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
      },
      price : {
        type: Number,
        required: true,
      },
      image : {
        type: String,
        required: true,
      },
      rating : {
        type: Number,
      },
      stock : {
        type: Number,
        required: true,
      }

      
    }
)

export default mongoose.model("Productos", productsSchema)