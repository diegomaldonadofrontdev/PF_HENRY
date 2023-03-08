const { Schema, model } = require('mongoose');


const categoryProductsSchema = Schema(
    {
        categoryName: {
            type: String,
            require: true
        },

        status: {
            type: Boolean,
            require: true
        }
    }
)


module.exports = model('CategoryProducts',categoryProductsSchema);