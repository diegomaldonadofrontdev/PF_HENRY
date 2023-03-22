import axios from "axios";
const DELETE_CLIENT = "DELETE_CLIENT";

export default function deleteClient (id) {
    return async function (dispatch) {
        const clientDelete = axios.delete(`/superadmins/deleteClient/${id}`)
        return dispatch({
            type: DELETE_CLIENT,
            payload: clientDelete
        })
    }
};