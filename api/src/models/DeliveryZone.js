const { Schema, model } = require('mongoose');

const deliverySchema = Schema(
    {
        deliveryZoneName :{
            type: String,
            require: true
        },

        status : {
            type: Boolean,
            default: true,
            require: true
        }
    }
)

module.exports = model("DeliveryZone",deliverySchema);