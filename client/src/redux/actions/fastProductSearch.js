import { GET_PRODUCT } from "../actions/types";

export function fastProductSearch(name) {
	return async function (dispatch) {
		return dispatch({
			type: GET_PRODUCT,
			payload: name,
		});
	};
}
