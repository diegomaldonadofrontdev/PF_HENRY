import axios from "axios";
import { GET_CLIENT_FORSP } from "./types";

export default function getClientForSP (id) {
    return async function (dispatch) {
        const client = await axios.get(`/clients/clients/search/${id}`);
        return dispatch({
          type: GET_CLIENT_FORSP,
          payload: client.data,
        });
      };
}