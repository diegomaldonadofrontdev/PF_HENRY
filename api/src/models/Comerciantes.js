import mongoose from "mongoose"

const comerciantesSchema= new mongoose.Schema (
  {
    commerceName: { 
      type : String,
      required: true,
      trim: true,
    },
    
    category: {
      type: String,
      required: true,
    },

    description :{
      type : String,
      required: true,
    },

    userName: {
      type : String,
      required : true,
      trim: true,
    },
    email : {
      type: String,
      required: true,
    },
    password : {
      type: String,
      required: true,
      unique: true,
    },
    country : {
      type: String,
      required: true,
    },
    city : {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true
    },
    telephone: {
      type: Number,
      required: true,
    },
    active : {
      type: Boolean,
      default: true,
    }
  }
)

export default mongoose.model("Comerciantes", comerciantesSchema)