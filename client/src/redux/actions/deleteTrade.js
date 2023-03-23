import axios from "axios";
const DELETE_TRADE = "DELETE_TRADE";

export function deleteTrade(id) {
	return async function (dispatch) {
		const tradeDelete = await axios.delete(`/superadmins/deleteTrade/${id}`);
		if (tradeDelete.status === 200) {
			dispatch({ type: DELETE_TRADE, payload: id });
		}
	};
}
