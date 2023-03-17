import axios from "axios";

export const GET_TRADES = "GET_TRADES";

export function getTrades() {
	return async function (dispatch) {
		const trades = await axios.get(`/clients/trades/search`);
		return dispatch({ type: GET_TRADES, payload: trades.data });
	};
}
