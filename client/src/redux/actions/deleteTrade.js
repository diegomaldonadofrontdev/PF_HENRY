import axios from "axios";
const DELETE_CLIENT = "DELETE_CLIENT";

export function deleteTrade (id) {
    return async function (dispatch) {
        const tradeDelete = await axios.delete(`/superadmins/deleteTrade/${id}`)
        return tradeDelete;
    }
};