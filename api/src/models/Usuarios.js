import mongoose from "mongoose"

const usersSchema= new mongoose.Schema (
  {
    firstName: { 
      type : String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
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

export default mongoose.model("Usuarios", usersSchema)