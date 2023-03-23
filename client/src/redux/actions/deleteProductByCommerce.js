import axios from "axios";

export function deleteProductByCommerce(id) {
	return async function (dispatch) {
		const productDelete = await axios.delete(`/trades/products/${id}`);
		if (productDelete.status === 200) {
			return dispatch({
				type: "DELETE_PRODUCT_BY_ID",
				payload: id,
			});
		}
	};
}
