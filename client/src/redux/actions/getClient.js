import axios from "axios";
import { CURRENT_CLIENT } from "../actions/types";

export default function getCLient(id) {
  return async function (dispatch) {
    const client = await axios.get(`/clients/clients/search/${id}`);
    return dispatch({
      type: CURRENT_CLIENT,
      payload: client.data,
    });
  };
}
