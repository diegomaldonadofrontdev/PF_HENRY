const { Schema, model } = require("mongoose");

const orderSchema = Schema(
	{
		clientId: {
			type: String,
			require: true,
		},

		tradeId: {
			type: String,
			require: true,
		},

		products: {
			type: Schema.Types.Array,
			require: true,
		},

		status: {
			type: String,
			require: false,
			default: "Pendiente",
		},

		payment: {
			type: String,
			require: false,
			default: "Pago no recibido",
		},
	},
	{ timestamps: true }
);

module.exports = model("Order", orderSchema);
