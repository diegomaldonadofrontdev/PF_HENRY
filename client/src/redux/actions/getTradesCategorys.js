import axios from "axios";
import { GET_TRADES_SUPERADMINS_CATEGORIES } from "../actions/types";

export function getTradesCategory() {
	return async function (dispatch) {
		const category = await axios.get(`superadmins/trades/categories`);
		console.log(category.data);
		return dispatch({ type: GET_TRADES_SUPERADMINS_CATEGORIES, payload: category.data });
	};
}
