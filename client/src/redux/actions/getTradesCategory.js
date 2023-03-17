import axios from "axios";

export const GET_TRADES_CATEGORIES = "GET_TRADES_CATEGORIES";

export const getTradesCategories = () => {
	return async function (dispatch) {
		const json = await axios.get(`/clients/trades/categories`);
		return dispatch({ type: GET_TRADES_CATEGORIES, payload: json.data });
	};
};
