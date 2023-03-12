const { Schema, model } = require('mongoose');

const feedbackSchema = Schema(
    {
        clientId: {
            type: String,          
            require: true
        },

        name: {
            type: String,
            require: true
        },

        opinion: {
            type: Text,
            require: true
        },

        rating:{
            type: Number,
            require: true
        },

        image: {
            type: String,
            require: true
        }
    }
)

module.exports = model('Feedback',feedbackSchema);