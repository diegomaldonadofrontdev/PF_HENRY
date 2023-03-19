import axios from "axios";
import { EDIT_CLIENT } from "../actions/types";

export function editClient(body, id) {
	return async (dispatch) => {
		await axios.put(`/clients/update/${id}`, body);

		dispatch({
			type: EDIT_CLIENT,
			payload: { body, id },
		});
	};
}

// return async function () {
//     const order = await axios.post(
//         `/clients/order/newOrder?tradeId=${idCommerce}&clientId=${idClient}`,
//         carrito
//     );
//     return order;
// };
