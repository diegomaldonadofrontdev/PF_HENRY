const { Schema, model } = require('mongoose');


const DeliveryZoneSchema = Schema(
    {
        name :{
            type: String,     
            require: true
        },       
    },
    {timestamps: false}
)

module.exports = model("DeliveryZone", DeliveryZoneSchema);