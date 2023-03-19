import axios from "axios";
import { POST_PAYMENT } from "../actions/types";

export function postPayment(idCommerce, idUser, carrito) {
	console.log(idCommerce, idUser, carrito);
	return async function (dispatch) {
		const data = await axios.post(
			`/payment?idCommerce=${idCommerce}&idUser=${idUser}`,
			carrito.data
		);

		return dispatch({
			type: POST_PAYMENT,
			payload: data.data,
		});
	};
}
