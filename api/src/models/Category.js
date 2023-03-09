const { Schema, model} = require('mongoose');

const categorySchema = Schema(
    {
        categoryName :{
            type: String,
            require: true
        },

        status :{
            type: Boolean,
            default: true,
            require: true
        },

        trades :{
            type: Schema.Types.Array,
            ref: "Trades",
        }




    }
)


module.exports = model('Category',categorySchema);