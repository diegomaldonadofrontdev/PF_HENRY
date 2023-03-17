import { DELETE_ITEM_CART } from "../actions/types";

export function deleteItemCart(idProduct, idCommerce) {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_ITEM_CART,
      payload: { idProduct, idCommerce },
    });
  };
}
