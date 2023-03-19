import axios from "axios";

import { GET_ORDERS_CLIENT } from "./types";

export function getOrdersClient(clientId) {
	return async function (dispatch) {
		const orders = await axios.get(`clients/order/search?clientId=${clientId}`);

		return dispatch({ type: GET_ORDERS_CLIENT, payload: orders });
	};
}
