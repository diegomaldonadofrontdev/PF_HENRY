const { Schema, model } = require('mongoose');


const categorySchema = Schema(
    {
        name :{
            type: String,     
            require: true
        },       
    },
    {timestamps: false}
)

module.exports = model("Categories", categorySchema);