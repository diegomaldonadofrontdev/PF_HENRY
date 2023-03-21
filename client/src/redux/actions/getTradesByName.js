import axios from "axios";
import { GET_TRADES_BY_NAME } from "../actions/types";

export function getTradesByName(commerceName) {
	return async function (dispatch) {
		return dispatch({ type: GET_TRADES_BY_NAME, payload: commerceName });
	};
}
