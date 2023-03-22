import axios from "axios";
import { GET_TRADES_BY_NAME } from "./types";

export function getTradesByName(commerceName) {
	return async function (dispatch) {
		console.log(commerceName);
		const trades = await axios.get(`superadmins/trades/search`);
		return dispatch({ type: GET_TRADES_BY_NAME, payload: trades.data });
	};
}
