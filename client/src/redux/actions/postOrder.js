import axios from "axios";

export default function postOrder(idCommerce, idClient, carrito) {
	console.log(idCommerce, idClient, carrito.data);
	return async function () {
		const order = await axios.post(
			`/clients/order/newOrder?tradeId=${idCommerce}&clientId=${idClient}`,
			carrito
		);
		return order;
	};
}
