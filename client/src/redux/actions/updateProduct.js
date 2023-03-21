// /products/update/:productId
import axios from "axios";
import { UPDATE_PRODUCT } from "./types";

export function updateProduct(product) {
	const { id, ...rest } = product;
	return async function (dispatch) {
		const res = await axios.put(`trades/products/update/${id}`, rest);
		if (res.status === 200) {
			return dispatch({
				type: UPDATE_PRODUCT,
				payload: product,
			});
		}
	};
}
