const { Schema, model } = require('mongoose');

const feedbackSchema = Schema(
    {
        clientFedback: {
            type: Schema.Types.ObjectId,
            ref: "Clients",
            require: true
        },

        trade:{
            type: Schema.Types.ObjectId,
            ref: "Trades",
            require: true
        },

        opinion: {
            type: String,
            require: true
        },

        ratingFeedback:{
            type: Number,
            require: true
        },

        imgs: {
            type: Schema.Types.Array,
            require: true
        }
    }
)

module.exports = model('Feedback',feedbackSchema);