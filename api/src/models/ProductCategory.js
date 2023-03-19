const { Schema, model } = require('mongoose');


const productCategorySchema = Schema(
    {
        name :{
            type: String,     
            require: true
        },       
    },
    {timestamps: false}
)

module.exports = model("ProductCategories", productCategorySchema);