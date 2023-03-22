import axios from "axios";
import { GET_REVIEW_BYID } from "./types";

const getReviewsById = (id) => {
    return async function (dispatch) {
        const feedback = await axios.get(`/clients/app/feedback/${id}`);
        return dispatch({type: GET_REVIEW_BYID, payload: feedback.data})
    }
}

export default getReviewsById;