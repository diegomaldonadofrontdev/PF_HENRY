import axios from "axios";

import { GET_USER } from "../actions/types";

export const getUsers = () => {
  return async function (dispatch) {
    const json = await axios.get(`/users`);
    return dispatch({ type: GET_USER, payload: json.data });
  };
};
