import axios from "axios";
import { GET_TRADES_BY_NAME_SUPERADMIN } from "../actions/types";

export function getTradesByNameSuperAdmin(commerceName) {
	return async function (dispatch) {
		const trades = await axios.get(`superadmins/trades/search?name=${commerceName}`);
		return dispatch({ type: GET_TRADES_BY_NAME_SUPERADMIN, payload: trades.data });
	};
}
