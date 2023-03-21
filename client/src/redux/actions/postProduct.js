import axios from "axios";

import { POST_PRODUCT } from "./types";

export function postProduct(payload, tradeId) {
	return async function (dispatch) {
		const res = await axios.post(`/trades/newProduct/${tradeId}`, payload);
		if (res.status === 200) {
			return dispatch({
				type: POST_PRODUCT,
				payload: res.data,
			});
		}
	};
}
