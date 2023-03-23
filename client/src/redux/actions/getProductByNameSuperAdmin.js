import axios from "axios";
import { GET_PRODUCT_BY_NAME_SUPERADMIN } from "./types";

export function getProductsByNameSuperAdmin(productName) {
	return async function (dispatch) {
		const product = await axios.get(`superadmins/products/search?name=${productName}`);
		return dispatch({ type: GET_PRODUCT_BY_NAME_SUPERADMIN, payload: product.data });
	};
}
