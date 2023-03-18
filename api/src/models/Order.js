const { Schema, model } = require('mongoose');


const orderSchema = Schema(
    {
        clientId :{
            type: String,        
            require: true
        },

        tradeId :{
            type: String,            
            require: true
        },

        products: {
            type: Schema.Types.Array,            
            require: true
        },

        total: {
            type: Number,
            require: true
        },

        status: {
            type: String,
            require: false,
            default: "Procesando pedido"
        }
    },
    {timestamps: true}
)

module.exports = model("Order",orderSchema);