import axios from "axios";
import { GET_REVIEWS } from "../actions/types";

export const getReviews = () => {
  return async function (dispatch) {
    const json = await axios.get(`/clients/app/feedbacks`);
    return dispatch({ type: GET_REVIEWS, payload: json.data });
  };
};
