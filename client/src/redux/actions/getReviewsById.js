import axios from "axios";
import { GET_REVIEW_BYID } from "./types";

const getReviewsById = (id) => {
    return async function (dispatch) {
        const feedback = await axios.get(`/superadmins/feedbacks/app/searh/${id}`);
        return dispatch({type: GET_REVIEW_BYID, payload: feedback.data})
    }
}

export default getReviewsById;