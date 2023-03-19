import { GET_PRODUCT } from "../actions/types";

export function fastProductSearch(name) {
	console.log("en la action " + name);
	return async function (dispatch) {
		return dispatch({
			type: GET_PRODUCT,
			payload: name,
		});
	};
}
