import axios from "axios";

import { GET_ORDERS_BY_COMMERCE } from "../actions/types";

export function getOrdersByCommerce(tradeId) {
	return async function (dispatch) {
		const orders = await axios.get(`/trades/orders/search?tradeId=${tradeId}`);
		return dispatch({ type: GET_ORDERS_BY_COMMERCE, payload: orders.data });
	};
}


