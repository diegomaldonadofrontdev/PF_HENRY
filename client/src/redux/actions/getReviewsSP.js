import axios from "axios";
import { GET_REVIEWS } from "../actions/types";

const getReviewsSP = () => {
  return async function (dispatch) {
    const json = await axios.get(`/superadmins/feedbacks/app/search`);
    return dispatch({ type: GET_REVIEWS, payload: json.data });
  };
};

export default getReviewsSP;