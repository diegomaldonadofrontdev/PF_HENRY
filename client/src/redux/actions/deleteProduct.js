import axios from "axios";

export function deleteProduct (id) {
    return async function (dispatch) {
        const productDelete = await axios.delete(`/superadmins/deleteproduct/${id}`)
        return productDelete;
    }
};