import axios from "axios";
import { GET_ALL_CLIENTS } from "../actions/types";

export default function getAllClients () {
    return async function (dispatch) {
        const clients = await axios.get("/superadmins/all");
        return dispatch({
            type: GET_ALL_CLIENTS,
            payload: clients.data
        });
    };
}