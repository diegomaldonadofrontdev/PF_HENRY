import axios from "axios";
import { PUT_ORDER_STATUS_PAYMENT } from "./types";

export function updateStatusAndPayment(orderId, data) {
	return async function (dispatch) {
		await axios.put(`/clients/order/update/${orderId}`, data);
		return dispatch({
			type: PUT_ORDER_STATUS_PAYMENT,
			payload: { orderId, data },
		});
	};
}
