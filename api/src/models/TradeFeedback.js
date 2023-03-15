const { Schema, model } = require('mongoose');

const feedbackSchema = Schema(
    {
        clientId: {
            type: String,          
            require: true
        },

        tradeId: {
            type: String,
            require: true
        },

        name: {
            type: String,
            require: true
        },

        lastName: {
            type: String,
            require: true
        },

        opinion: {
            type: String,
            require: true
        },

        rating:{
            type: Number,
            require: true
        },

        image: {
            type: String,
            require: false
        }
    }
)

module.exports = model('TradeFeedback',feedbackSchema);