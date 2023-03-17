import axios from "axios";

export const GET_USER = "GET_USER";

export const getUsers = () => {
  return async function (dispatch) {
    const json = await axios.get(`/users`);
    return dispatch({ type: GET_USER, payload: json.data });
  };
};
