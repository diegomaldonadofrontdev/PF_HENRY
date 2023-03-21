const { Schema, model } = require('mongoose');


const subCategorySchema = Schema(
    {
        name :{
            type: String,     
            require: true
        },

        category: {
            type: String,
            require: true
        }
    },
    {timestamps: false}
)

module.exports = model("Subcategories", subCategorySchema);