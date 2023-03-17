import axios from "axios";

export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export function getProductById(id) {
	return async function (dispatch) {
		if (id) {
			const response = await axios(`/clients/products/search/${id}`);
			dispatch({
				type: GET_PRODUCT_BY_ID,
				payload: [response.data],
			});
		}
	};
}
