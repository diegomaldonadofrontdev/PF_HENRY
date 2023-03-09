const { Schema, model } = require('mongoose');

const subcategorySchema = Schema(
    {
        subcategoryName: {
            type: String,
            require: true
        },

        status: {
            type: Boolean,
            require: true
        }
    }
);

module.exports = model("Subcategorys",subcategorySchema);