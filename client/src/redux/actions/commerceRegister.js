import axios from "axios";

export function commerceRegister(payload) {
	console.log(payload);
	return async function (dispatch) {
		const postCommerce = await axios.post(`/superadmins/newTrade`, payload);
		if (postCommerce.status === 200) {
			dispatch({
				type: "CREATE_TRADE_",
				payload,
			});
		}
	};
}
