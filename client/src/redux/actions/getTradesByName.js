import axios from "axios";
import { GET_TRADES_BY_NAME } from "./types";

export function getTradesByName(commerceName) {
	return async function (dispatch) {
		const trades = await axios.get(
			`/trades/search?commerceName=${commerceName}`
		);
		return dispatch({ type: GET_TRADES_BY_NAME, payload: trades.data });
	};
}
