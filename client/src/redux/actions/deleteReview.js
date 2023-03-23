import axios from "axios";
const DELETE_REVIEW = "DELETE_REVIEW";

export default function deleteReview(id) {
	return async function (dispatch) {
		const response = await axios.delete(
			`/superadmins/deletefeedbacks/app/${id}`
		);
		if (response.status === 200) {
			return dispatch({
				type: DELETE_REVIEW,
				payload: id,
			});
		}
	};
}
