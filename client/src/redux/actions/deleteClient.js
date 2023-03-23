import axios from "axios";
const DELETE_CLIENT = "DELETE_CLIENT";

export default function deleteClient(id) {
	return async function (dispatch) {
		const clientDelete = await axios.delete(`/superadmins/deleteClient/${id}`);
		if (clientDelete.status === 200) {
			return dispatch({
				type: DELETE_CLIENT,
				payload: id,
			});
		}
	};
}
