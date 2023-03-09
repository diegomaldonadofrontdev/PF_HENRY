const { Schema, model } = require('mongoose');


const orderSchema = Schema(
    {
        userOrder :{
            type: Schema.Types.ObjectId,
            ref: "Clients",
            require: true
        },

        tradesOrder :{
            type: Schema.Types.ObjectId,
            ref: "Trades",
            require: true
        },

        productsOrder: {
            type: Schema.Types.Array,
            ref: "Products",
            require: true
        },

        status: {
            type: Boolean,
            require: true
        }
    }
)

module.exports = model("Order",orderSchema);